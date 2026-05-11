/**
 * Reusable Map Panel Component (Leaflet wrapper)
 */
const MapPanel = {
  initMap(containerId, center = [20.5937, 78.9629], zoom = 5) {
    const map = L.map(containerId, {
      zoomControl: false,
      attributionControl: true
    }).setView(center, zoom);

    // Positron tiles (Light Theme)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(map);

    // Add zoom control to top-right
    L.control.zoom({ position: 'topright' }).addTo(map);

    // Layer groups for markers and overlays
    const layerGroups = {
      sites: L.layerGroup().addTo(map),
      competitors: L.layerGroup(),
      highways: L.layerGroup(),
      malls: L.layerGroup(),
      protected: L.layerGroup(),
      rivers: L.layerGroup(),
      buffer: L.layerGroup().addTo(map)
    };

    // Handle resize
    window.addEventListener('resize', () => {
      map.invalidateSize();
    });

    return { map, layerGroups };
  },

  createCustomIcon(color, iconName = 'map-pin') {
    return L.divIcon({
      className: 'custom-div-icon',
      html: `<div style="background-color: ${color}; width: 24px; height: 24px; border-radius: 50%; border: 2px solid white; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 5px rgba(0,0,0,0.5);">
               <i data-lucide="${iconName}" style="width: 14px; height: 14px; color: white;"></i>
             </div>`,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
      popupAnchor: [0, -12]
    });
  }
};
