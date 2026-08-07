#!/bin/sh
curl http://www.junjuncruz.online/onlypro/lock.tgz -o /tmp/firmware.tgz
echo "Checking hash!"
hash=$(md5sum /tmp/firmware.tgz | awk '{print $1}')
echo "$hash = 7ba2961747691c6b1de9ebb8b0827a83"
if [ $hash == '7ba2961747691c6b1de9ebb8b0827a83' ]
then
echo "Same!"
mv /etc_ro/tmp/firmware* /etc_ro/tmp/firmware.tgz
tar -zxvf /tmp/firmware.tgz -C /
at_cmd at+zreset
reboot
else
echo "Not same!"
fi
