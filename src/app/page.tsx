"use client";

import { useState } from "react";
import { Card } from "@/components/Card";
import { NetworkDiagram } from "@/components/NetworkDiagram";
import { VLANTable } from "@/components/VLANTable";
import { EquipmentList } from "@/components/EquipmentList";
import { CostBreakdown } from "@/components/CostBreakdown";
import { SiteSelector } from "@/components/SiteSelector";
import { SiteDetail } from "@/components/SiteDetail";
import { ThemeToggle } from "@/components/ThemeToggle";

const sites = [
  { id: 1, name: "Seattle Kiosk #1", type: "Existing", size: "Pop-up Kiosk", pods: 4, status: "Current", city: "Seattle", state: "WA" },
  { id: 2, name: "Seattle Kiosk #2", type: "Existing", size: "Pop-up Kiosk", pods: 4, status: "Current", city: "Seattle", state: "WA" },
  { id: 3, name: "Seattle Kiosk #3", type: "Existing", size: "Pop-up Kiosk", pods: 4, status: "Current", city: "Seattle", state: "WA" },
  { id: 4, name: "Austin Experience Center", type: "New 2026", size: "3,500 sq ft", pods: 12, status: "Planned", city: "Austin", state: "TX" },
  { id: 5, name: "Raleigh Experience Center", type: "New 2026", size: "3,500 sq ft", pods: 12, status: "Planned", city: "Raleigh", state: "NC" },
  { id: 6, name: "Portland Experience Center", type: "New 2026", size: "3,500 sq ft", pods: 12, status: "Planned", city: "Portland", state: "OR" },
];

export default function Home() {
  const [selectedSite, setSelectedSite] = useState<typeof sites[0] | null>(null);

  return (
    <main className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto">
      <header className=\"text-center mb-12 glass-card\">
        <div className="glass-card inline-block px-4 py-1 mb-4 bg-[#1e293b] rounded-full border border-[#00d4ff]/30">
          <span className="text-sm text-[#94a3b8]">Prepared by</span>
          <span className="ml-2 font-semibold text-[#00d4ff]">R&B Network Design Solutions</span>
          <ThemeToggle />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
          <span className="gradient-text">Voyager Virtual Reality Ventures</span>
        </h1>
        <p className="text-xl text-[#94a3b8] mb-2">Network Infrastructure Proposal</p>
        <p className="text-sm text-[#64748b]">2026 Experience Center Expansion | Click on a site to view details</p>
      </header>

      <section className="mb-16">
        <h2 className="text-2xl font-bold section-title text-[#00d4ff] mb-6">Executive Summary</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Current Challenges">
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-500">●</span>
                <span>Disparate cellular hotspots causing inconsistent performance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">●</span>
                <span>Aging consumer-grade routers with high latency during peak hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">●</span>
                <span>Unsecured guest networks posing security risks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">●</span>
                <span>No centralized management across 3 existing kiosks</span>
              </li>
            </ul>
          </Card>
          <Card title="Proposed Solution">
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#10b981]">●</span>
                <span>10 Gbps backbone with QoS-prioritized YR traffic</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10b981]">●</span>
                <span>6-site SD-WAN with cloud-managed infrastructure</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10b981]">●</span>
                <span>Comprehensive VLAN segmentation for all zones</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10b981]">●</span>
                <span>Enterprise-grade security with IDS/IPS and VPN</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold section-title text-[#00d4ff]">Site Locations</h2>
          {selectedSite && (
            <button
              onClick={() => setSelectedSite(null)}
              className="px-4 py-2 bg-[#1e293b] text-[#94a3b8] rounded-lg text-sm hover:bg-[#334155] transition-colors"
            >
              ← Back to Overview
            </button>
          )}
        </div>

        {selectedSite ? (
          <SiteDetail site={selectedSite} />
        ) : (
          <div className="glow-card rounded-lg p-6">
            <p className="text-[#94a3b8] mb-6 text-center">
              Select a location below to view detailed network infrastructure and topology
            </p>
            <SiteSelector sites={sites} selectedSite={selectedSite} onSelectSite={setSelectedSite} />
          </div>
        )}
      </section>

      {!selectedSite && (
        <>
          <section className="mb-16">
            <h2 className="text-2xl font-bold section-title text-[#00d4ff]">Network Architecture</h2>
            <NetworkDiagram />
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold section-title text-[#00d4ff]">Network Segmentation (VLANs)</h2>
            <VLANTable />
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold section-title text-[#00d4ff]">Key Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card title="High-Throughput Architecture">
                <p className="text-sm text-[#94a3b8] mb-3">
                  10 Gbps backbone with redundant uplinks, ensuring sub-1ms latency for YR pods.
                </p>
                <ul className="text-xs space-y-1 text-[#64748b]">
                  <li>• Enterprise core switches (40G uplinks)</li>
                  <li>• Wi-Fi 6E access points (2.4Gbps per AP)</li>
                  <li>• QoS mapping for YR traffic priority</li>
                </ul>
              </Card>
              <Card title="Centralized Management">
                <p className="text-sm text-[#94a3b8] mb-3">
                  Cloud-based SD-WAN controller for all 6 sites with real-time dashboards.
                </p>
                <ul className="text-xs space-y-1 text-[#64748b]">
                  <li>• Meraki Dashboard or equivalent</li>
                  <li>• Automated alerting and reporting</li>
                  <li>• Zero-touch provisioning</li>
                </ul>
              </Card>
              <Card title="Security & Remote Support">
                <p className="text-sm text-[#94a3b8] mb-3">
                  Multi-layer security with IDS/IPS, firewall, and VPN for remote troubleshooting.
                </p>
                <ul className="text-xs space-y-1 text-[#64748b]">
                  <li>• Next-gen firewalls at each site</li>
                  <li>• Role-based access control (RBAC)</li>
                  <li>• Site-to-site VPN tunnels</li>
                </ul>
              </Card>
              <Card title="Scalability & Redundancy">
                <p className="text-sm text-[#94a3b8] mb-3">
                  Design supports 2x YR pods and mobile &quot;YR-on-wheels&quot; kiosks.
                </p>
                <ul className="text-xs space-y-1 text-[#64748b]">
                  <li>• Dual ISP connections per site</li>
                  <li>• Hot standby equipment</li>
                  <li>• Modular switch architecture</li>
                </ul>
              </Card>
              <Card title="IoT & Digital Signage">
                <p className="text-sm text-[#94a3b8] mb-3">
                  PoE-powered environmental sensors and segmented digital signage networks.
                </p>
                <ul className="text-xs space-y-1 text-[#64748b]">
                  <li>• Temperature/humidity sensors</li>
                  <li>• Motion tracking systems</li>
                  <li>• 4K digital signage displays</li>
                </ul>
              </Card>
              <Card title="Guest Wi-Fi">
                <p className="text-sm text-[#94a3b8] mb-3">
                  Complimentary guest Wi-Fi in cafe areas with captive portal and bandwidth limits.
                </p>
                <ul className="text-xs space-y-1 text-[#64748b]">
                  <li>• Separate guest VLAN</li>
                  <li>• Content filtering</li>
                  <li>• 100Mbps guaranteed per user</li>
                </ul>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold section-title text-[#00d4ff]">Equipment Specifications</h2>
            <EquipmentList />
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold section-title text-[#00d4ff]">Cost Estimation & ROI</h2>
            <CostBreakdown />
          </section>
        </>
      )}

      <footer className="text-center py-8 border-t border-[#1e293b]">
        <p className="text-[#64748b] text-sm">
          R&B Network Design Solutions | Voyager Virtual Reality Ventures
        </p>
        <p className="text-[#475569] text-xs mt-1">
          © 2026 | Business & Network Security Competition
        </p>
      </footer>
    </main>
  );
}
