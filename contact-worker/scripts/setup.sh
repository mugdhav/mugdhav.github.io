#!/usr/bin/env bash
# One-time Cloudflare setup for vmugdha-contact-worker: creates the R2 bucket
# and onboards vmugdha.in for Email Sending. Safe to re-run — each step checks
# whether it's already done before acting.
set -euo pipefail
cd "$(dirname "$0")/.."

BUCKET_NAME="vmugdha-contact-submissions"
SEND_DOMAIN="vmugdha.in"

if [ ! -d node_modules ]; then
  echo "==> Installing dependencies"
  npm install
fi

echo "==> Checking Cloudflare auth"
if ! npx wrangler whoami >/dev/null 2>&1; then
  echo "Not logged in to Cloudflare. Opening browser login..."
  npx wrangler login
fi
npx wrangler whoami

echo "==> Ensuring R2 bucket '$BUCKET_NAME' exists"
if npx wrangler r2 bucket list | grep -q "\"name\": \"$BUCKET_NAME\"\|^$BUCKET_NAME\$\|name.*$BUCKET_NAME"; then
  echo "Bucket '$BUCKET_NAME' already exists — skipping."
else
  npx wrangler r2 bucket create "$BUCKET_NAME"
fi

echo "==> Ensuring '$SEND_DOMAIN' is onboarded for Email Sending"
if npx wrangler email sending list 2>/dev/null | grep -qi "$SEND_DOMAIN"; then
  echo "'$SEND_DOMAIN' is already enabled for Email Sending — skipping."
else
  npx wrangler email sending enable "$SEND_DOMAIN"
  echo "NOTE: if this printed DNS records to add, add them in the Cloudflare"
  echo "dashboard before submissions can actually send email (R2 logging will"
  echo "still work regardless)."
fi

echo
echo "Setup complete. Next: run scripts/deploy.sh"
