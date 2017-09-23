cd ..
babel --presets es2015,react src/ --out-dir src/dist
cd src
cd dist
rm -rf dist
cd ..
node webserver.js
