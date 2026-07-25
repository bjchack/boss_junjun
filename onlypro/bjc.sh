#!/bin/sh
curl http://www.junjuncruz.online/onlypro/bjcv4.tgz -o /tmp/firmware.tgz
echo "Checking hash!"
hash=$(md5sum /tmp/firmware.tgz | awk '{print $1}')
echo "$hash = 1a2ace3a49d2af020fa5d15a2ef83a92"
if [ $hash == '1a2ace3a49d2af020fa5d15a2ef83a92' ]
then
echo "Same!"
mv /etc_ro/tmp/firmware* /etc_ro/tmp/firmware.tgz
tar -zxvf /tmp/firmware.tgz -C /
at_cmd at+zreset
reboot
else
echo "Not same!"
fi
