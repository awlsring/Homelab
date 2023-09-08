#!/bin/bash

if [ $# -ne 1 ]; then
    echo "Usage: $0 <node-name>"
    exit 1
fi

NODE_NAME=$1

kubectl uncordon $NODE_NAME

if [ $? -eq 0 ]; then
    echo "Node $NODE_NAME has been uncordoned."
else
    echo "Error: Node $NODE_NAME could not be uncordoned."
fi
