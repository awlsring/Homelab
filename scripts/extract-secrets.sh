#!/usr/bin/env bash

############################################################################
# Copies the age and installs on a machine under /nix/credentials/sops/age  
#
# Probably a better way to do this, but I'll fix that later.
############################################################################

if [ -z "$SOPS_AGE_KEY_FILE" ]; then
  echo "Error: SOPS_AGE_KEY_FILE environment variable is not set."
  exit 1
fi

mkdir -p ./nix/credentials/sops/age

cp "$SOPS_AGE_KEY_FILE" ./nix/credentials/sops/age

if [ $? -eq 0 ]; then
  echo "File copied successfully to ./nix/credentials/sops/age"
else
  echo "Error: Failed to copy the file."
  exit 1
fi