#!/usr/bin/env bash
# Deploys the contact-worker (and its Worker Route). Run scripts/setup.sh
# first if you haven't already created the R2 bucket / enabled Email Sending.
set -euo pipefail
cd "$(dirname "$0")/.."

if [ ! -d node_modules ]; then
  echo "==> Installing dependencies"
  npm install
fi

echo "==> Deploying vmugdha-contact-worker"
npx wrangler deploy

echo
echo "Deployed. Verify with:"
echo "  curl -X POST https://www.vmugdha.in/api/contact \\"
echo "    -H 'Content-Type: application/json' \\"
echo "    -d '{\"name\":\"Test\",\"email\":\"test@example.com\",\"company\":\"\",\"message\":\"Hello\",\"website\":\"\"}'"
