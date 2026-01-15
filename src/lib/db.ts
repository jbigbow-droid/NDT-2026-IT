import Database from "better-sqlite3";
import path from "path";

const dbPath = path.join(process.cwd(), "voyager.db");

let db: Database.Database | null = null;

export function getDb() {
  if (!db) {
    db = new Database(dbPath);
    initializeDb();
  }
  return db;
}

function initializeDb() {
  if (!db) return;

  db.exec(`
    CREATE TABLE IF NOT EXISTS sites (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      type TEXT NOT NULL,
      size TEXT,
      pods INTEGER,
      status TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS vlans (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      vlan_id INTEGER NOT NULL,
      name TEXT NOT NULL,
      subnet TEXT NOT NULL,
      purpose TEXT,
      priority TEXT,
      max_devices INTEGER,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS equipment (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      category TEXT NOT NULL,
      item TEXT NOT NULL,
      quantity INTEGER,
      spec TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS cost_estimates (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      category TEXT NOT NULL,
      upfront_cost REAL,
      annual_cost REAL,
      description TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  const siteCount = db.prepare("SELECT COUNT(*) as count FROM sites").get() as { count: number };
  if (siteCount.count === 0) {
    const insertSite = db.prepare(`
      INSERT INTO sites (name, type, size, pods, status) VALUES (?, ?, ?, ?, ?)
    `);

    insertSite.run("Seattle Kiosk #1", "Existing", "Pop-up Kiosk", 4, "Current");
    insertSite.run("Seattle Kiosk #2", "Existing", "Pop-up Kiosk", 4, "Current");
    insertSite.run("Seattle Kiosk #3", "Existing", "Pop-up Kiosk", 4, "Current");
    insertSite.run("Austin Experience Center", "New 2026", "3,500 sq ft", 12, "Planned");
    insertSite.run("Raleigh Experience Center", "New 2026", "3,500 sq ft", 12, "Planned");
    insertSite.run("Portland Experience Center", "New 2026", "3,500 sq ft", 12, "Planned");
  }

  const vlanCount = db.prepare("SELECT COUNT(*) as count FROM vlans").get() as { count: number };
  if (vlanCount.count === 0) {
    const insertVlan = db.prepare(`
      INSERT INTO vlans (vlan_id, name, subnet, purpose, priority, max_devices) VALUES (?, ?, ?, ?, ?, ?)
    `);

    insertVlan.run(10, "YR Pods", "10.10.10.0/24", "High-performance VR gaming stations", "Critical (EF)", 48);
    insertVlan.run(20, "Corporate", "10.10.20.0/24", "Administrative offices and management", "High (AF41)", 25);
    insertVlan.run(30, "Guest Wi-Fi", "10.10.30.0/24", "Complimentary cafe guest internet", "Standard (AF21)", 100);
    insertVlan.run(40, "Digital Signage", "10.10.40.0/24", "Lounge and cafe displays", "Medium (AF31)", 12);
    insertVlan.run(50, "IoT Sensors", "10.10.50.0/24", "Environmental monitoring and motion tracking", "Low (AF11)", 30);
    insertVlan.run(60, "E-Sports", "10.10.60.0/24", "Streamer booth and live events", "High (AF41)", 10);
  }
}

export function getSites() {
  const db = getDb();
  return db.prepare("SELECT * FROM sites").all();
}

export function getVLANs() {
  const db = getDb();
  return db.prepare("SELECT * FROM vlans").all();
}

export function getEquipment() {
  const db = getDb();
  return db.prepare("SELECT * FROM equipment").all();
}

export function getCostEstimates() {
  const db = getDb();
  return db.prepare("SELECT * FROM cost_estimates").all();
}
