const vlans = [
  { id: 10, name: "YR Pods", subnet: "10.10.10.0/24", purpose: "High-performance VR gaming stations", priority: "Critical (EF)", devices: 48 },
  { id: 20, name: "Corporate", subnet: "10.10.20.0/24", purpose: "Administrative offices and management", priority: "High (AF41)", devices: 25 },
  { id: 30, name: "Guest Wi-Fi", subnet: "10.10.30.0/24", purpose: "Complimentary cafe guest internet", priority: "Standard (AF21)", devices: 100 },
  { id: 40, name: "Digital Signage", subnet: "10.10.40.0/24", purpose: "Lounge and cafe displays", priority: "Medium (AF31)", devices: 12 },
  { id: 50, name: "IoT Sensors", subnet: "10.10.50.0/24", purpose: "Environmental monitoring and motion tracking", priority: "Low (AF11)", devices: 30 },
  { id: 60, name: "E-Sports", subnet: "10.10.60.0/24", purpose: "Streamer booth and live events", priority: "High (AF41)", devices: 10 },
];

export function VLANTable() {
  return (
    <div className="glow-card rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#0f172a]">
              <th className="text-left p-4 text-[#00d4ff]">VLAN ID</th>
              <th className="text-left p-4 text-[#00d4ff]">Network Name</th>
              <th className="text-left p-4 text-[#00d4ff]">Subnet</th>
              <th className="text-left p-4 text-[#00d4ff]">Purpose</th>
              <th className="text-left p-4 text-[#00d4ff]">QoS Priority</th>
              <th className="text-left p-4 text-[#00d4ff]">Max Devices</th>
            </tr>
          </thead>
          <tbody>
            {vlans.map((vlan, index) => (
              <tr key={vlan.id} className={index % 2 === 0 ? "bg-[#1e293b]" : "bg-[#0f172a]"}>
                <td className="p-4">
                  <span className="vlan-badge vlan-pods">{vlan.id}</span>
                </td>
                <td className="p-4 font-medium">{vlan.name}</td>
                <td className="p-4 font-mono text-xs">{vlan.subnet}</td>
                <td className="p-4 text-[#94a3b8]">{vlan.purpose}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs ${
                    vlan.priority.includes("Critical") ? "bg-red-500/20 text-red-400" :
                    vlan.priority.includes("High") ? "bg-yellow-500/20 text-yellow-400" :
                    vlan.priority.includes("Medium") ? "bg-blue-500/20 text-blue-400" :
                    "bg-green-500/20 text-green-400"
                  }`}>
                    {vlan.priority}
                  </span>
                </td>
                <td className="p-4 text-[#94a3b8]">{vlan.devices}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
