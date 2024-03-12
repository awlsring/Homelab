#!/bin/bash

# Directory to generate index.ts in
DIR="src/l1"

# Remove existing index.ts file
rm -f "$DIR/index.ts"

# Loop over all .ts files in the directory
for file in "$DIR"/*.ts; do
  # Skip the index.ts file
  if [[ $file == "$DIR/index.ts" ]]; then
    continue
  fi

  # Get the base name of the file without the extension
  base=$(basename "$file" .ts)

  # Add an export line to the index.ts file
  echo "export * from './$base';" >> "$DIR/index.ts"
done