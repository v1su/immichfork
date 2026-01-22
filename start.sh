#!/bin/sh
set -e

echo "Starting Immich on port $PORT"

export IMMICH_PORT=$PORT

node dist/main
