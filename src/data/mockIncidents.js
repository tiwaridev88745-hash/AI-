export const INITIAL_INCIDENTS = [
  {
    id: "INC-901",
    title: "Mithi River Flash Overflow & Low-Bridge Breach",
    type: "Flood",
    city: "Mumbai",
    lat: 19.0657,
    lng: 72.8722,
    address: "Bandra-Kurla Complex (BKC) Bridge, Mumbai",
    severity: "CRITICAL",
    severityScore: 94,
    credibility: "98%",
    isFake: false,
    fakeReason: null,
    mergedDuplicates: 7,
    timestamp: "3 mins ago",
    sources: [
      { name: "Police 112 Hotline", type: "helpline", time: "18:14" },
      { name: "X/Twitter SOS GeoTag", type: "social", time: "18:15" },
      { name: "Doppler Flood Radar", type: "weather", time: "18:16" }
    ],
    summary: "Water level rose 1.8m above danger mark in 15 mins. 14 vehicles submerged; 42 commuters stranded on bus roofs near BKC junction. Electrical transformer submerged sparking.",
    actionPlan: {
      recommendedDispatch: "NDRF 5th Battalion + Mumbai Fire Brigade Rescue Boat 2",
      priorityOrder: "1. Power Substation Cutoff -> 2. Evacuate Bus Passengers -> 3. Barrier Placement",
      resourcesNeeded: "3 Inflatable Dinghies, 50 Life Vests, 2 HazMat Electrical Cutters",
      estimatedResponseTime: "6 - 8 Minutes",
      hazards: "Live submerged 440V cables, fast-flowing debris current",
      assignedCommander: "Inspector R. Deshmukh (Control Cell 4)"
    }
  },
  {
    id: "INC-902",
    title: "Commercial Warehouse Chemical Fire",
    type: "Fire",
    city: "Mumbai",
    lat: 19.0028,
    lng: 72.8439,
    address: "Reay Road Industrial Estate, Dockyard, Mumbai",
    severity: "CRITICAL",
    severityScore: 92,
    credibility: "95%",
    isFake: false,
    fakeReason: null,
    mergedDuplicates: 5,
    timestamp: "7 mins ago",
    sources: [
      { name: "Mumbai Fire Control", type: "news", time: "18:11" },
      { name: "Local Citizen WhatsApp SOS", type: "social", time: "18:12" }
    ],
    summary: "Solvent barrel explosion at paint factory storage. Dense toxic black plume drifting towards residential chawls. 6 workers unaccounted for inside Unit 4.",
    actionPlan: {
      recommendedDispatch: "HazMat Foam Tender 3 + 4 Fire Engines + 2 Advanced Life Support Ambulances",
      priorityOrder: "1. Toxic Plume Downwind Evacuation (500m) -> 2. Foam Curtain on Solvent Tanks",
      resourcesNeeded: "AFFF Foam concentrate, Thermal Imaging Drones, SCBA Gear (16 sets)",
      estimatedResponseTime: "5 - 7 Minutes",
      hazards: "Secondary pressurized solvent explosion risk, Hydrocyanic vapor",
      assignedCommander: "Station Officer K. Patil"
    }
  },
  {
    id: "INC-903",
    title: "Chandni Chowk Electrical Market Transformer Blast",
    type: "Fire",
    city: "Delhi",
    lat: 28.6562,
    lng: 77.2310,
    address: "Bhagirath Palace, Chandni Chowk, Old Delhi",
    severity: "HIGH",
    severityScore: 84,
    credibility: "92%",
    isFake: false,
    fakeReason: null,
    mergedDuplicates: 4,
    timestamp: "12 mins ago",
    sources: [
      { name: "Delhi Fire Service Cad", type: "helpline", time: "18:06" },
      { name: "Citizen Video Broadcast", type: "social", time: "18:08" }
    ],
    summary: "Overhead cable knot caught fire spreading to 3 hardware shops in ultra-narrow alley. Fire trucks unable to navigate alleyway without specialized mini-tenders.",
    actionPlan: {
      recommendedDispatch: "Delhi Fire Quick-Reaction Water Mist Bike Units + BSES Grid Shutdown",
      priorityOrder: "1. Grid Isolation -> 2. Alleyway Crowd Clearance -> 3. Mist Firefighting",
      resourcesNeeded: "2 Bullet Fire Bikes, Portable pumps, 400m hose lines",
      estimatedResponseTime: "8 - 11 Minutes",
      hazards: "Hanging loose wires, dense pedestrian density",
      assignedCommander: "Divisional Officer M. Sharma"
    }
  },
  {
    id: "INC-904",
    title: "Yamuna Floodplain Low-Lying Hutments Inundation",
    type: "Flood",
    city: "Delhi",
    lat: 28.6256,
    lng: 77.2560,
    address: "Mayur Vihar Extension / Yamuna Khadar, Delhi",
    severity: "HIGH",
    severityScore: 81,
    credibility: "96%",
    isFake: false,
    fakeReason: null,
    mergedDuplicates: 8,
    timestamp: "16 mins ago",
    sources: [
      { name: "CWC Water Commission Bulletin", type: "weather", time: "18:02" },
      { name: "Civil Defense Radio", type: "helpline", time: "18:04" }
    ],
    summary: "Hathnikund barrage discharge reached Delhi. Water entered 120 makeshift settlements. Around 300 cattle and 85 families require urgent relocation to higher relief camps.",
    actionPlan: {
      recommendedDispatch: "Delhi Disaster Management (DDMA) Boat Unit + 6 DTC Evacuation Buses",
      priorityOrder: "1. Ferry elderly/children to Akshardham relief tents -> 2. Animal rescue",
      resourcesNeeded: "4 Motorized rescue boats, 200 food/water rations, Medical tetanus camp",
      estimatedResponseTime: "12 - 15 Minutes",
      hazards: "Rising water levels, snake bite threat in silted water",
      assignedCommander: "Sub-Divisional Magistrate V. Rao"
    }
  },
  {
    id: "INC-905",
    title: "Outer Ring Road 6-Vehicle Pileup in Heavy Downpour",
    type: "Accident",
    city: "Bengaluru",
    lat: 12.9352,
    lng: 77.6946,
    address: "Bellandur EcoSpace Flyover, Outer Ring Road, Bengaluru",
    severity: "HIGH",
    severityScore: 78,
    credibility: "91%",
    isFake: false,
    fakeReason: null,
    mergedDuplicates: 6,
    timestamp: "19 mins ago",
    sources: [
      { name: "Traffic Police CCTV", type: "news", time: "17:59" },
      { name: "112 Ambulance Dispatch", type: "helpline", time: "18:00" }
    ],
    summary: "Aquaplaning trailer jackknifed into 4 passenger cars and a tech park feeder bus. 2 passengers trapped in crumpled sedan; fuel leaking onto wet tarmac.",
    actionPlan: {
      recommendedDispatch: "Hydraulic Jaws-of-Life Unit + 3 Trauma Care Ambulances + Traffic Crane",
      priorityOrder: "1. Extricate trapped passengers -> 2. Neutralize diesel slick -> 3. Divert ORR traffic",
      resourcesNeeded: "Heavy Tow Crane, Foam wash, Spine boards, Trauma paramedic team",
      estimatedResponseTime: "7 - 10 Minutes",
      hazards: "Secondary crash hazard from speeding traffic in low visibility",
      assignedCommander: "ACP Traffic South Zone"
    }
  },
  {
    id: "INC-906",
    title: "Submerged India Gate Tunnel & Drowning Bus [FAKE REPORT]",
    type: "Flood",
    city: "Delhi",
    lat: 28.6129,
    lng: 77.2295,
    address: "Central Vista Underpass, New Delhi",
    severity: "LOW",
    severityScore: 12,
    credibility: "8%",
    isFake: true,
    fakeReason: "AI-generated image synthesis detected (Stable Diffusion water artifacts). Reverse check against NDMC live sensor shows underpass pumps operational with 0cm standing water.",
    mergedDuplicates: 0,
    timestamp: "22 mins ago",
    sources: [
      { name: "Viral X/Twitter Post (Handle @DelhiAlerts24)", type: "social", time: "17:56" }
    ],
    summary: "FLAGGED HOAX: Viral post claiming double-decker bus submerged inside India Gate tunnel. Image reverse-search confirmed AI synthetic generation. Municipal sensors report normal traffic flow.",
    actionPlan: {
      recommendedDispatch: "NO DISPATCH (FLAGGED HOAX)",
      priorityOrder: "1. Auto-issue rebuttal notice on Citizen Advisory API -> 2. Blacklist bot poster",
      resourcesNeeded: "Zero Physical Deployment (Prevented 2 Fire Tenders wasted)",
      estimatedResponseTime: "0 Minutes (Defused)",
      hazards: "None (Digital Misinformation)",
      assignedCommander: "AI Verification Sentinel Unit"
    }
  },
  {
    id: "INC-907",
    title: "Bellandur Lake Toxic Chemical Foam & Road Spillover",
    type: "Structural",
    city: "Bengaluru",
    lat: 12.9298,
    lng: 77.6710,
    address: "Yemalur Outlet, Bellandur, Bengaluru",
    severity: "MEDIUM",
    severityScore: 68,
    credibility: "89%",
    isFake: false,
    fakeReason: null,
    mergedDuplicates: 3,
    timestamp: "26 mins ago",
    sources: [
      { name: "Citizen Resident Forum", type: "social", time: "17:52" },
      { name: "KSPCB Sensor Gateway", type: "weather", time: "17:54" }
    ],
    summary: "Heavy rains triggered high effluent surfactant foaming. Foam billowing 1.5m high across road, severely restricting two-wheeler visibility and causing eye irritation.",
    actionPlan: {
      recommendedDispatch: "BBMP Water Jet Sprinkler Truck + Traffic Wardens",
      priorityOrder: "1. Water-jet chemical knock-down -> 2. Divert two-wheeler traffic via Marathahalli",
      resourcesNeeded: "2 High-pressure water tankers, Protective chemical masks for wardens",
      estimatedResponseTime: "15 - 20 Minutes",
      hazards: "Corrosive aerosol, slippery chemical residue on road",
      assignedCommander: "BBMP Ward 150 Engineer"
    }
  },
  {
    id: "INC-908",
    title: "Under-Construction Metro Pier Scaffold Collapse",
    type: "Accident",
    city: "Mumbai",
    lat: 19.1176,
    lng: 72.8485,
    address: "Western Express Highway (WEH), Andheri East, Mumbai",
    severity: "CRITICAL",
    severityScore: 91,
    credibility: "97%",
    isFake: false,
    fakeReason: null,
    mergedDuplicates: 9,
    timestamp: "31 mins ago",
    sources: [
      { name: "MMRDA Emergency Line", type: "helpline", time: "17:47" },
      { name: "108 Ambulance SOS", type: "helpline", time: "17:48" },
      { name: "Traffic Police Feed", type: "news", time: "17:49" }
    ],
    summary: "Heavy iron scaffolding collapsed across northbound WEH lanes. 2 auto-rickshaws crushed; 5 laborers injured on pier deck. Massive arterial gridlock blocking ambulances.",
    actionPlan: {
      recommendedDispatch: "Heavy Recovery Cranes (x2) + NDRF Urban Search & Rescue Team + 4 Ambulances",
      priorityOrder: "1. Create Green Corridor on southbound WEH -> 2. Lift iron girders -> 3. Triage victims",
      resourcesNeeded: "50-ton mobile hydraulic crane, Metal cutting torches, 4 Paramedic units",
      estimatedResponseTime: "6 - 9 Minutes",
      hazards: "Unstable remaining scaffold section in high winds",
      assignedCommander: "Joint Police Commissioner (Traffic)"
    }
  },
  {
    id: "INC-909",
    title: "Massive LPG Cylinder Blast in Slum Cluster [OLD VIDEO REPOST]",
    type: "Fire",
    city: "Mumbai",
    lat: 19.0434,
    lng: 72.8633,
    address: "Dharavi 90-Feet Road, Mumbai",
    severity: "LOW",
    severityScore: 10,
    credibility: "6%",
    isFake: true,
    fakeReason: "Video frames match a December 2019 gas leak incident in Surat, Gujarat. Timestamp tampering detected on Twitter upload. Local Dharavi police station reports quiet.",
    mergedDuplicates: 0,
    timestamp: "36 mins ago",
    sources: [
      { name: "Unverified YouTube Shorts / X link", type: "social", time: "17:42" }
    ],
    summary: "FLAGGED RECYCLED HOAX: Video claiming active multi-cylinder explosion in Dharavi. Perceptual hashing matched archived 2019 footage. Local emergency beats notified of zero incident.",
    actionPlan: {
      recommendedDispatch: "NO DISPATCH (RECYCLED HOAX)",
      priorityOrder: "1. Inform Cyber Cell for misinfo alert -> 2. Suppress from priority queue",
      resourcesNeeded: "None (Conserved 3 Fire Tenders from wild goose chase)",
      estimatedResponseTime: "0 Minutes",
      hazards: "Public panic / stampede rumors",
      assignedCommander: "Cyber Crime Unit / Sentinel"
    }
  },
  {
    id: "INC-910",
    title: "Submerged Railway Underpass with Trapped School Van",
    type: "Flood",
    city: "Bengaluru",
    lat: 12.9716,
    lng: 77.5946,
    address: "K.R. Circle Underpass, Central Bengaluru",
    severity: "CRITICAL",
    severityScore: 95,
    credibility: "99%",
    isFake: false,
    fakeReason: null,
    mergedDuplicates: 11,
    timestamp: "40 mins ago",
    sources: [
      { name: "Driver 112 SOS Call", type: "helpline", time: "17:38" },
      { name: "Traffic Camera Feed", type: "news", time: "17:39" },
      { name: "Passerby Live Video", type: "social", time: "17:40" }
    ],
    summary: "Underpass filled with 1.4m rainwater within 10 minutes due to clogged stormwater drain. School van with 8 children stalled; water level rising past car door handles.",
    actionPlan: {
      recommendedDispatch: "SDRF Quick Response Boat Unit + Traffic Police Lifeline Team",
      priorityOrder: "1. Urgent rescue of children through roof escape -> 2. Activate high-capacity dewatering pumps",
      resourcesNeeded: "Life rings, Inflatable raft, 2 Submersible 100HP pumps, Warm shock blankets",
      estimatedResponseTime: "4 - 6 Minutes",
      hazards: "Rapid water inflow, hypothermia, panic among children",
      assignedCommander: "Fire & Emergency Services SP"
    }
  }
];

export const AGENT_FLEET_INFO = [
  {
    id: "agent-1",
    name: "Data Collector Agent",
    role: "Multimodal Stream Harvester",
    description: "Ingests raw citizen SOS tweets, 112 audio transcripts, Doppler radar, and CCTV cameras.",
    latency: "0.8s",
    processedCount: "1,842 items",
    status: "ONLINE",
    color: "cyan"
  },
  {
    id: "agent-2",
    name: "Verification Agent",
    role: "Provenance & Authenticity Guard",
    description: "Detects AI synthesis, recycled archival videos, and compares with ground sensors.",
    latency: "1.1s",
    accuracy: "96.4%",
    status: "ONLINE",
    color: "amber"
  },
  {
    id: "agent-3",
    name: "Deduplication Agent",
    role: "Spatio-Temporal Cluster Engine",
    description: "Merges redundant reports within 300m and 30-min windows into single incidents.",
    latency: "0.6s",
    clusterRatio: "4.2:1",
    status: "ONLINE",
    color: "cyan"
  },
  {
    id: "agent-4",
    name: "Severity Ranking Agent",
    role: "Multi-factor Impact Evaluator (MILS)",
    description: "Calculates lethality risk, structural vulnerability, and casualty exposure.",
    latency: "0.4s",
    priorityLevels: "P1 to P4",
    status: "ONLINE",
    color: "crimson"
  },
  {
    id: "agent-5",
    name: "Action Planner Agent",
    role: "Tactical SOP & Routing Synthesizer",
    description: "Allocates response teams (Fire, EMS, NDRF) and plots safe corridor routes.",
    latency: "0.9s",
    sopCompliance: "100%",
    status: "ONLINE",
    color: "emerald"
  }
];

