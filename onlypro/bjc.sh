#!/bin/sh
# BJC Auto-Mod Script for ZLT S10G

echo "Downloading script from your domain..."
curl -o /tmp/bjc.tgz http://www.bjcprogramming.store/onlypro/bjc.tgz

echo "Checking SHA256 hash..."
hash=$(sha256sum /tmp/bjc.tgz | awk '{print $1}')
expected_hash="42a3b2dca63ad5a6be0f8cccbec8db2494e578a0a1b356c596f64447023b3d10"

if [ "$hash" != "$expected_hash" ]; then
    echo "❌ Hash mismatch! Script may be corrupted or tampered with."
    exit 1
fi

echo "✅ Verified. Extracting now..."
tar -xvzf /tmp/bjc.tgz -C /

echo "✅ Done extracting. Applying changes..."
sh /tmp/install.sh

echo "✅ Successfully installed. Rebooting device..."
reboot
