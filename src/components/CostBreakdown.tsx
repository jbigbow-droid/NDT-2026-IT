const costs = [
  { category: "Network Equipment", upfront: 450000, annual: 0, description: "Switches, APs, firewalls, routers" },
  { category: "Servers & Storage", upfront: 360000, annual: 0, description: "Local servers for each Experience Center" },
  { category: "Digital Signage & IoT", upfront: 180000, annual: 0, description: "Displays, sensors, cameras" },
  { category: "Structured Cabling", upfront: 120000, annual: 0, description: "Cat6A fiber installation, 6 sites" },
  { category: "Rack & Power", upfront: 54000, annual: 0, description: "Racks, UPS, PDUs" },
  { category: "Professional Services", upfront: 90000, annual: 0, description: "Design, installation, training" },
  { category: "Cloud Management License", upfront: 0, annual: 36000, description: "SD-WAN & cloud dashboard (annual)" },
  { category: "ISP (Dual Lines)", upfront: 0, annual: 86400, description: "1Gbps fiber x2 per site x6 sites" },
  { category: "Support & Maintenance", upfront: 0, annual: 72000, description: "24/7 support, hardware warranty" },
];

const totalUpfront = costs.reduce((sum, c) => sum + c.upfront, 0);
const totalAnnual = costs.reduce((sum, c) => sum + c.annual, 0);

export function CostBreakdown() {
  return (
    <div className="glow-card rounded-lg p-6">
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#0f172a] rounded p-4 text-center">
          <p className="text-sm text-[#94a3b8] mb-1">Upfront Capital Expense</p>
          <p className="text-3xl font-bold text-[#00d4ff]">${(totalUpfront / 1000).toFixed(0)}K</p>
        </div>
        <div className="bg-[#0f172a] rounded p-4 text-center">
          <p className="text-sm text-[#94a3b8] mb-1">Annual Operating Expense</p>
          <p className="text-3xl font-bold text-[#10b981]">${(totalAnnual / 1000).toFixed(0)}K</p>
        </div>
        <div className="bg-[#0f172a] rounded p-4 text-center">
          <p className="text-sm text-[#94a3b8] mb-1">3-Year Total Cost of Ownership</p>
          <p className="text-3xl font-bold text-[#7c3aed]">${((totalUpfront + totalAnnual * 3) / 1000).toFixed(0)}K</p>
        </div>
      </div>

      <div className="mb-8">
        <h4 className="text-lg font-semibold text-[#00d4ff] mb-4">Cost Distribution</h4>
        <div className="space-y-3">
          {costs.filter(c => c.upfront > 0).map((cost, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="w-40 text-sm text-[#94a3b8]">{cost.category}</span>
              <div className="flex-1 cost-bar">
                <div
                  className="cost-bar-fill"
                  style={{ width: `${(cost.upfront / totalUpfront) * 100}%` }}
                />
              </div>
              <span className="w-20 text-sm text-right">${(cost.upfront / 1000).toFixed(0)}K</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#0f172a] rounded p-4 border border-[#1e293b]">
        <h4 className="text-lg font-semibold text-[#10b981] mb-3">ROI Analysis</h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <p><span className="text-[#94a3b8]">Projected Revenue Increase:</span> <span className="text-[#10b981]">+25%</span></p>
            <p><span className="text-[#94a3b8]">Downtime Reduction:</span> <span className="text-[#10b981]">99.9% uptime</span></p>
            <p><span className="text-[#94a3b8]">Customer Satisfaction Gain:</span> <span className="text-[#10b981]">+15%</span></p>
          </div>
          <div className="space-y-2">
            <p><span className="text-[#94a3b8]">Payback Period:</span> <span className="text-[#00d4ff]">18 months</span></p>
            <p><span className="text-[#94a3b8]">5-Year ROI:</span> <span className="text-[#00d4ff]">285%</span></p>
            <p><span className="text-[#94a3b8]">Annual Savings from Consolidation:</span> <span className="text-[#00d4ff]">$120K</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
