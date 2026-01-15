const equipment = [
  { category: "Core Switches", item: "Cisco Catalyst 9300 (48-port PoE+, 40G uplink)", quantity: "18 units", spec: "10Gbps backbone, stacking capable" },
  { category: "Access Switches", item: "Cisco Catalyst 9200 (48-port PoE+)", quantity: "36 units", spec: "1Gbps to endpoints, PoE+ budget 740W" },
  { category: "Wireless APs", item: "Meraki MR56 (Wi-Fi 6E)", quantity: "72 units", spec: "2.4Gbps max data rate, cloud-managed" },
  { category: "Firewalls", item: "Palo Alto PA-3410 (NGFW)", quantity: "6 units", spec: "11.4 Gbps throughput, Threat Prevention" },
  { category: "SD-WAN", item: "Cisco vEdge SD-WAN Router", quantity: "12 units", spec: "Dual ISP bonding, failover <1sec" },
  { category: "Servers", item: "Dell PowerEdge R750 (Local)", quantity: "18 units", spec: "2x Xeon, 512GB RAM, NVMe storage" },
  { category: "PoE Cameras", item: "Axis P3265-LVE (Environmental)", quantity: "180 units", spec: "4K, PoE, motion tracking capable" },
  { category: "Digital Signage", item: "Samsung QH55R (55&quot; 4K)", quantity: "72 units", spec: "Commercial grade, 500 nit brightness" },
  { category: "Rack Systems", item: "APC Netshelter SX (42U)", quantity: "18 units", spec: "With cable management, PDU included" },
  { category: "UPS Systems", item: "APC Smart-UPS SRT 3000VA", quantity: "18 units", spec: "Online double conversion, 2.7kW" },
];

export function EquipmentList() {
  return (
    <div className="glow-card rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#0f172a]">
              <th className="text-left p-4 text-[#00d4ff]">Category</th>
              <th className="text-left p-4 text-[#00d4ff]">Equipment</th>
              <th className="text-left p-4 text-[#00d4ff]">Quantity</th>
              <th className="text-left p-4 text-[#00d4ff]">Specifications</th>
            </tr>
          </thead>
          <tbody>
            {equipment.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-[#1e293b]" : "bg-[#0f172a]"}>
                <td className="p-4 font-medium">{item.category}</td>
                <td className="p-4">{item.item}</td>
                <td className="p-4 text-[#94a3b8]">{item.quantity}</td>
                <td className="p-4 text-[#64748b] text-xs">{item.spec}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
