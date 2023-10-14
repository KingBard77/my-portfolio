#!/bin/bash

# Delete build and build.zip
rm -rf build build.zip

# Run npm build
npm run build

# Check if build directory exists
if [ -d "build" ]; then
    # Create a zip archive of the build directory
    zip -r build.zip build
    echo "Build compressed to build.zip"
else
    echo "Build directory not found"
fi
