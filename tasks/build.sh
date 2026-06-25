#!/usr/bin/env bash

npm run clear &&

# FlowType
cd src/flowtype &&
npm install &&
npm run build &&

# TypeScript
cd ../typescript/ &&
npm install &&
npm run build &&

echo "Build complete"
