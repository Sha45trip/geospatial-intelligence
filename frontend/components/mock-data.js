/**
 * Fallback Mock Data for Geospatial Intelligence Module
 * Used when fetch() fails (e.g. opening via file:// protocol)
 */

window.GEO_MOCK_PORTFOLIOS = [
  { "id": "port_mh", "name": "Maharashtra Logistics", "site_ids": ["site_001", "site_002", "comp_001"] },
  { "id": "port_ka", "name": "Karnataka Campus Portfolio", "site_ids": ["site_003", "site_004", "comp_003"] },
  { "id": "port_dl", "name": "North India Retail", "site_ids": ["site_005", "site_006", "comp_004"] },
  { "id": "port_wb", "name": "West Bengal Industrial", "site_ids": ["site_007", "site_008"] }
];

window.GEO_MOCK_SITES_OWN = [
  { "id": "site_001", "name": "Pune Logistics Hub", "type": "own", "state": "Maharashtra", "lat": 18.5204, "lng": 73.8567, "status": "Monitoring Active", "last_updated": "2024-05-10" },
  { "id": "site_002", "name": "Mumbai Tech Park", "type": "own", "state": "Maharashtra", "lat": 19.0760, "lng": 72.8777, "status": "Monitoring Active", "last_updated": "2024-05-08" },
  { "id": "site_003", "name": "Bengaluru East Campus", "type": "own", "state": "Karnataka", "lat": 12.9716, "lng": 77.5946, "status": "Analysis Pending", "last_updated": "2024-05-09" },
  { "id": "site_004", "name": "Mysuru Warehousing", "type": "own", "state": "Karnataka", "lat": 12.2958, "lng": 76.6394, "status": "Monitoring Active", "last_updated": "2024-05-07" },
  { "id": "site_005", "name": "Gurugram Retail Plaza", "type": "own", "state": "Delhi NCR", "lat": 28.4595, "lng": 77.0266, "status": "Monitoring Active", "last_updated": "2024-05-06" },
  { "id": "site_006", "name": "Noida Data Center", "type": "own", "state": "Delhi NCR", "lat": 28.5355, "lng": 77.3910, "status": "Stale", "last_updated": "2024-04-20" },
  { "id": "site_007", "name": "Kolkata Riverside Apts", "type": "own", "state": "West Bengal", "lat": 22.5726, "lng": 88.3639, "status": "Monitoring Active", "last_updated": "2024-05-05" },
  { "id": "site_008", "name": "Haldia Industrial Zone", "type": "own", "state": "West Bengal", "lat": 22.0667, "lng": 88.0667, "status": "Analysis Pending", "last_updated": "2024-05-04" }
];

window.GEO_MOCK_SITES_COMP = [
  { "id": "comp_001", "name": "Reliance Logistics Pune", "type": "competitor", "state": "Maharashtra", "lat": 18.5500, "lng": 73.8000, "status": "Monitoring Active", "last_updated": "2024-05-01" },
  { "id": "comp_003", "name": "DLF Cyber City Bengaluru", "type": "competitor", "state": "Karnataka", "lat": 12.9500, "lng": 77.6500, "status": "Monitoring Active", "last_updated": "2024-05-03" },
  { "id": "comp_004", "name": "Godrej Properties Gurugram", "type": "competitor", "state": "Delhi NCR", "lat": 28.4800, "lng": 77.0500, "status": "Monitoring Active", "last_updated": "2024-05-04" }
];

window.GEO_MOCK_CHANGE_DETECTION = {
  "site_001": {
    "name": "Pune Logistics Hub",
    "state": "Maharashtra",
    "lat": 18.5204,
    "lng": 73.8567,
    "analysis": {
      "insights": "Construction pace has increased by 15% in Q2. Foundation work is 100% complete. Superstructure phase is currently at 45%. No significant environmental risks detected.",
      "milestones": [
        { "name": "Excavation", "status": "Completed", "date": "Jan 2024" },
        { "name": "Foundation", "status": "Completed", "date": "Mar 2024" },
        { "name": "Superstructure", "status": "In Progress", "date": "Est. Aug 2024" }
      ]
    },
    "monthly_progress": [
      { "month": "2024-01", "pct_completion": 5 },
      { "month": "2024-02", "pct_completion": 12 },
      { "month": "2024-03", "pct_completion": 20 },
      { "month": "2024-04", "pct_completion": 28 },
      { "month": "2024-05", "pct_completion": 35 }
    ]
  },
  "site_002": {
    "name": "Mumbai Tech Park",
    "state": "Maharashtra",
    "lat": 19.0760,
    "lng": 72.8777,
    "analysis": {
      "insights": "Slow progress due to monsoon drainage requirements. Interior fit-outs scheduled for late Q3. Structural integrity verified via SAR.",
      "milestones": [
        { "name": "Piling", "status": "Completed", "date": "Dec 2023" },
        { "name": "Basement", "status": "Completed", "date": "Feb 2024" },
        { "name": "Podium", "status": "In Progress", "date": "Est. Oct 2024" }
      ]
    },
    "monthly_progress": [
      { "month": "2024-01", "pct_completion": 10 },
      { "month": "2024-02", "pct_completion": 15 },
      { "month": "2024-03", "pct_completion": 22 },
      { "month": "2024-04", "pct_completion": 30 },
      { "month": "2024-05", "pct_completion": 38 }
    ]
  },
  "comp_001": {
    "name": "Reliance Logistics Pune",
    "state": "Maharashtra",
    "lat": 18.5500,
    "lng": 73.8000,
    "analysis": {
      "insights": "Highly aggressive development cycle observed. Competitor is utilizing pre-fab components. Predicted completion 2 months ahead of schedule.",
      "milestones": [
        { "name": "Land Clearing", "status": "Completed", "date": "Oct 2023" },
        { "name": "Utility Hookup", "status": "Completed", "date": "Dec 2023" },
        { "name": "Main Frame", "status": "In Progress", "date": "Est. June 2024" }
      ]
    },
    "monthly_progress": [
      { "month": "2024-01", "pct_completion": 20 },
      { "month": "2024-02", "pct_completion": 35 },
      { "month": "2024-03", "pct_completion": 50 },
      { "month": "2024-04", "pct_completion": 65 },
      { "month": "2024-05", "pct_completion": 80 }
    ]
  }
};

window.GEO_MOCK_POI = {
  "site_001": {
    "highways": [ { "name": "NH-48", "lat": 18.53, "lng": 73.86, "distance_km": 1.2 } ],
    "competitors": [ { "name": "Reliance Warehouse", "lat": 18.51, "lng": 73.84, "distance_km": 2.5 } ],
    "malls": [ { "name": "Phoenix Marketcity", "lat": 18.56, "lng": 73.91, "distance_km": 4.8 } ],
    "substations": [ { "name": "Pune East Grid", "lat": 18.52, "lng": 73.88, "distance_km": 2.1 } ]
  },
  "site_002": {
    "highways": [ { "name": "Eastern Express Hwy", "lat": 19.08, "lng": 72.88, "distance_km": 0.8 } ],
    "competitors": [ { "name": "Tata Tech Hub", "lat": 19.10, "lng": 72.90, "distance_km": 3.2 } ],
    "malls": [ { "name": "R-City Mall", "lat": 19.09, "lng": 72.91, "distance_km": 4.1 } ],
    "substations": [ { "name": "Ghatkopar Substation", "lat": 19.07, "lng": 72.89, "distance_km": 1.5 } ]
  },
  "site_003": {
    "highways": [ { "name": "Outer Ring Road", "lat": 12.98, "lng": 77.60, "distance_km": 1.5 } ],
    "competitors": [ { "name": "Infosys Campus", "lat": 12.96, "lng": 77.58, "distance_km": 2.8 } ],
    "malls": [ { "name": "Indiranagar Retail", "lat": 12.97, "lng": 77.63, "distance_km": 5.2 } ],
    "substations": [ { "name": "HAL Power Station", "lat": 12.95, "lng": 77.61, "distance_km": 3.4 } ]
  },
  "site_004": {
    "highways": [ { "name": "Bengaluru-Mysuru Hwy", "lat": 12.30, "lng": 76.64, "distance_km": 0.9 } ],
    "competitors": [ { "name": "Local Logistics", "lat": 12.28, "lng": 76.62, "distance_km": 4.5 } ],
    "malls": [ { "name": "Mall of Mysore", "lat": 12.31, "lng": 76.66, "distance_km": 6.7 } ],
    "substations": [ { "name": "Mysuru South Grid", "lat": 12.27, "lng": 76.65, "distance_km": 2.2 } ]
  },
  "site_005": {
    "highways": [ { "name": "Delhi-Gurugram Expway", "lat": 28.47, "lng": 77.04, "distance_km": 0.5 } ],
    "competitors": [ { "name": "Local Hub", "lat": 28.45, "lng": 77.01, "distance_km": 3.1 } ],
    "malls": [ { "name": "Ambience Mall", "lat": 28.50, "lng": 77.09, "distance_km": 6.2 } ],
    "substations": [ { "name": "Sector 45 Grid", "lat": 28.44, "lng": 77.03, "distance_km": 1.8 } ]
  },
  "site_007": {
    "highways": [ { "name": "Kolkata Bypass", "lat": 22.58, "lng": 88.37, "distance_km": 1.1 } ],
    "competitors": [ { "name": "Ambuja Neotia Site", "lat": 22.55, "lng": 88.35, "distance_km": 2.9 } ],
    "malls": [ { "name": "South City Mall", "lat": 22.50, "lng": 88.36, "distance_km": 7.4 } ],
    "substations": [ { "name": "CESC Central Station", "lat": 22.56, "lng": 88.38, "distance_km": 2.0 } ]
  }
};
