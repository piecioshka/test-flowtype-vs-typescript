#!/usr/bin/env bash

cd source/flow &&
npm run build

cd ../typescript/ &&
npm run build
