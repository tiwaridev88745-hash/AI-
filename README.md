# ResQ-Mesh | AI Multi-Agent Crisis Command Centre
### Hack2Skill Hackathon 2026 — Disaster & Public Safety Track

ResQ-Mesh is an autonomous AI multi-agent command centre prototype that pulls crisis reports from social media, 112 emergency calls, weather radars, and news streams into one unified operational dashboard. It automatically filters synthetic/recycled hoaxes, clusters duplicate reports, calculates a Multi-Factor Impact & Lethality Score (MILS), and generates tactical action plans with responder resource routing.

---

## 🚀 Quick Start (Zero Setup Required)

You have two ways to run this prototype:

### Method 1: Instant Standalone (Recommended for Instant Hackathon Demos)
Simply open the included `index.html` file in any modern web browser (Chrome, Edge, Firefox, Safari).
* Includes Tailwind CSS, Leaflet Maps, Lucide Icons, and Chart.js via CDN.
* Complete with interactive map markers, real-time filters, animated pipeline simulation, and export features.

### Method 2: Modern React + Vite Dev Server
```bash
# 1. Install dependencies
npm install

# 2. Launch Vite dev server
npm run dev

# 3. Open browser at http://localhost:5173
```

---

## 🗂️ Project Structure

```
practice project/
├── index.html                   # Standalone zero-dependency single-file build with Leaflet & Chart.js
├── package.json                 # React 18, Vite, Lucide-React, Leaflet, Recharts
├── vite.config.js               # Vite bundler configuration
├── tailwind.config.js           # Command navy, crimson alert, & emergency amber theme
├── postcss.config.js            # PostCSS configuration
├── README.md                    # Setup and architecture documentation
└── src/
    ├── main.jsx                 # React root entrypoint
    ├── index.css                # Global Tailwind CSS and custom animations
    ├── App.jsx                  # Main coordinator: Navigation, Filters, 3-Column Dashboard, Simulation
    └── data/
        └── mockIncidents.js     # 22 realistic incidents across Mumbai, Delhi, and Bengaluru
```

---

## 🤖 5-Agent Collaborative Fleet Architecture

1. **Agent 01: Data Collector Agent**
   * Continuously harvests multi-modal feeds: Twitter/X SOS hashtags, 112 CAD audio transcripts, Doppler radar, and municipal CCTV streams.
2. **Agent 02: Verification Agent**
   * Uses perceptual hashing, image EXIF metadata, and municipal sensor cross-referencing to flag recycled crisis videos or AI deepfakes.
3. **Agent 03: Deduplication Agent**
   * Applies spatio-temporal embedding clustering (HDBSCAN, 300m radius, 30-min window) to collapse hundreds of redundant calls into a single master incident.
4. **Agent 04: Severity Ranking Agent**
   * Computes the Multi-Factor Impact & Lethality Score (MILS 0–100) based on casualty risk, structural collapse hazard, hospital proximity, and submerged electrical transformers.
5. **Agent 05: Action Planner Agent**
   * Formulates tactical Standard Operating Procedure (SOP) instructions, allocates specific responder assets (NDRF boats, HazMat, EMS), and generates safe evacuation corridors.

---

## 🌟 Key Features

* **Geospatial Tactical Map:** Interactive Leaflet map with pulsing beacons for critical incidents and quick city switches (Mumbai, Delhi, Bengaluru).
* **Live Incident Queue:** Aggregates multi-source feeds with credibility ratings and duplicate cluster indicators.
* **Autonomous Pipeline Simulation:** Click *"Simulate Incident"* to stream a new disaster report through all 5 agents with real-time UI stage animations.
* **Instant Action Plan Export:** One-click *"Export"* button downloads an authoritative dispatch brief formatted for field commanders.
* **Noise Reduction Analytics:** Visual charts showing 68% duplicates compacted, 11.7% fake hoaxes filtered, and an 82% reduction in triage response time.

