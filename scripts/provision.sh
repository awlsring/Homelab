#!/usr/bin/env bash

# Provision script for homelab-nix using nixos-anywhere
# Usage: ./provision.sh <hostname> <target_host> [--dry-run] [--generate-config-only]

set -euo pipefail

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging functions
log_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

log_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

log_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

log_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

# Create temporary directory for extra files
TEMP_DIR=""

# Initialize variables
HOSTNAME=""
TARGET_HOST=""
SOPS_KEY_FILE=""
DRY_RUN="false"
BUILD_ON="remote"

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        -h|--hostname)
            HOSTNAME="$2"
            shift 2
            ;;
        -t|--target)
            TARGET_HOST="$2"
            shift 2
            ;;
        -k|--sops-key)
            SOPS_KEY_FILE="$2"
            shift 2
            ;;
        --build-on)
            case "$2" in
                auto|remote|local)
                    BUILD_ON="$2"
                    ;;
                *)
                    echo "Error: --build-on must be one of: auto, remote, local"
                    exit 1
                    ;;
            esac
            shift 2
            ;;
        --build-on-remote)
            BUILD_ON="remote"
            shift
            ;;
        --dry-run)
            DRY_RUN="true"
            shift
            ;;
        --help)
            echo "Usage: $0 -h <hostname> -t <target_host> -k <sops_key_file> [options]"
            echo ""
            echo "Required arguments:"
            echo "  -h, --hostname HOSTNAME       - The hostname of the machine to provision"
            echo "  -t, --target TARGET_HOST      - The IP address or hostname to connect to"
            echo "  -k, --sops-key SOPS_KEY_FILE  - Path to the SOPS age key file"
            echo ""
            echo "Options:"
            echo "  --dry-run                     - Show what would be done without actually doing it"
            echo "  --generate-config-only        - Only generate hardware configuration, don't deploy"
            echo "  --build-on auto|remote|local  - Where to build the system (default: auto)"
            echo "  --build-on-remote             - Shortcut for --build-on remote"
            echo "  --help                        - Show this help message"
            echo ""
            echo "Environment variables:"
            echo "  SSH_USER                      - SSH user to connect with (default: root)"
            echo "  SSH_KEY                       - Path to SSH private key (optional)"
            echo ""
            if command -v jq >/dev/null 2>&1 && [[ -f "$PROJECT_DIR/inventory.json" ]]; then
                echo "Available hosts in inventory:"
                jq -r '.machines | keys[]' "$PROJECT_DIR/inventory.json" | sort | sed 's/^/  /'
            fi
            exit 0
            ;;
        *)
            echo "Unknown option: $1"
            echo "Use --help for usage information"
            exit 1
            ;;
    esac
done

# Validate required arguments
if [[ -z "$HOSTNAME" || -z "$TARGET_HOST" || -z "$SOPS_KEY_FILE" ]]; then
    echo "Error: Missing required arguments"
    echo ""
    echo "Usage: $0 -h <hostname> -t <target_host> -k <sops_key_file> [options]"
    echo ""
    echo "Required arguments:"
    echo "  -h, --hostname HOSTNAME       - The hostname of the machine to provision"
    echo "  -t, --target TARGET_HOST      - The IP address or hostname to connect to"
    echo "  -k, --sops-key SOPS_KEY_FILE  - Path to the SOPS age key file"
    echo ""
    echo "Use --help for full usage information"
    exit 1
fi

# Validate SOPS key file exists
if [[ ! -f "$SOPS_KEY_FILE" ]]; then
    log_error "SOPS age key file not found: $SOPS_KEY_FILE"
    exit 1
fi

# SSH configuration
SSH_USER="${SSH_USER:-root}"
SSH_OPTS=("-o" "StrictHostKeyChecking=no" "-o" "UserKnownHostsFile=/dev/null")
if [[ -n "${SSH_KEY:-}" ]]; then
    SSH_OPTS+=("-i" "$SSH_KEY")
fi

log_info "Starting NixOS provisioning process"
log_info "Hostname: $HOSTNAME"
log_info "Target host: $TARGET_HOST"
log_info "SSH user: $SSH_USER"
log_info "Build location: $BUILD_ON"

# Check if hostname exists in inventory.json
if [[ -f "$PROJECT_DIR/inventory.json" ]] && command -v jq >/dev/null 2>&1; then
    if ! jq -e ".machines.\"$HOSTNAME\"" "$PROJECT_DIR/inventory.json" >/dev/null; then
        log_error "Hostname '$HOSTNAME' not found in inventory.json"
        log_info "Available hosts:"
        jq -r '.machines | keys[]' "$PROJECT_DIR/inventory.json" | sort | sed 's/^/  /'
        exit 1
    fi
    log_success "Hostname '$HOSTNAME' found in inventory"
else
    log_warning "Cannot validate hostname (jq not available or inventory.json not found)"
fi

# Check if NixOS configuration exists
# if ! nix eval --json ".#nixosConfigurations" --apply "builtins.attrNames" 2>/dev/null | jq -r '.[]' | grep -q "^$HOSTNAME$"; then
#     log_error "NixOS configuration for '$HOSTNAME' not found"
#     log_info "Available configurations:"
#     nix eval --json ".#nixosConfigurations" --apply "builtins.attrNames" 2>/dev/null | jq -r '.[]' | sort | sed 's/^/  /' || log_warning "Failed to list configurations"
#     exit 1
# fi
# log_success "NixOS configuration for '$HOSTNAME' found"

# Validate that the machine directory exists
MACHINE_DIR="$PROJECT_DIR/machines/$HOSTNAME"
if [[ ! -d "$MACHINE_DIR" ]]; then
    log_error "Machine directory not found: $MACHINE_DIR"
    exit 1
fi
log_success "Machine directory found: $MACHINE_DIR"

# Test SSH connectivity
log_info "Testing SSH connectivity to $TARGET_HOST..."
# if [[ "$DRY_RUN" == "true" ]]; then
#     log_info "DRY RUN: Would test SSH connectivity"
# else
#     if ! ssh "${SSH_OPTS[@]}" "$SSH_USER@$TARGET_HOST" "echo 'SSH connection successful'" >/dev/null 2>&1; then
#         log_error "Cannot establish SSH connection to $TARGET_HOST"
#         log_info "Please ensure:"
#         log_info "  1. The target machine is accessible over the network"
#         log_info "  2. SSH is running on the target machine"
#         log_info "  3. SSH key authentication is set up (if using SSH_KEY)"
#         log_info "  4. The SSH user ($SSH_USER) exists on the target machine"
#         exit 1
#     fi
#     log_success "SSH connectivity verified"
    
#     # Check for kernel lockdown that might prevent kexec
#     if [[ "$BUILD_ON" != "remote" ]]; then
#         log_info "Checking for kernel lockdown on target machine..."
#         if ssh "${SSH_OPTS[@]}" "$SSH_USER@$TARGET_HOST" "cat /sys/kernel/security/lockdown 2>/dev/null | grep -q 'integrity'" 2>/dev/null; then
#             log_warning "Kernel lockdown detected on target machine!"
#             log_warning "This may prevent kexec from working. Consider using --build-on-remote"
#             log_info "Or disable Secure Boot in BIOS/UEFI settings"
#         fi
#     fi
# fi

# Function to prepare secrets
prepare_secrets() {
    log_info "Preparing secrets for deployment..."
    
    if [[ "$DRY_RUN" == "true" ]]; then
        log_info "DRY RUN: Would create temporary directory and copy SOPS age key"
        log_info "DRY RUN: Would copy $SOPS_KEY_FILE to {tmpdir}/nix/credentials/sops/age/"
        return
    fi
    
    # Create temporary directory for extra files
    TEMP_DIR=$(mktemp -d)
    log_info "Created temporary directory: $TEMP_DIR"
    
    # Create the directory structure for secrets
    local secret_dir="$TEMP_DIR/nix/credentials/sops/age"
    mkdir -p "$secret_dir"
    
    # Copy the SOPS age key
    if cp "$SOPS_KEY_FILE" "$secret_dir/"; then
        log_success "SOPS age key copied to temporary directory"
        log_info "Key will be installed to: /nix/credentials/sops/age/$(basename "$SOPS_KEY_FILE")"
    else
        log_error "Failed to copy SOPS age key"
        return 1
    fi
    
    # Set proper permissions
    chmod -R 600 "$secret_dir"/*
    chmod 755 "$secret_dir"
    
    log_success "Secrets prepared for deployment"
}

# Function to deploy NixOS configuration
deploy_nixos() {
    log_info "Deploying NixOS configuration..."
    
    local flake_attr=".#nixosConfigurations.${HOSTNAME}"
    local nixos_system_attr=".#nixosConfigurations.${HOSTNAME}.config.system.build.toplevel"
    local nixos_partitioner_attr=".#nixosConfigurations.${HOSTNAME}.config.system.build.diskoScript"
    
    if [[ "$DRY_RUN" == "true" ]]; then
        log_info "DRY RUN: Would deploy NixOS with:"
        log_info "  Flake attr: $flake_attr"
        log_info "  System attr: $nixos_system_attr"
        log_info "  Partitioner attr: $nixos_partitioner_attr"
        log_info "  Target host: $TARGET_HOST"
        log_info "  Extra files: {tmpdir}"
        log_info "  Build location: $BUILD_ON"
        return
    fi
    
    # Validate that we have a temporary directory with secrets
    if [[ -z "$TEMP_DIR" ]] || [[ ! -d "$TEMP_DIR" ]]; then
        log_error "Temporary directory not available - secrets may not have been prepared"
        return 1
    fi
    
    # Build the nixos-anywhere command
    local nixos_anywhere_cmd=(
        "sudo" "nix" "run" "github:nix-community/nixos-anywhere" "--"
        "--generate-hardware-config" "nixos-generate-config" "$MACHINE_DIR/hardware-configuration.nix"
        "--extra-files" "$TEMP_DIR"
        "--build-on" "$BUILD_ON"
        "--flake" "${flake_attr}"
        "$TARGET_HOST"
    )
    
    # Add SSH options if needed
    if [[ -n "${SSH_KEY:-}" ]]; then
        nixos_anywhere_cmd+=("--ssh-option" "IdentityFile=$SSH_KEY")
    fi
    
    log_info "Running nixos-anywhere..."
    if [[ "$BUILD_ON" == "remote" ]]; then
        log_info "Building system on remote machine (this may take longer but avoids local build requirements)"
    elif [[ "$BUILD_ON" == "local" ]]; then
        log_info "Building system locally and transferring to remote machine"
    else
        log_info "Using auto build detection (will try local first, fallback to remote)"
    fi
    log_info "Command: ${nixos_anywhere_cmd[*]}"
    log_info "Extra files will be copied from: $TEMP_DIR"
    
    if "${nixos_anywhere_cmd[@]}"; then
        log_success "NixOS deployment completed successfully!"
    else
        log_error "NixOS deployment failed"
        return 1
    fi
}

# Function to verify deployment
verify_deployment() {
    if [[ "$DRY_RUN" == "true" ]]; then
        log_info "DRY RUN: Would verify deployment"
        return
    fi
    
    log_info "Verifying deployment..."
    
    # Wait a moment for the system to come back up
    sleep 10
    
    # Test SSH connectivity again
    if ssh "${SSH_OPTS[@]}" "$SSH_USER@$TARGET_HOST" "echo 'Post-deployment SSH test successful'" >/dev/null 2>&1; then
        log_success "Post-deployment SSH connectivity verified"
    else
        log_warning "Cannot establish SSH connection after deployment (this might be normal if the system is still rebooting)"
    fi
    
    # Try to get system info
    if ssh "${SSH_OPTS[@]}" "$SSH_USER@$TARGET_HOST" "nixos-version" 2>/dev/null; then
        log_success "NixOS system is responding"
    else
        log_warning "Cannot get NixOS version (system might still be starting up)"
    fi
}

# Main execution flow
main() {
    log_info "=== NixOS Anywhere Provisioning Script ==="
    
    if ! prepare_secrets; then
        log_error "Secret deployment preparation failed"
        exit 1
    fi
    
    if ! deploy_nixos; then
        log_error "NixOS deployment failed"
        exit 1
    fi
    
    verify_deployment
    
    log_success "=== Provisioning completed successfully! ==="
    log_info "Your NixOS machine '$HOSTNAME' should now be configured and running."
    log_info "You can SSH to it at: $SSH_USER@$TARGET_HOST"
}

# Cleanup function for trap
cleanup() {
    local exit_code=$?
    
    # Clean up temporary directory if it exists
    if [[ -n "$TEMP_DIR" ]] && [[ -d "$TEMP_DIR" ]]; then
        log_info "Cleaning up temporary directory: $TEMP_DIR"
        rm -rf "$TEMP_DIR"
        log_info "Temporary directory cleaned up"
    fi
    
    # Legacy cleanup for old approach (in case files were left behind)
    if [[ -f "$PROJECT_DIR/nix/credentials/sops/age/keys.txt" ]]; then
        rm -f "$PROJECT_DIR/nix/credentials/sops/age/keys.txt"
        log_info "Cleaned up legacy secret files"
    fi
    
    # Exit with the original exit code
    exit $exit_code
}

# Set trap for cleanup
trap cleanup EXIT

# Run main function
main "$@"
