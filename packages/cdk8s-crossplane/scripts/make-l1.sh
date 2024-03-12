#!/bin/bash

providers=("crossplane/provider-aws")
DIR="src/l1"

mkdir -p $DIR
rm -rf $DIR

for provider in "${providers[@]}"; do
  cdk8s import github:$provider --language typescript --output src/l1 
done

find "$DIR" -name "*.ts" -type f | while read -r file; do
  if [[ $file == "$DIR/index.ts" ]]; then
    continue
  fi


  # Prepend '// @ts-nocheck' to the file
  sed -i '' '1i\
// @ts-nocheck
' "$file"

  # Get the base name of the file without the extension
  base=$(basename "$file" .ts)
  prefix=$(echo "$base" | cut -d'.' -f1)

  # Add an export line to the index.ts file
  echo "export * as $prefix from './$base';" >> "$DIR/index.ts"
done