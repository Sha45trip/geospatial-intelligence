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

window.GEO_MOCK_HIGHWAYS = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": { "name": "NH-48 / Mumbai-Pune Expressway", "category": "motorway", "ref": "NH-48" },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [73.7200,18.5800],[73.7350,18.5720],[73.7500,18.5650],[73.7620,18.5580],
          [73.7750,18.5530],[73.7900,18.5480],[73.8050,18.5430],[73.8200,18.5350],
          [73.8350,18.5280],[73.8500,18.5220],[73.8650,18.5150],[73.8800,18.5080],
          [73.8950,18.5000],[73.9100,18.4920],[73.9250,18.4830],[73.9400,18.4740],
          [73.9550,18.4640],[73.9700,18.4550],[73.9850,18.4450],[74.0000,18.4350]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Pune-Solapur Highway", "category": "trunk", "ref": "NH-65" },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [73.8200,18.5100],[73.8400,18.5050],[73.8600,18.4980],[73.8800,18.4900],
          [73.9000,18.4850],[73.9200,18.4780],[73.9400,18.4700],[73.9600,18.4620],
          [73.9800,18.4530],[74.0000,18.4440],[74.0200,18.4350],[74.0400,18.4260]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Eastern Express Highway", "category": "trunk", "ref": "" },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [72.8500,19.1800],[72.8530,19.1650],[72.8570,19.1500],[72.8600,19.1350],
          [72.8650,19.1200],[72.8680,19.1050],[72.8720,19.0900],[72.8750,19.0750],
          [72.8780,19.0600],[72.8800,19.0450],[72.8830,19.0300],[72.8860,19.0150],
          [72.8880,19.0000],[72.8900,18.9850],[72.8920,18.9700]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Outer Ring Road", "category": "primary", "ref": "ORR" },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [77.5000,13.0200],[77.5200,13.0150],[77.5400,13.0100],[77.5600,13.0000],
          [77.5800,12.9900],[77.6000,12.9800],[77.6200,12.9700],[77.6400,12.9600],
          [77.6600,12.9550],[77.6800,12.9600],[77.7000,12.9700],[77.7200,12.9800],
          [77.7400,12.9900],[77.7500,13.0000],[77.7400,13.0100],[77.7200,13.0200]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Bengaluru-Mysuru Expressway", "category": "motorway", "ref": "NH-275" },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [77.5400,12.9200],[77.5100,12.8800],[77.4800,12.8400],[77.4500,12.8000],
          [77.4200,12.7600],[77.3900,12.7200],[77.3500,12.6800],[77.3100,12.6400],
          [77.2700,12.6000],[77.2300,12.5600],[77.1900,12.5200],[77.1500,12.4800],
          [77.1100,12.4400],[77.0700,12.4000],[77.0300,12.3600],[76.9900,12.3200],
          [76.9400,12.3000],[76.8900,12.2800],[76.8400,12.2700],[76.7900,12.2700],
          [76.7400,12.2800],[76.6900,12.2900],[76.6400,12.2958]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Delhi-Jaipur Expressway", "category": "motorway", "ref": "NH-48" },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [77.1800,28.5500],[77.1600,28.5400],[77.1400,28.5300],[77.1200,28.5200],
          [77.1000,28.5100],[77.0800,28.5000],[77.0600,28.4900],[77.0400,28.4800],
          [77.0200,28.4700],[77.0000,28.4600],[76.9800,28.4500],[76.9600,28.4400],
          [76.9400,28.4350],[76.9200,28.4300],[76.9000,28.4280],[76.8800,28.4250],
          [76.8600,28.4220],[76.8400,28.4200]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "KMP Expressway", "category": "motorway", "ref": "KMP" },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [76.8500,28.5500],[76.8700,28.5300],[76.8900,28.5100],[76.9100,28.4900],
          [76.9300,28.4700],[76.9500,28.4500],[76.9700,28.4300],[76.9900,28.4100],
          [77.0100,28.3900],[77.0300,28.3700],[77.0500,28.3600],[77.0700,28.3500]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "EM Bypass / Kolkata Bypass", "category": "primary", "ref": "" },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [88.3900,22.6500],[88.3950,22.6300],[88.4000,22.6100],[88.4020,22.5900],
          [88.4000,22.5700],[88.3950,22.5500],[88.3900,22.5300],[88.3850,22.5100],
          [88.3800,22.4900],[88.3750,22.4700],[88.3700,22.4500],[88.3650,22.4300]
        ]
      }
    }
  ]
};

window.GEO_MOCK_RIVERS = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": { "name": "Mula River", "category": "river" },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [73.7200,18.5700],[73.7350,18.5680],[73.7500,18.5660],[73.7650,18.5620],
          [73.7800,18.5580],[73.7950,18.5540],[73.8100,18.5510],[73.8250,18.5470],
          [73.8400,18.5430],[73.8550,18.5380],[73.8700,18.5340],[73.8850,18.5290],
          [73.9000,18.5240],[73.9150,18.5200],[73.9300,18.5150]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Mutha River", "category": "river" },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [73.7800,18.5200],[73.7900,18.5230],[73.8000,18.5280],[73.8100,18.5320],
          [73.8200,18.5350],[73.8300,18.5370],[73.8400,18.5380],[73.8500,18.5370],
          [73.8600,18.5340],[73.8700,18.5310],[73.8800,18.5280],[73.8900,18.5240]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Mithi River (Mumbai)", "category": "river" },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [72.8400,19.1400],[72.8450,19.1300],[72.8500,19.1200],[72.8550,19.1100],
          [72.8600,19.1000],[72.8650,19.0900],[72.8700,19.0800],[72.8730,19.0700],
          [72.8750,19.0600],[72.8770,19.0500]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Vrishabhavathi River (Bengaluru)", "category": "river" },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [77.5200,13.0100],[77.5300,13.0000],[77.5400,12.9900],[77.5500,12.9800],
          [77.5550,12.9700],[77.5600,12.9600],[77.5650,12.9500],[77.5700,12.9400],
          [77.5750,12.9300],[77.5800,12.9200],[77.5850,12.9100]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Yamuna River (Delhi-NCR)", "category": "river" },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [77.1200,28.7500],[77.1400,28.7300],[77.1600,28.7100],[77.1800,28.6900],
          [77.2000,28.6700],[77.2100,28.6500],[77.2200,28.6300],[77.2300,28.6100],
          [77.2350,28.5900],[77.2400,28.5700],[77.2450,28.5500],[77.2500,28.5300],
          [77.2600,28.5100],[77.2700,28.4900],[77.2800,28.4700],[77.2900,28.4500],
          [77.3000,28.4300],[77.3100,28.4100],[77.3200,28.3900],[77.3300,28.3700]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Hooghly River (Kolkata)", "category": "river" },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [88.2800,22.7000],[88.2900,22.6800],[88.3000,22.6600],[88.3100,22.6400],
          [88.3150,22.6200],[88.3200,22.6000],[88.3250,22.5800],[88.3300,22.5600],
          [88.3350,22.5400],[88.3380,22.5200],[88.3400,22.5000],[88.3420,22.4800],
          [88.3450,22.4600],[88.3470,22.4400],[88.3500,22.4200],[88.3520,22.4000]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Cauvery River (Mysuru)", "category": "river" },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [76.5000,12.4000],[76.5200,12.3800],[76.5400,12.3600],[76.5600,12.3400],
          [76.5800,12.3200],[76.6000,12.3100],[76.6200,12.3000],[76.6400,12.2900],
          [76.6600,12.2850],[76.6800,12.2800],[76.7000,12.2780]
        ]
      }
    }
  ]
};
