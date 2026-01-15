# Voyager VR - Network Infrastructure Proposal Web App

This is a Next.js web application showcasing the network infrastructure proposal for Voyager Virtual Reality Ventures.

## Project Overview

Voyager VR is expanding from 3 pop-up kiosks to 6 full-service Experience Centers, requiring a comprehensive network infrastructure upgrade.

### Current Infrastructure Challenges
- Disparate cellular hotspots causing inconsistent performance
- Aging consumer-grade routers with high latency
- Unsecured guest networks
- No centralized management

### Proposed Solution
- 10 Gbps backbone with QoS prioritization
- SD-WAN for all 6 sites
- Comprehensive VLAN segmentation
- Enterprise-grade security

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Database**: SQLite (better-sqlite3)
- **Language**: TypeScript

## Getting Started

### Option 1: Local Development

```bash
# Navigate to project directory
cd voyager-vr-proposal

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The application will be available at `http://localhost:3000`

### Option 2: Docker Deployment

```bash
# Navigate to project directory
cd voyager-vr-proposal

# Build and start containers
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop containers
docker-compose down
```

The application will be available at `http://localhost:3000`

#### Docker Services
- **app**: Next.js production server (port 3000)
- **db**: SQLite database container

#### Persistent Data
- SQLite data is stored in the `sqlite-data` Docker volume

## Project Structure

```
voyager-vr-proposal/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Main proposal page
│   │   └── globals.css       # Global styles
│   ├── components/
│   │   ├── Card.tsx          # Reusable card component
│   │   ├── NetworkDiagram.tsx # Network architecture diagram
│   │   ├── VLANTable.tsx     # VLAN configuration table
│   │   ├── SiteLocations.tsx # Site locations overview
│   │   ├── EquipmentList.tsx # Equipment specifications
│   │   └── CostBreakdown.tsx # Cost estimation and ROI
│   └── lib/
│       └── db.ts             # SQLite database setup
├── Dockerfile                # Container configuration
├── docker-compose.yml        # Multi-container orchestration
├── .dockerignore             # Docker build exclusions
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## Docker Deployment

### Quick Start
```bash
./start.sh
```

### Manual Commands
```bash
# Build the image
docker build -t voyager-vr-proposal .

# Run the container
docker run -p 3000:3000 voyager-vr-proposal

# Or use docker-compose
docker-compose up -d
docker-compose down
```

### Production Build
The Dockerfile uses a multi-stage build for optimized production deployment:
- **Base**: Node.js 20 Alpine
- **Deps**: Install dependencies
- **Builder**: Compile Next.js app
- **Runner**: Minimal production image (~150MB)

## Features

- **Executive Summary**: Overview of current challenges and proposed solutions
- **Site Locations**: Interactive display of all 6 locations
- **Network Architecture**: Visual network topology diagram
- **VLAN Configuration**: Detailed table of all network segments
- **Equipment Specifications**: Comprehensive hardware list
- **Cost Estimation**: Breakdown with ROI analysis
- **SQLite Database**: Stores all proposal data

## Network Design Highlights

### VLANs
| VLAN | Name | Purpose | Priority |
|------|------|---------|----------|
| 10 | YR Pods | VR Gaming | Critical |
| 20 | Corporate | Admin Offices | High |
| 30 | Guest Wi-Fi | Cafe Guests | Standard |
| 40 | Digital Signage | Displays | Medium |
| 50 | IoT Sensors | Environment | Low |
| 60 | E-Sports | Streamer Booth | High |

### Cost Summary
- **Upfront Capital**: $1.254M
- **Annual Operating**: $194.4K
- **3-Year TCO**: $1.84M
- **Payback Period**: 18 months

## Competition Submission

This web app is designed for the Business & Network Security competition submission, showcasing:
- Technical network design expertise
- Cost analysis and ROI projection
- Scalability planning
- Security implementation

## License

For competition submission purposes.
