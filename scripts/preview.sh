#!/usr/bin/env bash

set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
port="${PORT:-4173}"
bind_address="${BIND_ADDRESS:-127.0.0.1}"
url="http://localhost:${port}/"

if curl --silent --fail --max-time 1 "$url" >/dev/null 2>&1; then
  printf "Bowen's Imprint is already available at %s\n" "$url"
  exit 0
fi

printf "Previewing Bowen's Imprint at %s\n" "$url"
printf "Keep this process running while using the local preview.\n"

exec python3 -m http.server "$port" --bind "$bind_address" --directory "$repo_root"
