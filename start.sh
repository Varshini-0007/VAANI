#!/bin/sh
node server.js 2>/dev/null || python3 -m http.server 8000
