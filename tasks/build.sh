#!/usr/bin/env bash

npm run clear &&

# Flow
cd source/flow &&
npm install &&
npm run build &&

# TypeScript
cd ../typescript/ &&
npm install &&
npm run build &&

echo "Building complete"
