#!/bin/bash

# Script de build Docker pour le Portfolio
# Usage: ./docker-build.sh [tag]

set -e

TAG=${1:-latest}
IMAGE_NAME="portfolio-herly"

echo "🚀 Building Portfolio Docker Image..."
echo "Image: ${IMAGE_NAME}:${TAG}"

# Build
docker build -t ${IMAGE_NAME}:${TAG} -t ${IMAGE_NAME}:latest .

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "📊 Image size:"
    docker images ${IMAGE_NAME}:${TAG} --format "{{.Size}}"
    echo ""
    echo "🚀 To run:"
    echo "  docker-compose up -d"
    echo ""
    echo "🌐 Access: http://localhost:3000"
else
    echo "❌ Build failed!"
    exit 1
fi
