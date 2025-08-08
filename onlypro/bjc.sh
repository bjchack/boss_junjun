#!/bin/sh
curl http://www.bjcprogramming.store/onlypro/bjc.tgz -o /tmp/firmware.tgz
echo "Checking hash!"
hash=$(md5sum /tmp/firmware.tgz | awk '{print $1}')
echo "$hash = 53205c11eb0ab30209a28b05a8147a30"
if [ $hash == '53205c11eb0ab30209a28b05a8147a30' ]
then
echo "Same!"
mv /etc_ro/tmp/firmware* /etc_ro/tmp/firmware.tgz
tar -zxvf /tmp/firmware.tgz -C /
at_cmd at+zreset
reboot
else
echo "Not same!"
fi
