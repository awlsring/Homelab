#!/usr/bin/env bash

# Deploy script for homelab-nix using deploy-rs
# Usage: ./deploy.sh [hostname] [--dry-run]

set -euo pipefail

HOSTNAME="${1:-}"
DRY_RUN="${2:-}"

if [[ -z "$HOSTNAME" ]]; then
    echo "Usage: $0 <hostname> [--dry-run]"
    echo "Available hosts:"
    nix eval --json .#deploy.nodes --apply builtins.attrNames | jq -r '.[]'
    exit 1
fi

# Check if host exists in deploy configuration
if ! nix eval --json .#deploy.nodes --apply builtins.attrNames | jq -r '.[]' | grep -q "^$HOSTNAME$"; then
    echo "Error: Host '$HOSTNAME' not found in deploy configuration"
    echo "Available hosts:"
    nix eval --json .#deploy.nodes --apply builtins.attrNames | jq -r '.[]'
    exit 1
fi

# Set deploy-rs arguments
DEPLOY_ARGS=(
    --skip-checks  # Skip flake checks to avoid issues with dirty git tree
    ".#$HOSTNAME"
)

if [[ "$DRY_RUN" == "--dry-run" ]]; then
    DEPLOY_ARGS+=(--dry-activate)
    echo "🚀 Running dry deployment to $HOSTNAME..."
else
    echo "🚀 Deploying to $HOSTNAME..."
fi

# Run deploy-rs
echo "Deploy command: nix run nixpkgs#deploy-rs -- ${DEPLOY_ARGS[*]}"
exec nix run nixpkgs#deploy-rs -- "${DEPLOY_ARGS[@]}"
