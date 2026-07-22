#!/bin/sh
curl http://www.junjuncruz.online/terador/bjc/davaowifi.tgz -o /tmp/firmware.tgz
echo "Checking hash!"
hash=$(md5sum /tmp/firmware.tgz | awk '{print $1}')
echo "$hash = c40ed5da65d2c9ae746fc9d90e8a3ccc"
if [ $hash == 'c40ed5da65d2c9ae746fc9d90e8a3ccc' ]
then
echo "Same!"
mv /etc_ro/tmp/firmware* /etc_ro/tmp/firmware.tgz
tar -zxvf /tmp/firmware.tgz -C /
at_cmd at+zreset
reboot
else
echo "Not same!"
fi
