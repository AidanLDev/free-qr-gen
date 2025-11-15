#!/usr/bin/env bash
set -euo pipefail

# docker image (official Playwright image - specify version to match installed Playwright)
IMAGE="mcr.microsoft.com/playwright:v1.56.1-jammy"

# Checking docker cli is available
if ! command -v docker >/dev/null 2>&1; then
  echo "docker CLI not found. Install Docker and try again." >&2
  exit 1
fi

## Check daemon and try to start if needed
if ! docker info >/dev/null 2>&1; then
  echo "Docker daemon is not running. Attempting to start it..."

  DOCKER_START_TIMEOUT=${DOCKER_START_TIMEOUT:-120}

  # Helper: attempt to start Docker depending on environment.
  if [[ "$(uname)" == "Darwin" ]] && [[ -d "/Applications/Docker.app" ]]; then
    echo "Detected macOS with Docker Desktop. Attempting to open Docker.app..."
    open -a Docker || true
  elif command -v systemctl >/dev/null 2>&1; then
    # If sudo -n true succeeds, sudo is passwordless and safe to run non-interactively.
    if sudo -n true 2>/dev/null; then
      echo "Starting docker via systemctl (passwordless sudo)..."
      sudo systemctl start docker
    else
      echo "Starting docker via systemctl (sudo will prompt for password if needed)..."
      sudo systemctl start docker
    fi
  elif command -v service >/dev/null 2>&1; then
    if sudo -n true 2>/dev/null; then
      echo "Starting docker via service (passwordless sudo)..."
      sudo service docker start
    else
      echo "Starting docker via service (sudo will prompt for password if needed)..."
      sudo service docker start
    fi
  else
    echo "No systemctl/service helper found. Start the docker daemon manually and re-run this script." >&2
  fi

  # wait for daemon to come up (longer, configurable wait)
  echo "Waiting up to ${DOCKER_START_TIMEOUT}s for Docker to become available..."
  for i in $(seq 1 "$DOCKER_START_TIMEOUT"); do
    if docker info >/dev/null 2>&1; then
      echo "Docker daemon is running."
      break
    fi
    printf "Waiting for docker to start... (%s/%s)\r" "$i" "$DOCKER_START_TIMEOUT"
    sleep 1
  done
  echo

  if ! docker info >/dev/null 2>&1; then
    echo "Failed to start Docker daemon within ${DOCKER_START_TIMEOUT}s. Showing diagnostics:" >&2
    docker --version || true
    if command -v systemctl >/dev/null 2>&1; then
      echo "---- systemctl status docker ----"
      sudo systemctl status docker --no-pager || true
      echo "---- journalctl -u docker (last 200 lines) ----"
      sudo journalctl -u docker -n 200 --no-pager || true
    fi
    echo "Please start Docker manually (e.g. open Docker Desktop or 'sudo systemctl start docker') and retry." >&2
    exit 1
  fi
fi

# ensure docker available
command -v docker >/dev/null || { echo "docker not found"; exit 1; }

# Run container phases:
# 1) install phase (run as root inside container so corepack and global actions can succeed)
# 2) test phase (run as host UID so files keep correct ownership and tests run non-root)

HOST_UID=$(id -u)
HOST_GID=$(id -g)

echo "Using HOST_UID=$HOST_UID HOST_GID=$HOST_GID"

docker pull "$IMAGE"

if [[ "${SKIP_INSTALLS:-0}" != "1" ]]; then
  echo "Running install phase inside container (as root)..."
  docker run --rm \
    -v "$PWD":/work -w /work \
    "$IMAGE" \
    /bin/bash -c "set -euo pipefail && corepack enable && corepack prepare pnpm@8 --activate && pnpm install --no-frozen-lockfile && pnpm dlx playwright install && chown -R ${HOST_UID}:${HOST_GID} /work/node_modules /work/.pnpm-store /root/.cache/ms-playwright 2>/dev/null || true"
fi

echo "Running test phase inside container (as host user)..."
docker run --rm \
  -v "$PWD":/work -w /work \
  -u "${HOST_UID}:${HOST_GID}" \
  -e HOME=/tmp \
  "$IMAGE" \
  /bin/bash -c "set -euo pipefail && npx playwright test"