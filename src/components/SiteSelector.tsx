"use client";

import { useState } from "react";

interface Site {
  id: number;
  name: string;
  type: string;
  size: string;
  pods: number;
  status: string;
  city: string;
  state: string;
}

interface SiteSelectorProps {
  sites: Site[];
  selectedSite: Site | null;
  onSelectSite: (site: Site) => void;
}

export function SiteSelector({ sites, selectedSite, onSelectSite }: SiteSelectorProps) {
  const [filter, setFilter] = useState<"all" | "existing" | "planned">("all");

  const filteredSites = sites.filter((site) => {
    if (filter === "all") return true;
    if (filter === "existing") return site.status === "Current";
    if (filter === "planned") return site.status === "Planned";
    return true;
  });

  const existingCount = sites.filter((s) => s.status === "Current").length;
  const plannedCount = sites.filter((s) => s.status === "Planned").length;

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            filter === "all"
              ? "bg-[#00d4ff] text-[#020617]"
              : "bg-[#1e293b] text-[#94a3b8] hover:bg-[#334155]"
          }`}
        >
          All Sites ({sites.length})
        </button>
        <button
          onClick={() => setFilter("existing")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            filter === "existing"
              ? "bg-green-500 text-[#020617]"
              : "bg-[#1e293b] text-[#94a3b8] hover:bg-[#334155]"
          }`}
        >
          Existing ({existingCount})
        </button>
        <button
          onClick={() => setFilter("planned")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            filter === "planned"
              ? "bg-purple-500 text-[#020617]"
              : "bg-[#1e293b] text-[#94a3b8] hover:bg-[#334155]"
          }`}
        >
          Planned ({plannedCount})
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSites.map((site) => (
          <button
            key={site.id}
            onClick={() => onSelectSite(site)}
            className={`text-left p-4 rounded-lg border transition-all duration-300 ${
              selectedSite?.id === site.id
                ? "bg-[#1e293b] border-[#00d4ff] shadow-lg shadow-[#00d4ff]/20"
                : "bg-[#0f172a] border-[#1e293b] hover:border-[#334155] hover:bg-[#1e293b]"
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className={`font-semibold ${
                selectedSite?.id === site.id ? "text-[#00d4ff]" : "text-[#e2e8f0]"
              }`}>
                {site.name}
              </h4>
              <span className={`text-xs px-2 py-1 rounded-full ${
                site.status === "Current"
                  ? "bg-green-500/20 text-green-400"
                  : "bg-purple-500/20 text-purple-400"
              }`}>
                {site.type}
              </span>
            </div>
            <div className="space-y-1 text-sm text-[#94a3b8]">
              <p>📍 {site.city}, {site.state}</p>
              <p>📐 {site.size}</p>
              <p>🎮 {site.pods} YR Pods</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
