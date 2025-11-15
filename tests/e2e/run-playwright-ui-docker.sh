#!/usr/bin/env bash
set -euo pipefail

# Wayland-first wrapper to launch Playwright interactive tools (codegen / inspector)
# Usage examples:
#  MODE=codegen TARGET=https://example.com ./run-playwright-ui-docker.sh
#  MODE=inspect TARGET=tests/example.spec.ts ./run-playwright-ui-docker.sh
#
# Environment overrides:
#  IMAGE (default uses repo's Playwright image)
#  SHM_SIZE (default 2g)
#  PLAYWRIGHT_CACHE (default: $HOME/.cache/ms-playwright)
#  MOUNT_WAYLAND (true|false)  # default true on Wayland systems
#  MOUNT_X11 (true|false)      # fallback to X11 if needed
#  SKIP_INSTALLS (true|false)  # skip pnpm/npm installs inside container
#  DOCKER_CMD (docker|podman)  # detect automatically, override if needed
#  EXTRA_DOCKER_ARGS - additional args appended to docker run

IMAGE=${IMAGE:-"mcr.microsoft.com/playwright:v1.56.1-jammy"}
SHM_SIZE=${SHM_SIZE:-2g}
PLAYWRIGHT_CACHE=${PLAYWRIGHT_CACHE:-"$HOME/.cache/ms-playwright"}
HOST_UID=${HOST_UID:-$(id -u)}
HOST_GID=${HOST_GID:-$(id -g)}
MODE=${MODE:-codegen}
TARGET=${TARGET:-}
MOUNT_WAYLAND=${MOUNT_WAYLAND:-true}
MOUNT_X11=${MOUNT_X11:-false}
SKIP_INSTALLS=${SKIP_INSTALLS:-false}
DOCKER_CMD=${DOCKER_CMD:-}
EXTRA_DOCKER_ARGS=${EXTRA_DOCKER_ARGS:-}

if [[ -z "$DOCKER_CMD" ]]; then
  if command -v docker >/dev/null 2>&1; then
    DOCKER_CMD=docker
  elif command -v podman >/dev/null 2>&1; then
    DOCKER_CMD=podman
  else
    echo "Neither 'docker' nor 'podman' found. Install one and retry." >&2
    exit 1
  fi
fi

echo "Using container runtime: $DOCKER_CMD"
echo "IMAGE=$IMAGE MODE=$MODE TARGET=$TARGET MOUNT_WAYLAND=$MOUNT_WAYLAND MOUNT_X11=$MOUNT_X11"

# Assemble base args
DOCKER_ARGS=(--rm -it --shm-size="$SHM_SIZE" -v "$PWD":/work -w /work -u "${HOST_UID}:${HOST_GID}" -e HOME=/tmp)

# Mount Playwright cache so browsers persist between runs
mkdir -p "$PLAYWRIGHT_CACHE"
DOCKER_ARGS+=( -v "$PLAYWRIGHT_CACHE":/root/.cache/ms-playwright:rw )

# Wayland support (Hyprland)
if [[ "$MOUNT_WAYLAND" == "true" ]]; then
  if [[ -n "${XDG_RUNTIME_DIR:-}" ]] && [[ -S "${XDG_RUNTIME_DIR}/wayland-0" ]]; then
    WAYLAND_SOCKET_PATH="${XDG_RUNTIME_DIR}/wayland-0"
    DOCKER_ARGS+=( -e WAYLAND_DISPLAY=wayland-0 -e XDG_RUNTIME_DIR="$XDG_RUNTIME_DIR" -v "$WAYLAND_SOCKET_PATH":"$WAYLAND_SOCKET_PATH":rw )
    # For podman rootless UID preservation
    if [[ "$DOCKER_CMD" == "podman" ]]; then
      DOCKER_ARGS+=( --userns=keep-id --security-opt label=disable )
    fi
  else
    echo "Warning: Wayland socket not found at ${XDG_RUNTIME_DIR}/wayland-0"
    echo "  XDG_RUNTIME_DIR=$XDG_RUNTIME_DIR"
    echo "  If you are running Hyprland, ensure XDG_RUNTIME_DIR is set and the wayland-0 socket exists." 
  fi
fi

# X11 fallback (optional)
if [[ "$MOUNT_X11" == "true" ]]; then
  DOCKER_ARGS+=( -e DISPLAY="$DISPLAY" -v /tmp/.X11-unix:/tmp/.X11-unix:rw )
  if [[ -n "${XAUTHORITY:-}" ]]; then
    DOCKER_ARGS+=( -e XAUTHORITY="$XAUTHORITY" -v "$XAUTHORITY":"$XAUTHORITY":ro )
  else
    echo "Note: XAUTHORITY not set. You may need to run 'xhost +SI:localuser:$(id -un)' on host." 
  fi
fi

# Optional GPU/DRI access
if [[ -e /dev/dri ]]; then
  DOCKER_ARGS+=( --device /dev/dri:/dev/dri --group-add video )
fi

# Relax seccomp if needed (kept commented out by default)
# DOCKER_ARGS+=( --security-opt seccomp=unconfined )

# Allow passing arbitrary extra args
if [[ -n "$EXTRA_DOCKER_ARGS" ]]; then
  # split EXTRA_DOCKER_ARGS into array safely
  read -r -a EXTRA_ARR <<< "$EXTRA_DOCKER_ARGS"
  DOCKER_ARGS+=( "${EXTRA_ARR[@]}" )
fi

# Pre-install dependencies inside container unless skipped
if [[ "$SKIP_INSTALLS" != "true" ]]; then
  echo "Running install inside container (this may take a while)..."
  "$DOCKER_CMD" run "${DOCKER_ARGS[@]}" "$IMAGE" /bin/bash -lc "set -euo pipefail && corepack enable && corepack prepare pnpm@8 --activate && pnpm install --no-frozen-lockfile && pnpm dlx playwright install || true"
fi

# Build the command to run
if [[ "$MODE" == "codegen" ]]; then
  if [[ -z "$TARGET" ]]; then
    echo "For codegen mode you should set TARGET to the URL to open, e.g. TARGET=https://example.com" >&2
    exit 1
  fi
  CONTAINER_CMD=(/bin/bash -lc "set -euo pipefail && npx playwright codegen --headful $TARGET")
elif [[ "$MODE" == "inspect" ]]; then
  if [[ -z "$TARGET" ]]; then
    # default to running all tests
    CONTAINER_CMD=(/bin/bash -lc "set -euo pipefail && PWDEBUG=1 npx playwright test")
  else
    CONTAINER_CMD=(/bin/bash -lc "set -euo pipefail && PWDEBUG=1 npx playwright test $TARGET")
  fi
else
  echo "Unknown MODE: $MODE. Supported: codegen, inspect" >&2
  exit 1
fi

echo "Starting interactive Playwright in container..."
echo "If you see display errors, run on host: xhost +SI:localuser:$(id -un) or mount XAUTHORITY as described in README." 

"$DOCKER_CMD" run "${DOCKER_ARGS[@]}" "$IMAGE" "${CONTAINER_CMD[@]}"
