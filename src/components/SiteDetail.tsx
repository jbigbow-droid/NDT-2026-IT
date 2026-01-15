"use client";

import { useState } from "react";

interface SiteDetailProps {
  site: {
    id: number;
    name: string;
    type: string;
    size: string;
    pods: number;
    status: string;
    city: string;
    state: string;
  };
}

const siteNetworkInfo: Record<string, {
  switches: number;
  aps: number;
  firewalls: string;
  servers: string;
  bandwidth: string;
  coverage: string;
}> = {
  "Seattle Kiosk #1": {
    switches: 2,
    aps: 4,
    firewalls: "1x pfSense",
    servers: "1x Edge Server",
    bandwidth: "500 Mbps",
    coverage: "800 sq ft",
  },
  "Seattle Kiosk #2": {
    switches: 2,
    aps: 4,
    firewalls: "1x pfSense",
    servers: "1x Edge Server",
    bandwidth: "500 Mbps",
    coverage: "800 sq ft",
  },
  "Seattle Kiosk #3": {
    switches: 2,
    aps: 4,
    firewalls: "1x pfSense",
    servers: "1x Edge Server",
    bandwidth: "500 Mbps",
    coverage: "800 sq ft",
  },
  "Austin Experience Center": {
    switches: 6,
    aps: 12,
    firewalls: "1x Palo Alto NGFW",
    servers: "3x PowerEdge R750",
    bandwidth: "10 Gbps",
    coverage: "3,500 sq ft",
  },
  "Raleigh Experience Center": {
    switches: 6,
    aps: 12,
    firewalls: "1x Palo Alto NGFW",
    servers: "3x PowerEdge R750",
    bandwidth: "10 Gbps",
    coverage: "3,500 sq ft",
  },
  "Portland Experience Center": {
    switches: 6,
    aps: 12,
    firewalls: "1x Palo Alto NGFW",
    servers: "3x PowerEdge R750",
    bandwidth: "10 Gbps",
    coverage: "3,500 sq ft",
  },
};

export function SiteDetail({ site }: SiteDetailProps) {
  const networkInfo = siteNetworkInfo[site.name] || siteNetworkInfo["Seattle Kiosk #1"];

  return (
    <div className="glow-card rounded-lg p-6 animate-fadeIn">
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
          site.status === "Current"
            ? "bg-green-500/20 text-green-400"
            : "bg-purple-500/20 text-purple-400"
        }`}>
          {site.status === "Current" ? "●" : "◐"}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#00d4ff]">{site.name}</h3>
          <p className="text-[#94a3b8]">{site.city}, {site.state}</p>
        </div>
        <div className="ml-auto">
          <span className={`px-3 py-1 rounded-full text-sm ${
            site.status === "Current" ? "bg-green-500/20 text-green-400" : "bg-purple-500/20 text-purple-400"
          }`}>
            {site.type}
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-[#0f172a] rounded p-4">
          <h4 className="text-sm font-semibold text-[#7c3aed] mb-3 uppercase tracking-wider">Location Details</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[#64748b]">Facility Size</span>
              <span className="text-[#e2e8f0]">{site.size}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#64748b]">YR Pods</span>
              <span className="text-[#e2e8f0]">{site.pods} units</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#64748b]">Status</span>
              <span className="text-[#e2e8f0]">{site.status}</span>
            </div>
          </div>
        </div>

        <div className="bg-[#0f172a] rounded p-4">
          <h4 className="text-sm font-semibold text-[#7c3aed] mb-3 uppercase tracking-wider">Network Infrastructure</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[#64748b]">Core Switches</span>
              <span className="text-[#e2e8f0]">{networkInfo.switches} units</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#64748b]">Wireless APs</span>
              <span className="text-[#e2e8f0]">{networkInfo.aps} units</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#64748b]">Bandwidth</span>
              <span className="text-[#e2e8f0]">{networkInfo.bandwidth}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0f172a] rounded p-4 mb-6">
        <h4 className="text-sm font-semibold text-[#7c3aed] mb-3 uppercase tracking-wider">Equipment Summary</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="text-center p-3 bg-[#1e293b] rounded">
            <div className="text-2xl mb-1">🔀</div>
            <div className="text-[#94a3b8]">Switches</div>
            <div className="text-[#00d4ff] font-bold">{networkInfo.switches}</div>
          </div>
          <div className="text-center p-3 bg-[#1e293b] rounded">
            <div className="text-2xl mb-1">📶</div>
            <div className="text-[#94a3b8]">APs</div>
            <div className="text-[#00d4ff] font-bold">{networkInfo.aps}</div>
          </div>
          <div className="text-center p-3 bg-[#1e293b] rounded">
            <div className="text-2xl mb-1">🔥</div>
            <div className="text-[#94a3b8]">Firewalls</div>
            <div className="text-[#00d4ff] font-bold">1</div>
          </div>
          <div className="text-center p-3 bg-[#1e293b] rounded">
            <div className="text-2xl mb-1">🖥️</div>
            <div className="text-[#94a3b8]">Servers</div>
            <div className="text-[#00d4ff] font-bold">{site.type === "Existing" ? "1" : "3"}</div>
          </div>
        </div>
      </div>

      <div className="glow-card rounded-lg p-4 border border-[#7c3aed]/30">
        <h4 className="text-sm font-semibold text-[#00d4ff] mb-3 uppercase tracking-wider">Site Network Topology</h4>
        <div className="overflow-x-auto">
          <div className="min-w-[500px]">
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-4">
                <div className="diagram-box text-center min-w-[100px] animate-pulse-glow">
                  <div className="text-[#00d4ff] font-bold text-sm">INTERNET</div>
                </div>
                <div className="text-[#7c3aed] text-xl">→</div>
                <div className="diagram-box text-center min-w-[120px]">
                  <div className="text-[#ef4444] font-bold text-sm">FIREWALL</div>
                  <div className="text-xs text-[#64748b]">{networkInfo.firewalls}</div>
                </div>
                <div className="text-[#7c3aed] text-xl">→</div>
                <div className="diagram-box text-center min-w-[120px]">
                  <div className="text-[#00d4ff] font-bold text-sm">CORE SWITCH</div>
                  <div className="text-xs text-[#64748b]">{networkInfo.switches}x 10Gbps</div>
                </div>
              </div>

              <div className="text-[#7c3aed] text-xl">↓</div>

              <div className="flex flex-wrap justify-center gap-3">
                <div className="diagram-box text-center min-w-[90px]">
                  <div className="text-[#8b5cf6] font-bold text-xs">VLAN 10</div>
                  <div className="text-[#10b981] text-xs">YR Pods ({site.pods})</div>
                </div>
                <div className="diagram-box text-center min-w-[90px]">
                  <div className="text-[#3b82f6] font-bold text-xs">VLAN 20</div>
                  <div className="text-[#10b981] text-xs">Corporate</div>
                </div>
                <div className="diagram-box text-center min-w-[90px]">
                  <div className="text-[#10b981] font-bold text-xs">VLAN 30</div>
                  <div className="text-[#10b981] text-xs">Guest Wi-Fi</div>
                </div>
                <div className="diagram-box text-center min-w-[90px]">
                  <div className="text-[#ec4899] font-bold text-xs">VLAN 40</div>
                  <div className="text-[#10b981] text-xs">Signage</div>
                </div>
              </div>

              <div className="text-[#7c3aed] text-xl">↓</div>

              <div className="flex flex-wrap justify-center gap-3">
                <div className="diagram-box text-center">
                  <div className="text-xs text-[#64748b]">Access Switches</div>
                  <div className="text-[#00d4ff] font-bold">{site.type === "Existing" ? "2" : "6"}x PoE+</div>
                </div>
                <div className="diagram-box text-center">
                  <div className="text-xs text-[#64748b]">Wireless</div>
                  <div className="text-[#00d4ff] font-bold">Wi-Fi 6E</div>
                </div>
                <div className="diagram-box text-center">
                  <div className="text-xs text-[#64748b]">Server Room</div>
                  <div className="text-[#00d4ff] font-bold">{networkInfo.servers}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
