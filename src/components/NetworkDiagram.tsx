export function NetworkDiagram() {
  return (
    <div className="glow-card rounded-lg p-6 overflow-x-auto">
      <div className="min-w-[600px]">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-8 items-center">
            <div className="diagram-box text-center min-w-[120px] animate-pulse-glow">
              <div className="text-[#00d4ff] font-bold">INTERNET</div>
              <div className="text-xs text-[#64748b]">Dual ISP</div>
            </div>
            <div className="text-[#7c3aed] text-2xl">→</div>
            <div className="diagram-box text-center min-w-[150px]">
              <div className="text-[#00d4ff] font-bold">FIREWALL</div>
              <div className="text-xs text-[#64748b]">NGFW Cluster</div>
            </div>
            <div className="text-[#7c3aed] text-2xl">→</div>
            <div className="diagram-box text-center min-w-[150px]">
              <div className="text-[#00d4ff] font-bold">CORE SWITCH</div>
              <div className="text-xs text-[#64748b]">10Gbps Backbone</div>
            </div>
          </div>

          <div className="text-[#7c3aed] text-2xl">↓</div>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="diagram-box text-center">
              <div className="text-[#8b5cf6] font-bold">VLAN 10</div>
              <div className="text-xs text-[#64748b]">YR Pods</div>
              <div className="text-xs text-[#10b981]">12 pods × 1Gbps</div>
            </div>
            <div className="diagram-box text-center">
              <div className="text-[#3b82f6] font-bold">VLAN 20</div>
              <div className="text-xs text-[#64748b]">Corporate</div>
              <div className="text-xs text-[#10b981]">Admin & Offices</div>
            </div>
            <div className="diagram-box text-center">
              <div className="text-[#10b981] font-bold">VLAN 30</div>
              <div className="text-xs text-[#64748b]">Guest Wi-Fi</div>
              <div className="text-xs text-[#10b981]">Cafe Area</div>
            </div>
            <div className="diagram-box text-center">
              <div className="text-[#ec4899] font-bold">VLAN 40</div>
              <div className="text-xs text-[#64748b]">Digital Signage</div>
              <div className="text-xs text-[#10b981]">Lounge & Cafe</div>
            </div>
            <div className="diagram-box text-center">
              <div className="text-[#f59e0b] font-bold">VLAN 50</div>
              <div className="text-xs text-[#64748b]">IoT Sensors</div>
              <div className="text-xs text-[#10b981]">Env. Monitoring</div>
            </div>
            <div className="diagram-box text-center">
              <div className="text-[#06b6d4] font-bold">VLAN 60</div>
              <div className="text-xs text-[#64748b]">E-Sports</div>
              <div className="text-xs text-[#10b981]">Streamer Booth</div>
            </div>
          </div>

          <div className="text-[#7c3aed] text-2xl">↓</div>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="diagram-box text-center">
              <div className="text-xs text-[#64748b]">Access Switches</div>
              <div className="text-[#00d4ff] font-bold">48-port PoE+</div>
            </div>
            <div className="diagram-box text-center">
              <div className="text-xs text-[#64748b]">Wireless APs</div>
              <div className="text-[#00d4ff] font-bold">Wi-Fi 6E</div>
            </div>
            <div className="diagram-box text-center">
              <div className="text-xs text-[#64748b]">Server Room</div>
              <div className="text-[#00d4ff] font-bold">Local Servers</div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-[#0f172a] rounded border border-[#1e293b] w-full">
            <div className="text-center text-sm text-[#94a3b8]">
              <span className="text-[#00d4ff]">☁</span> Cloud Management Dashboard (All 6 Sites) | 
              <span className="text-[#10b981]"> 📊</span> Real-time Monitoring | 
              <span className="text-[#ef4444]"> ⚠</span> Automated Alerting
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
