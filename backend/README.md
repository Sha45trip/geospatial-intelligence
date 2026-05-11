# Backend API Specification (Future Phase)

This folder is reserved for the backend service. The frontend prototype uses mock data.
In production, the following endpoints would be served:

## Endpoints

### POST /api/sites/ingest
Ingest single or bulk site records.
Body: { sites: [{name, lat, lng, type: "own"|"competitor", portfolio_id}] }

### GET /api/sites/{site_id}/change-detection?start=YYYY-MM&end=YYYY-MM
Returns monthly % completion data derived from ML-based SAR/optical change detection.

### GET /api/sites/{site_id}/catchment?radius_km=10&layers=highways,malls,competitors
Returns GeoJSON FeatureCollection of POIs within the specified radius.

### POST /api/screen/biodiversity
Body: { geom: <GeoJSON geometry>, buffer_km: number, indicators: string[], query_type: "A"|"B"|"C" }
Returns tabular screening results + GeoJSON of intersecting features.

## Tech Stack (Recommended)
- FastAPI (Python)
- PostGIS (geospatial queries)
- Google Earth Engine API / Sentinel Hub (satellite imagery)
- OpenStreetMap / Overpass API (POI data)
- WDPA API (World Protected Areas)
