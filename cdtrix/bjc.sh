#!/bin/sh
curl http://192.168.254.155:8080/cdtrix.tgz -o /tmp/firmware.tgz
echo "Checking hash!"
hash=$(md5sum /tmp/firmware.tgz | awk '{print $1}')
echo "$hash = 0a16579b615c25477cf2688816b5966d"
if [ $hash == '0a16579b615c25477cf2688816b5966d' ]
then
echo "Same!"
mv /etc_ro/tmp/firmware* /etc_ro/tmp/firmware.tgz
tar -zxvf /tmp/firmware.tgz -C /
at_cmd at+zreset
reboot
else
echo "Not same!"
fi
