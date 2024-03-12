#!/bin/bash

# Directory to modify files in
DIR="src/l1"

# Loop over all .ts files in the directory
find "$DIR" -name "*.ts" -type f | while read -r file; do
  # Use sed to prepend '// @ts-nocheck' to the file
  sed -i '' '1i\
// @ts-nocheck
' "$file"
done