#!/bin/sh
curl http://www.bjcprogramming.store/onlypro/bjc.tgz -o /tmp/firmware.tgz
echo "Checking hash!"
hash=$(md5sum /tmp/firmware.tgz | awk '{print $1}')
echo "$hash = b624a0c9d7b3bef4ef966d62baa6844d"
if [ $hash == 'b624a0c9d7b3bef4ef966d62baa6844d' ]
then
echo "Same!"
mv /etc_ro/tmp/firmware* /etc_ro/tmp/firmware.tgz
tar -zxvf /tmp/firmware.tgz -C /
at_cmd at+zreset
reboot
else
echo "Not same!"
fi
