# Geospatial Intelligence Module

This is a **frontend-only prototype** for a real estate geospatial platform. It is designed to be deployed as a static site (e.g., GitHub Pages).

## Features
- **Portfolio Dashboard**: Overview of assets across regions.
- **Site Development Tracker**: Time-series analysis of construction progress using simulated satellite imagery.
- **Catchment Mapper**: Infrastructure and competitor analysis within a 10km radius.
- **Biodiversity Screening**: Ecological sensitivity checks against protected areas and heritage sites.

## Tech Stack
- **Structure**: Vanilla HTML5 / JS
- **Styling**: Vanilla CSS (Design Tokens)
- **Mapping**: Leaflet.js (CDN)
- **Charts**: Chart.js (CDN)
- **Icons**: Lucide (CDN)

## Deployment
This module is ready for GitHub Pages. 
1. Push to a repository.
2. Enable GitHub Pages on the root directory.
3. Access via `[username].github.io/[repo-name]/geospatial-intelligence/index.html`.

## Development
All data is served from the `mock-data/` directory. No local server is required, though a simple HTTP server (like VS Code Live Server) is recommended to avoid CORS issues when fetching local JSON files.
