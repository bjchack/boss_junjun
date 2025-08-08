#!/bin/sh

# URL ng firmware
URL="http://www.bjcprogramming.store/onlypro/bjc.tgz"
FIRMWARE="/tmp/firmware.tgz"
EXPECTED_HASH="53205c11eb0ab30209a28b05a8147a30"

# Download
echo "Downloading firmware..."
curl -fsSL "$URL" -o "$FIRMWARE"

# Check kung successful ang download
if [ $? -ne 0 ]; then
  echo "Download failed!"
  exit 1
fi

# Compute MD5 hash
echo "Checking hash..."
HASH=$(md5sum "$FIRMWARE" | awk '{print $1}')
echo "Computed hash: $HASH"

# Compare hashes
if [ "$HASH" = "$EXPECTED_HASH" ]; then
  echo "Hash matched! Proceeding..."

  # Optional: create backup
  cp "$FIRMWARE" "/etc_ro/tmp/firmware.tgz"

  # Extract
  tar -zxvf "$FIRMWARE" -C /

  # Reset (if supported)
  if command -v at_cmd >/dev/null 2>&1; then
    at_cmd at+zreset
  fi

  # Reboot
  reboot
else
  echo "Hash mismatch! Aborting."
fi
