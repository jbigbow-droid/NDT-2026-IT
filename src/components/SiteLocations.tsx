const sites = [
  { name: "Seattle Kiosk #1", type: "Existing", size: "Pop-up Kiosk", pods: 4, status: "Current" },
  { name: "Seattle Kiosk #2", type: "Existing", size: "Pop-up Kiosk", pods: 4, status: "Current" },
  { name: "Seattle Kiosk #3", type: "Existing", size: "Pop-up Kiosk", pods: 4, status: "Current" },
  { name: "Austin Experience Center", type: "New 2026", size: "3,500 sq ft", pods: 12, status: "Planned" },
  { name: "Raleigh Experience Center", type: "New 2026", size: "3,500 sq ft", pods: 12, status: "Planned" },
  { name: "Portland Experience Center", type: "New 2026", size: "3,500 sq ft", pods: 12, status: "Planned" },
];

export function SiteLocations() {
  return (
    <div className="glow-card rounded-lg p-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sites.map((site, index) => (
          <div key={index} className="bg-[#0f172a] rounded p-4 border border-[#1e293b]">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold text-[#00d4ff]">{site.name}</h4>
              <span className={`text-xs px-2 py-1 rounded ${
                site.status === "Current" ? "bg-green-500/20 text-green-400" : "bg-purple-500/20 text-purple-400"
              }`}>
                {site.type}
              </span>
            </div>
            <div className="space-y-1 text-sm text-[#94a3b8]">
              <p>📐 {site.size}</p>
              <p>🎮 {site.pods} YR Pods</p>
              <p className="text-[#64748b]">{site.status}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 bg-[#0f172a] rounded border border-[#1e293b]">
        <p className="text-sm text-[#94a3b8]">
          <span className="text-[#10b981] font-semibold">Total Capacity:</span> 48 YR Pods across 6 locations |
          <span className="text-[#10b981] font-semibold"> Scalable to:</span> 96+ pods
        </p>
      </div>
    </div>
  );
}
