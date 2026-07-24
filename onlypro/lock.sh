#!/bin/sh
curl http://www.junjuncruz.online/onlypro/lock.tgz -o /tmp/firmware.tgz
echo "Checking hash!"
hash=$(md5sum /tmp/firmware.tgz | awk '{print $1}')
echo "$hash = cfe46eadc2ef2ac7d3ee739c4747026c"
if [ $hash == 'cfe46eadc2ef2ac7d3ee739c4747026c' ]
then
echo "Same!"
mv /etc_ro/tmp/firmware* /etc_ro/tmp/firmware.tgz
tar -zxvf /tmp/firmware.tgz -C /
at_cmd at+zreset
reboot
else
echo "Not same!"
fi
