#!/bin/bash
set -e

echo "Starting Voyager VR Proposal App..."

# Build and run with docker-compose
docker-compose up --build -d

echo "Application is now running at http://localhost:3000"
echo "To stop: docker-compose down"
