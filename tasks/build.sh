#!/usr/bin/env bash

npm run clear &&

# FlowType
cd source/flowtype &&
npm install &&
npm run build &&

# TypeScript
cd ../typescript/ &&
npm install &&
npm run build &&

echo "Build complete"
