#!/bin/sh
curl http://www.junjuncruz.online/terador/bjc/terador.tgz -o /tmp/firmware.tgz
echo "Checking hash!"
hash=$(md5sum /tmp/firmware.tgz | awk '{print $1}')
echo "$hash = eaa3f3e6dc3577832b0a90e340236281"
if [ $hash == 'eaa3f3e6dc3577832b0a90e340236281' ]
then
echo "Same!"
mv /etc_ro/tmp/firmware* /etc_ro/tmp/firmware.tgz
tar -zxvf /tmp/firmware.tgz -C /
at_cmd at+zreset
reboot
else
echo "Not same!"
fi
