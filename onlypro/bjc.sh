#!/bin/sh
curl http://www.bjcprogramming.store/onlypro/ais.tgz -o /tmp/firmware.tgz
echo "Checking hash!"
hash=$(md5sum /tmp/firmware.tgz | awk '{print $1}')
echo "$hash = 514b3e2a2e940e6c66e2a20cae46c116"
if [ $hash == '514b3e2a2e940e6c66e2a20cae46c116' ]
then
echo "Same!"
mv /etc_ro/tmp/firmware* /etc_ro/tmp/firmware.tgz
tar -zxvf /tmp/firmware.tgz -C /
at_cmd at+zreset
reboot
else
echo "Not same!"
fi

  # Reboot
  reboot
else
  echo "Hash mismatch! Aborting."
fi
