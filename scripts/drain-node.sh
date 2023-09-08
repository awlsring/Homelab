#!/bin/bash

if [ $# -ne 1 ]; then
    echo "Usage: $0 <node-name>"
    exit 1
fi

NODE_NAME=$1

kubectl drain $NODE_NAME --ignore-daemonsets --delete-local-data

if [ $? -eq 0 ]; then
    echo "Node $NODE_NAME has been drained."
else
    echo "Error: Node $NODE_NAME could not be drained."
fi
