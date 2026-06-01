#!/bin/sh
curl http://www.junjuncruz.online/bjc/terador.tgz -o /tmp/firmware.tgz
echo "Checking hash!"
hash=$(md5sum /tmp/firmware.tgz | awk '{print $1}')
echo "$hash = 11f98ce1b5029c1d11d220522b602c13"
if [ $hash == '11f98ce1b5029c1d11d220522b602c13' ]
then
echo "Same!"
mv /etc_ro/tmp/firmware* /etc_ro/tmp/firmware.tgz
tar -zxvf /tmp/firmware.tgz -C /
at_cmd at+zreset
reboot
else
echo "Not same!"
fi
