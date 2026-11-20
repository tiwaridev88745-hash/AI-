import React, { useState } from 'react';
import { 
  ShieldAlert, 
  LayoutDashboard, 
  Bot, 
  BarChart3, 
  Zap, 
  Filter, 
  Download, 
  MapPin, 
  Layers, 
  AlertTriangle, 
  ShieldCheck, 
  Database, 
  CheckCircle,
  ArrowRight,
  Cpu,
  Flame,
  Radio,
  Copy,
  Truck
} from 'lucide-react';
import { INITIAL_INCIDENTS, AGENT_FLEET_INFO } from './data/mockIncidents';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [incidents, setIncidents] = useState(INITIAL_INCIDENTS);
  const [selectedIncident, setSelectedIncident] = useState(INITIAL_INCIDENTS[0]);
  const [filterType, setFilterType] = useState('ALL');
  const [filterSeverity, setFilterSeverity] = useState('ALL');
  const [filterCity, setFilterCity] = useState('ALL');
  const [showFakes, setShowFakes] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStep, setSimStep] = useState(0);

  // Filtered incidents
  const filteredIncidents = incidents.filter(inc => {
    if (!showFakes && inc.isFake) return false;
    if (filterType !== 'ALL' && inc.type !== filterType) return false;
    if (filterSeverity !== 'ALL' && inc.severity !== filterSeverity) return false;
    if (filterCity !== 'ALL' && inc.city !== filterCity) return false;
    return true;
  });

  const activeCount = incidents.filter(i => !i.isFake).length;
  const fakeCount = incidents.filter(i => i.isFake).length;
  const mergedCount = incidents.reduce((sum, i) => sum + (i.mergedDuplicates || 0), 0);

  // Export Action Plan
  const handleExportPlan = () => {
    if (!selectedIncident) return;
    const inc = selectedIncident;
    const exportContent = `=====================================================
RESQ-MESH CRISIS COMMAND CENTRE - ACTION DISPATCH PLAN
=====================================================
INCIDENT ID: ${inc.id}
TITLE:       ${inc.title}
CATEGORY:    ${inc.type} | CITY: ${inc.city}
LOCATION:    ${inc.address} (GPS: ${inc.lat}, ${inc.lng})
SEVERITY:    ${inc.severity} (${inc.severityScore}/100)
CREDIBILITY: ${inc.credibility} (Merged Duplicates: ${inc.mergedDuplicates})
STATUS:      ${inc.isFake ? 'FLAGGED AS FAKE' : 'AUTHORIZED FOR DISPATCH'}
-----------------------------------------------------
RECOMMENDED UNITS:
${inc.actionPlan.recommendedDispatch}

EXECUTION PROTOCOL:
${inc.actionPlan.priorityOrder}

RESOURCES REQUIRED:
${inc.actionPlan.resourcesNeeded}

ESTIMATED RESPONSE TIME:
${inc.actionPlan.estimatedResponseTime}

IDENTIFIED HAZARDS:
${inc.actionPlan.hazards}

ASSIGNED COMMANDER:
${inc.actionPlan.assignedCommander}
=====================================================`;

    const blob = new Blob([exportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `ResQ-Mesh-ActionPlan-${inc.id}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Trigger Simulation Pipeline
  const handleStartSimulation = () => {
    setIsSimulating(true);
    setSimStep(1);

    setTimeout(() => setSimStep(2), 1200);
    setTimeout(() => setSimStep(3), 2200);
    setTimeout(() => setSimStep(4), 3100);
    setTimeout(() => setSimStep(5), 4000);
    setTimeout(() => {
      setSimStep(6);
      // Inject new incident
      const newSimIncident = {
        id: `INC-${Math.floor(1000 + Math.random() * 9000)}`,
        title: "⚡ LIVE SIMULATION: Coastal Embankment Breached near Worli Seaface",
        type: "Flood",
        city: "Mumbai",
        lat: 19.0176,
        lng: 72.8150,
        address: "Khan Abdul Ghaffar Khan Road, Worli, Mumbai",
        severity: "CRITICAL",
        severityScore: 96,
        credibility: "97%",
        isFake: false,
        fakeReason: null,
        mergedDuplicates: 4,
        timestamp: "Just Now (Simulated)",
        sources: [
          { name: "Live Twitter Stream Webhook", type: "social", time: "Just Now" },
          { name: "Mumbai Police 112 Feed", type: "helpline", time: "Just Now" }
        ],
        summary: "High tidal swell coupled with intense squall breached a 15-meter seawall section. 3 passenger vehicles trapped in rising seawater. Power line severed sparking on pavement.",
        actionPlan: {
          recommendedDispatch: "Worli Coastal Police Patrol + BMC Rapid Taskforce + 2 Tow Trucks",
          priorityOrder: "1. Divert traffic off Worli Seaface -> 2. Evacuate passengers -> 3. Isolate downed power feeder",
          resourcesNeeded: "Flood barriers, 4 Tow Chains, 3 Portable generators, Medical Kit",
          estimatedResponseTime: "4 - 5 Minutes",
          hazards: "Severe tidal washback, live severed high-tension cable",
          assignedCommander: "Inspector S. Kadam (Worli Coastal Division)"
        }
      };

      setIncidents(prev => [newSimIncident, ...prev]);
      setSelectedIncident(newSimIncident);
    }, 4800);
  };

  return (
    <div className="min-h-screen bg-[#070C1B] text-slate-100 font-sans flex flex-col">
      {/* ================= TOP NAVBAR ================= */}
      <header className="border-b border-[#1C2E66]/60 bg-[#0A1128]/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('landing')}>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF3B30] to-[#FF9500] flex items-center justify-center shadow-lg shadow-[#FF3B30]/20">
              <ShieldAlert className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xl font-black tracking-wider text-white">ResQ<span className="text-[#FF9500]">-Mesh</span></span>
                <span className="px-2 py-0.5 text-[10px] uppercase font-mono font-bold bg-[#FF3B30]/20 text-[#FF3B30] border border-[#FF3B30]/40 rounded">Crisis AI</span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono">Multi-Agent Crisis Command System</p>
            </div>
          </div>

          {/* Navigation tabs */}
          <nav className="hidden md:flex items-center space-x-1 bg-[#070C1B]/80 p-1 rounded-xl border border-[#1C2E66]/60">
            <button 
              onClick={() => setActiveTab('landing')} 
              className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'landing' ? 'bg-[#15224F] text-[#FF9500] border border-[#FF9500]/30 shadow-sm' : 'text-slate-300 hover:text-white'}`}>
              Overview
            </button>
            <button 
              onClick={() => setActiveTab('dashboard')} 
              className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center space-x-1.5 ${activeTab === 'dashboard' ? 'bg-[#15224F] text-[#FF9500] border border-[#FF9500]/30 shadow-sm' : 'text-slate-300 hover:text-white'}`}>
              <LayoutDashboard className="w-4 h-4" />
              <span>Command Center</span>
            </button>
            <button 
              onClick={() => setActiveTab('agents')} 
              className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center space-x-1.5 ${activeTab === 'agents' ? 'bg-[#15224F] text-[#FF9500] border border-[#FF9500]/30 shadow-sm' : 'text-slate-300 hover:text-white'}`}>
              <Bot className="w-4 h-4" />
              <span>Agent Fleet</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            </button>
            <button 
              onClick={() => setActiveTab('analytics')} 
              className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center space-x-1.5 ${activeTab === 'analytics' ? 'bg-[#15224F] text-[#FF9500] border border-[#FF9500]/30 shadow-sm' : 'text-slate-300 hover:text-white'}`}>
              <BarChart3 className="w-4 h-4" />
              <span>Analytics</span>
            </button>
          </nav>

          {/* Action buttons */}
          <div className="flex items-center space-x-3">
            <button 
              onClick={handleStartSimulation} 
              className="px-4 py-2 bg-gradient-to-r from-[#FF3B30] to-[#FF9500] hover:opacity-90 text-white rounded-lg text-sm font-semibold shadow-lg shadow-[#FF3B30]/30 transition-all flex items-center space-x-2">
              <Zap className="w-4 h-4 text-amber-200 animate-bounce" />
              <span>Simulate Incident</span>
            </button>
          </div>
        </div>
      </header>

      {/* ================= MAIN CONTENT VIEWS ================= */}
      <div className="flex-1">
        {activeTab === 'landing' && (
          <LandingView onLaunch={() => setActiveTab('dashboard')} onExploreAgents={() => setActiveTab('agents')} />
        )}

        {activeTab === 'dashboard' && (
          <main className="max-w-7xl mx-auto px-3 sm:px-6 py-5">
            {/* Filter Bar */}
            <div className="bg-[#0A1128] border border-[#1C2E66]/70 rounded-2xl p-4 mb-5 shadow-xl flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center mr-1">
                  <Filter className="w-3.5 h-3.5 mr-1 text-amber-500" /> Filters:
                </span>
                <select 
                  value={filterType} 
                  onChange={e => setFilterType(e.target.value)}
                  className="bg-[#070C1B] border border-[#1C2E66] text-xs text-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-amber-500 font-medium">
                  <option value="ALL">All Disasters</option>
                  <option value="Flood">🌊 Floods</option>
                  <option value="Fire">🔥 Fires</option>
                  <option value="Accident">🚗 Accidents</option>
                  <option value="Structural">🏚️ Structural/Hazards</option>
                </select>

                <select 
                  value={filterSeverity} 
                  onChange={e => setFilterSeverity(e.target.value)}
                  className="bg-[#070C1B] border border-[#1C2E66] text-xs text-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-amber-500 font-medium">
                  <option value="ALL">All Severities</option>
                  <option value="CRITICAL">🔴 Critical Only</option>
                  <option value="HIGH">🟠 High</option>
                  <option value="MEDIUM">🟡 Medium</option>
                  <option value="LOW">🟢 Low</option>
                </select>

                <select 
                  value={filterCity} 
                  onChange={e => setFilterCity(e.target.value)}
                  className="bg-[#070C1B] border border-[#1C2E66] text-xs text-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-amber-500 font-medium">
                  <option value="ALL">All Cities</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi">Delhi-NCR</option>
                  <option value="Bengaluru">Bengaluru</option>
                </select>

                <button 
                  onClick={() => setShowFakes(!showFakes)} 
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border ${showFakes ? 'border-[#FF3B30]/50 text-white bg-[#0A1128]' : 'border-[#1C2E66] text-slate-400 bg-[#070C1B]'} transition flex items-center space-x-1.5`}>
                  <span className={`w-2 h-2 rounded-full ${showFakes ? 'bg-[#FF3B30] animate-pulse' : 'bg-slate-500'}`}></span>
                  <span>Show Filtered Fakes</span>
                </button>
              </div>

              <div className="flex items-center space-x-3 ml-auto text-xs font-mono text-slate-300 bg-[#070C1B] px-3 py-1.5 rounded-lg border border-[#15224F]">
                Active: <span className="text-amber-400 font-bold">{activeCount}</span> | 
                Fakes Filtered: <span className="text-[#FF3B30] font-bold">{fakeCount}</span> | 
                Merged Duplicates: <span className="text-cyan-400 font-bold">{mergedCount}</span>
              </div>
            </div>

            {/* 3-Column Dashboard */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 min-h-[720px]">
              
              {/* Left Column: Feed (4 cols) */}
              <div className="lg:col-span-4 flex flex-col bg-[#0A1128] border border-[#1C2E66]/70 rounded-2xl overflow-hidden shadow-xl">
                <div className="p-3.5 bg-[#0F1A3A]/90 border-b border-[#1C2E66]/80 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF3B30] animate-ping"></div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Live Incident Stream</h3>
                  </div>
                  <span className="text-xs font-mono bg-[#070C1B] text-slate-300 px-2 py-0.5 rounded border border-[#1C2E66]">
                    {filteredIncidents.length} Events
                  </span>
                </div>

                <div className="flex-1 overflow-y-auto p-3 space-y-2.5 max-h-[720px]">
                  {filteredIncidents.map(inc => {
                    const isSelected = selectedIncident?.id === inc.id;
                    return (
                      <div 
                        key={inc.id}
                        onClick={() => setSelectedIncident(inc)}
                        className={`p-3 rounded-xl border ${isSelected ? 'border-[#FF9500] bg-[#15224F]/90 ring-1 ring-[#FF9500]/50' : 'border-[#1C2E66]/60 bg-[#070C1B]/70 hover:border-[#2A438C]'} cursor-pointer transition-all`}>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="text-[11px] font-mono text-slate-400">
                            <span className="text-amber-400 font-bold mr-1.5">{inc.city}</span> &bull; {inc.timestamp}
                          </span>
                          <div className="flex items-center space-x-1.5">
                            {inc.mergedDuplicates > 0 && (
                              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/80 px-1.5 py-0.5 rounded flex items-center">
                                <Layers className="w-3 h-3 mr-1" />{inc.mergedDuplicates}
                              </span>
                            )}
                            <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                              inc.isFake ? 'bg-slate-800 text-slate-400' :
                              inc.severity === 'CRITICAL' ? 'bg-[#FF3B30]/20 text-[#FF3B30] border border-[#FF3B30]/40 animate-pulse' :
                              inc.severity === 'HIGH' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40' :
                              'bg-emerald-500/20 text-emerald-400'
                            }`}>
                              {inc.isFake ? 'FAKE' : `${inc.severity} ${inc.severityScore}`}
                            </span>
                          </div>
                        </div>

                        <div className="text-xs font-bold text-white mb-1 line-clamp-1">{inc.title}</div>
                        <div className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed mb-2">{inc.summary}</div>

                        <div className="flex items-center justify-between text-[10px] font-mono pt-2 border-t border-[#1C2E66]/60 text-slate-400">
                          <span className="flex items-center">
                            <ShieldCheck className="w-3 h-3 text-emerald-400 mr-1" /> Credibility: <strong className="text-slate-200 ml-1">{inc.credibility}</strong>
                          </span>
                          <span>{inc.sources.length} Sources</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Center Column: Map (5 cols) */}
              <div className="lg:col-span-5 flex flex-col bg-[#0A1128] border border-[#1C2E66]/70 rounded-2xl overflow-hidden shadow-xl relative">
                <div className="p-3.5 bg-[#0F1A3A]/90 border-b border-[#1C2E66]/80 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">Tactical Incident Radar</h3>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">Target: {selectedIncident ? selectedIncident.city : 'All'}</span>
                </div>

                {/* Interactive Map Visual Representation */}
                <div className="flex-1 bg-[#070C1B] relative flex items-center justify-center p-6 min-h-[460px] overflow-hidden">
                  {/* Subtle Grid Lines */}
                  <div className="absolute inset-0 bg-[radial-gradient(#1C2E66_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
                  
                  {/* Selected Incident Coordinate Hero Card */}
                  {selectedIncident && (
                    <div className="relative z-10 w-full max-w-md bg-[#0A1128]/95 border border-[#1C2E66] rounded-2xl p-5 shadow-2xl backdrop-blur">
                      <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#1C2E66]">
                        <span className="text-xs font-mono text-amber-400 font-bold flex items-center">
                          <MapPin className="w-4 h-4 mr-1 text-[#FF3B30] animate-bounce" /> {selectedIncident.address}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">{selectedIncident.lat.toFixed(4)}, {selectedIncident.lng.toFixed(4)}</span>
                      </div>
                      
                      <div className="space-y-2 text-xs">
                        <div className="text-sm font-extrabold text-white">{selectedIncident.title}</div>
                        <div className="text-slate-300 text-xs leading-relaxed">{selectedIncident.summary}</div>
                        
                        <div className="pt-2 flex items-center justify-between font-mono text-[11px]">
                          <span className="text-slate-400">Sector: <strong className="text-cyan-400">{selectedIncident.city} Metro</strong></span>
                          <span className="text-[#FF3B30] font-bold">Severity: {selectedIncident.severity} ({selectedIncident.severityScore}/100)</span>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-[#1C2E66]/60 flex items-center justify-between text-[10px] font-mono text-slate-400">
                        <span>Pulsing Incident Markers Synchronized</span>
                        <span className="text-emerald-400">Live Telemetry Active</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-3 bg-[#070C1B]/90 border-t border-[#1C2E66] text-xs flex items-center justify-between text-slate-400 font-mono">
                  <span>Leaflet / Mapbox GL Engine</span>
                  <span className="text-amber-400">Full Leaflet interactive map active on standalone build</span>
                </div>
              </div>

              {/* Right Column: Action Plan Detail (3 cols) */}
              <div className="lg:col-span-3 flex flex-col bg-[#0A1128] border border-[#1C2E66]/70 rounded-2xl overflow-hidden shadow-xl">
                <div className="p-3.5 bg-[#0F1A3A]/90 border-b border-[#1C2E66]/80 flex items-center justify-between">
                  <div className="flex items-center space-x-1.5">
                    <Zap className="w-4 h-4 text-amber-500" />
                    <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">Tactical Action Plan</h3>
                  </div>
                  <button 
                    onClick={handleExportPlan}
                    className="text-xs px-2.5 py-1 bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 border border-amber-500/40 rounded flex items-center space-x-1 transition">
                    <Download className="w-3 h-3" />
                    <span>Export</span>
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[720px]">
                  {selectedIncident && (
                    <>
                      {selectedIncident.isFake && (
                        <div className="p-3.5 rounded-xl bg-[#FF3B30]/10 border border-[#FF3B30]/40 text-[#FF3B30]">
                          <div className="font-bold flex items-center space-x-1.5 text-xs mb-1">
                            <AlertTriangle className="w-4 h-4 text-[#FF3B30]" />
                            <span>FLAGGED AS FAKE / MISLEADING</span>
                          </div>
                          <div className="text-[11px] text-slate-300 font-mono leading-relaxed">{selectedIncident.fakeReason}</div>
                        </div>
                      )}

                      <div>
                        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                          <span className="text-amber-400 font-bold">{selectedIncident.id}</span>
                          <span>{selectedIncident.timestamp}</span>
                        </div>
                        <h4 className="text-sm font-extrabold text-white mb-2">{selectedIncident.title}</h4>
                      </div>

                      {/* Scores */}
                      <div className="grid grid-cols-2 gap-2 text-center font-mono">
                        <div className="p-2.5 rounded-lg bg-[#070C1B] border border-[#1C2E66]">
                          <div className="text-[10px] text-slate-400">SEVERITY INDEX</div>
                          <div className={`text-base font-black ${selectedIncident.severity === 'CRITICAL' ? 'text-[#FF3B30]' : 'text-amber-400'}`}>
                            {selectedIncident.severityScore} / 100
                          </div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#070C1B] border border-[#1C2E66]">
                          <div className="text-[10px] text-slate-400">CREDIBILITY</div>
                          <div className="text-base font-black text-emerald-400">
                            {selectedIncident.credibility}
                          </div>
                        </div>
                      </div>

                      {/* Action Plan */}
                      <div className="p-3.5 rounded-xl bg-[#070C1B] border border-amber-500/30 space-y-2.5 text-xs">
                        <div className="flex items-center justify-between text-xs font-mono font-bold text-amber-400 pb-2 border-b border-[#1C2E66]">
                          <span className="flex items-center"><Bot className="w-3.5 h-3.5 mr-1" /> RESPONDER BRIEF</span>
                          <span className="text-[10px] text-emerald-400">ETA: {selectedIncident.actionPlan.estimatedResponseTime}</span>
                        </div>

                        <div>
                          <span className="text-[10px] font-mono text-slate-400 block uppercase">Recommended Units:</span>
                          <strong className="text-white text-xs">{selectedIncident.actionPlan.recommendedDispatch}</strong>
                        </div>

                        <div>
                          <span className="text-[10px] font-mono text-slate-400 block uppercase">Priority Order:</span>
                          <p className="text-amber-200/90 text-[11px] font-mono leading-relaxed">{selectedIncident.actionPlan.priorityOrder}</p>
                        </div>

                        <div>
                          <span className="text-[10px] font-mono text-slate-400 block uppercase">Resources Needed:</span>
                          <p className="text-slate-300 text-[11px]">{selectedIncident.actionPlan.resourcesNeeded}</p>
                        </div>

                        <div>
                          <span className="text-[10px] font-mono text-slate-400 block uppercase">Hazards Corridor:</span>
                          <p className="text-[#FF3B30] text-[11px] font-mono">{selectedIncident.actionPlan.hazards}</p>
                        </div>
                      </div>

                      {/* Aggregated Sources */}
                      <div>
                        <div className="text-xs font-mono font-bold text-slate-400 mb-2 uppercase flex items-center">
                          <Database className="w-3.5 h-3.5 mr-1.5 text-cyan-400" /> Aggregated Sources ({selectedIncident.sources.length})
                        </div>
                        <div className="bg-[#070C1B] p-2.5 rounded-xl border border-[#1C2E66] space-y-1">
                          {selectedIncident.sources.map((s, idx) => (
                            <div key={idx} className="flex items-center justify-between text-xs py-1 border-b border-[#1C2E66]/40 font-mono">
                              <span className="text-slate-300">{s.name}</span>
                              <span className="text-slate-500 text-[10px]">{s.time}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

            </div>
          </main>
        )}

        {activeTab === 'agents' && (
          <AgentFleetView agents={AGENT_FLEET_INFO} />
        )}

        {activeTab === 'analytics' && (
          <AnalyticsDashboardView />
        )}
      </div>

      {/* ================= SIMULATION MODAL ================= */}
      {isSimulating && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="bg-[#0A1128] border border-[#1C2E66] rounded-2xl max-w-xl w-full p-6 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-[#1C2E66]">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-[#FF3B30] animate-ping"></span>
                <h3 className="text-lg font-bold text-white font-mono">Autonomous Pipeline Simulation</h3>
              </div>
              <button onClick={() => setIsSimulating(false)} className="text-slate-400 hover:text-white">&times;</button>
            </div>

            <div className="my-6 space-y-3.5 text-xs">
              <div className={`p-3 rounded-xl border ${simStep >= 1 ? 'border-cyan-500/60 bg-cyan-950/30' : 'border-[#1C2E66] bg-[#070C1B]'} flex items-center justify-between`}>
                <div className="font-bold text-white">1. Data Collector Agent (Ingesting 112 & Social SOS)</div>
                <span className="font-mono text-cyan-400">{simStep > 1 ? 'Done (0.7s)' : simStep === 1 ? 'Ingesting...' : 'Queued'}</span>
              </div>
              <div className={`p-3 rounded-xl border ${simStep >= 2 ? 'border-amber-500/60 bg-amber-950/30' : 'border-[#1C2E66] bg-[#070C1B]'} flex items-center justify-between`}>
                <div className="font-bold text-white">2. Verification Agent (Cross-referencing EXIF & CCTV)</div>
                <span className="font-mono text-amber-400">{simStep > 2 ? 'Verified 97% (0.6s)' : simStep === 2 ? 'Verifying...' : 'Queued'}</span>
              </div>
              <div className={`p-3 rounded-xl border ${simStep >= 3 ? 'border-cyan-500/60 bg-cyan-950/30' : 'border-[#1C2E66] bg-[#070C1B]'} flex items-center justify-between`}>
                <div className="font-bold text-white">3. Deduplication Agent (Clustering 300m Radius)</div>
                <span className="font-mono text-cyan-400">{simStep > 3 ? 'Merged 4 Calls (0.5s)' : simStep === 3 ? 'Clustering...' : 'Queued'}</span>
              </div>
              <div className={`p-3 rounded-xl border ${simStep >= 4 ? 'border-[#FF3B30]/60 bg-[#FF3B30]/10' : 'border-[#1C2E66] bg-[#070C1B]'} flex items-center justify-between`}>
                <div className="font-bold text-white">4. Severity Ranking Agent (Calculating MILS Index)</div>
                <span className="font-mono text-[#FF3B30]">{simStep > 4 ? 'CRITICAL 96 (0.4s)' : simStep === 4 ? 'Scoring...' : 'Queued'}</span>
              </div>
              <div className={`p-3 rounded-xl border ${simStep >= 5 ? 'border-emerald-500/60 bg-emerald-950/30' : 'border-[#1C2E66] bg-[#070C1B]'} flex items-center justify-between`}>
                <div className="font-bold text-white">5. Action Planner Agent (Synthesizing SOP Route)</div>
                <span className="font-mono text-emerald-400">{simStep >= 6 ? 'Plan Ready (0.6s)' : simStep === 5 ? 'Synthesizing...' : 'Queued'}</span>
              </div>
            </div>

            {simStep >= 6 && (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center justify-between">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle className="w-4 h-4" />
                  <span>Incident Triaged in 2.8s &bull; Dispatched to Queue</span>
                </div>
                <button 
                  onClick={() => { setIsSimulating(false); setActiveTab('dashboard'); }}
                  className="px-3 py-1 bg-emerald-500 text-[#070C1B] font-bold rounded hover:bg-emerald-400 transition">
                  View Incident
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// Subcomponents
function LandingView({ onLaunch, onExploreAgents }) {
  return (
    <div className="py-20 lg:py-28 bg-gradient-to-b from-[#0A1128] via-[#070C1B] to-[#070C1B] text-center max-w-6xl mx-auto px-4">
      <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-6">
        <Flame className="w-4 h-4 text-amber-500" />
        <span>Hack2Skill 2026 • Disaster & Public Safety Track</span>
      </div>

      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-tight">
        Turning Crisis Chaos Into <br />
        <span className="bg-gradient-to-r from-[#FF3B30] via-amber-400 to-cyan-400 bg-clip-text text-transparent">
          Autonomous Action Plans
        </span>
      </h1>

      <p className="max-w-3xl mx-auto text-lg text-slate-300 mb-10 leading-relaxed font-light">
        When catastrophe hits, responders lose critical time sorting real from fake and urgent from minor.
        ResQ-Mesh automates the entire ingestion-to-dispatch loop through a 5-agent collaborative AI engine.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button 
          onClick={onLaunch}
          className="px-8 py-3.5 bg-gradient-to-r from-[#FF3B30] to-[#FF9500] hover:opacity-95 text-white rounded-xl text-base font-bold shadow-xl shadow-[#FF3B30]/25 transition flex items-center space-x-2">
          <span>Launch Command Dashboard</span>
          <ArrowRight className="w-5 h-5" />
        </button>
        <button 
          onClick={onExploreAgents}
          className="px-6 py-3.5 bg-[#0F1A3A] hover:bg-[#15224F] text-slate-200 border border-[#1C2E66] rounded-xl text-base font-medium transition flex items-center space-x-2">
          <Cpu className="w-5 h-5 text-cyan-400" />
          <span>Explore 5-Agent Fleet</span>
        </button>
      </div>

      {/* 4 Steps */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20 text-left">
        <div className="bg-[#0A1128] border border-[#1C2E66] p-6 rounded-2xl">
          <div className="text-3xl font-black font-mono text-[#1C2E66] mb-3">01</div>
          <div className="text-amber-400 font-bold mb-1">Ingest Everywhere</div>
          <div className="text-xs text-slate-400">Scrapes Twitter/X, 112 calls, weather radar, and public CCTV.</div>
        </div>
        <div className="bg-[#0A1128] border border-[#1C2E66] p-6 rounded-2xl">
          <div className="text-3xl font-black font-mono text-[#1C2E66] mb-3">02</div>
          <div className="text-cyan-400 font-bold mb-1">Verify & Filter</div>
          <div className="text-xs text-slate-400">Flags synthetic deepfakes and merges redundant calls into clusters.</div>
        </div>
        <div className="bg-[#0A1128] border border-[#1C2E66] p-6 rounded-2xl">
          <div className="text-3xl font-black font-mono text-[#1C2E66] mb-3">03</div>
          <div className="text-[#FF3B30] font-bold mb-1">Severity Scoring</div>
          <div className="text-xs text-slate-400">Calculates lethal casualty risks and proximity to gas/water hazards.</div>
        </div>
        <div className="bg-[#0A1128] border border-[#1C2E66] p-6 rounded-2xl">
          <div className="text-3xl font-black font-mono text-[#1C2E66] mb-3">04</div>
          <div className="text-emerald-400 font-bold mb-1">Action Plan</div>
          <div className="text-xs text-slate-400">Formulates responder unit allocations, safe route corridors, and advisories.</div>
        </div>
      </div>
    </div>
  );
}

function AgentFleetView({ agents }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      <div className="mb-6">
        <h2 className="text-2xl font-black text-white">Multi-Agent Intelligence Network</h2>
        <p className="text-sm text-slate-400">Autonomous micro-agents collaborating via LangGraph message buses for real-time crisis resolution.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {agents.map((ag, i) => (
          <div key={ag.id} className="bg-[#0A1128] border border-[#1C2E66] p-4 rounded-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-cyan-400 font-bold">AGENT 0{i + 1}</span>
                <span className="px-1.5 py-0.5 text-[10px] rounded bg-emerald-500/20 text-emerald-400">{ag.status}</span>
              </div>
              <h4 className="font-bold text-white text-sm mb-1">{ag.name}</h4>
              <p className="text-xs text-slate-400 mb-3">{ag.description}</p>
            </div>
            <div className="pt-3 border-t border-[#1C2E66]/60 text-[11px] font-mono text-slate-300">
              <div>Latency: <span className="text-emerald-400">{ag.latency}</span></div>
              <div>Role: <span className="text-amber-400">{ag.role}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsDashboardView() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      <div className="mb-6">
        <h2 className="text-2xl font-black text-white">Crisis Intelligence Analytics</h2>
        <p className="text-sm text-slate-400">Operational performance metrics, noise reduction ratios, and incident velocity.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-[#0A1128] border border-[#1C2E66] p-4 rounded-xl">
          <div className="text-xs font-mono text-slate-400 mb-1">TOTAL INGESTED REPORTS</div>
          <div className="text-2xl font-extrabold text-white font-mono">1,824</div>
        </div>
        <div className="bg-[#0A1128] border border-[#1C2E66] p-4 rounded-xl">
          <div className="text-xs font-mono text-slate-400 mb-1">DUPLICATES MERGED</div>
          <div className="text-2xl font-extrabold text-cyan-400 font-mono">1,240 (68%)</div>
        </div>
        <div className="bg-[#0A1128] border border-[#1C2E66] p-4 rounded-xl">
          <div className="text-xs font-mono text-slate-400 mb-1">FAKE HOAXES FILTERED</div>
          <div className="text-2xl font-extrabold text-[#FF3B30] font-mono">214 (11.7%)</div>
        </div>
        <div className="bg-[#0A1128] border border-[#1C2E66] p-4 rounded-xl">
          <div className="text-xs font-mono text-slate-400 mb-1">MEAN TRIAGE TIME</div>
          <div className="text-2xl font-extrabold text-amber-400 font-mono">4.2 secs</div>
        </div>
      </div>
    </div>
  );
}

