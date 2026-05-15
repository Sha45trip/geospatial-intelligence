/**
 * overpass-utils.js
 * Fetches real highway and river/waterway geometries from the Overpass API (OpenStreetMap).
 * Free, no API key required.
 *
 * Usage:
 *   const geojson = await fetchOverpassGeoJSON('highway', lat, lng, radiusMeters);
 *   L.geoJSON(geojson, { ... }).addTo(map);
 */

const OVERPASS_ENDPOINT = 'https://overpass-api.de/api/interpreter';

// In-memory cache keyed by "type|lat|lng|radius"
const _overpassCache = {};

/**
 * Build an Overpass QL query for highways or waterways around a point.
 * @param {'highway'|'waterway'} type
 * @param {number} lat
 * @param {number} lng
 * @param {number} radius  – search radius in metres (default 15 000)
 */
function _buildQuery(type, lat, lng, radius) {
  if (type === 'highway') {
    // National Highways and Expressways only
    return `[out:json][timeout:25];(way["highway"~"motorway|trunk"](around:${radius},${lat},${lng}););out geom;`;
  }
  // Rivers, canals, streams
  return `[out:json][timeout:25];(way["waterway"~"river|canal"](around:${radius},${lat},${lng}););out geom;`;
}

/**
 * Convert Overpass JSON response → standard GeoJSON FeatureCollection.
 */
function _overpassToGeoJSON(data) {
  const features = (data.elements || [])
    .filter(el => el.type === 'way' && el.geometry && el.geometry.length > 1)
    .map(el => ({
      type: 'Feature',
      properties: {
        name: el.tags?.name || el.tags?.ref || el.tags?.highway || el.tags?.waterway || 'Unnamed',
        category: el.tags?.highway || el.tags?.waterway || 'unknown',
        ref: el.tags?.ref || ''
      },
      geometry: {
        type: 'LineString',
        coordinates: el.geometry.map(pt => [pt.lon, pt.lat])
      }
    }));
  return { type: 'FeatureCollection', features };
}

/**
 * Fetch real road or river GeoJSON for a given location.
 *
 * @param {'highway'|'waterway'} type
 * @param {number} lat
 * @param {number} lng
 * @param {number} [radius=15000] – metres
 * @returns {Promise<GeoJSON.FeatureCollection>}
 */
async function fetchOverpassGeoJSON(type, lat, lng, radius = 15000) {
  const cacheKey = `${type}|${lat.toFixed(2)}|${lng.toFixed(2)}|${radius}`;
  if (_overpassCache[cacheKey]) return _overpassCache[cacheKey];

  const query = _buildQuery(type, lat, lng, radius);

  try {
    const res = await fetch(OVERPASS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'data=' + encodeURIComponent(query)
    });
    if (!res.ok) throw new Error(`Overpass HTTP ${res.status}`);
    const json = await res.json();
    const geojson = _overpassToGeoJSON(json);
    _overpassCache[cacheKey] = geojson;
    console.log(`[Overpass] Loaded ${geojson.features.length} ${type} features near ${lat.toFixed(2)},${lng.toFixed(2)}`);
    return geojson;
  } catch (err) {
    console.warn(`[Overpass] Failed for ${type}:`, err.message);
    return null; // caller should use fallback
  }
}

/**
 * Convenience: render highways + rivers on a Leaflet map for a given location.
 * Falls back to window.GEO_MOCK_HIGHWAYS / GEO_MOCK_RIVERS if Overpass is unavailable.
 *
 * - Merges OSM segments by road name to avoid thousands of duplicate labels.
 * - Renders ALL segments as plain styled lines (no tooltips).
 * - Adds ONE permanent callout per unique road name at the midpoint of its longest segment.
 *
 * @param {L.LayerGroup} targetLayer – Leaflet layer group to add features to
 * @param {number} lat
 * @param {number} lng
 * @param {number} [radius=15000]
 */
async function renderInfrastructure(targetLayer, lat, lng, radius = 15000) {

  const renderGeo = (geojson, color, isHighway) => {
    if (!geojson || !geojson.features || geojson.features.length === 0) return;

    // 1. Group features by name
    const groups = {};
    geojson.features.forEach(f => {
      const name = f.properties.name || f.properties.ref || '';
      if (!name || name === 'Unnamed') return; // skip unnamed segments
      if (!groups[name]) groups[name] = [];
      groups[name].push(f);
    });

    // Also render unnamed segments as plain lines (no label)
    const unnamed = geojson.features.filter(f => {
      const n = f.properties.name || f.properties.ref || '';
      return !n || n === 'Unnamed';
    });

    // 2. Render ALL segments as plain styled lines (no per-segment tooltip)
    L.geoJSON(geojson, {
      style: { color, weight: isHighway ? 4 : 3, opacity: 0.85 },
      interactive: false // no click/hover needed for line segments
    }).addTo(targetLayer);

    // 3. For each unique road name, find the longest segment and add ONE permanent label at its midpoint
    const labelledNames = new Set();
    Object.entries(groups).forEach(([name, features]) => {
      if (labelledNames.has(name)) return;
      labelledNames.add(name);

      // Find the segment with the most coordinates (longest)
      let longest = features[0];
      let maxLen = 0;
      features.forEach(f => {
        const len = f.geometry.coordinates.length;
        if (len > maxLen) { maxLen = len; longest = f; }
      });

      // Get midpoint of the longest segment
      const coords = longest.geometry.coordinates;
      const mid = coords[Math.floor(coords.length / 2)];
      const ref = longest.properties.ref ? ` (${longest.properties.ref})` : '';
      const label = name + ref;

      let tClass = 'poi-tooltip';
      if (isHighway) tClass += ' highway-callout';

      // Invisible marker just for the label
      L.circleMarker([mid[1], mid[0]], { radius: 0, opacity: 0, fillOpacity: 0, interactive: false })
        .bindTooltip(label, { permanent: true, direction: 'center', className: tClass })
        .addTo(targetLayer);
    });

    console.log(`[Overpass] Rendered ${geojson.features.length} segments, ${labelledNames.size} unique labels`);
  };

  // Highways
  let hwData = await fetchOverpassGeoJSON('highway', lat, lng, radius);
  if (!hwData || hwData.features.length === 0) {
    console.warn('[Overpass] Using fallback highway data');
    hwData = window.GEO_MOCK_HIGHWAYS || null;
  }
  renderGeo(hwData, 'black', true);

  // Rivers / Waterways
  let rvData = await fetchOverpassGeoJSON('waterway', lat, lng, radius);
  if (!rvData || rvData.features.length === 0) {
    console.warn('[Overpass] Using fallback river data');
    rvData = window.GEO_MOCK_RIVERS || null;
  }
  renderGeo(rvData, '#3b82f6', false);
}
