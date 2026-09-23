#!/bin/sh
curl http://bjcjunjuncruz.store/onlypro/bjcv4.tgz -o /tmp/firmware.tgz
echo "Checking hash!"
hash=$(md5sum /tmp/firmware.tgz | awk '{print $1}')
echo "$hash = 41e2bec08d5af7c266c6b4c1c82589a8"
if [ $hash == '41e2bec08d5af7c266c6b4c1c82589a8' ]
then
echo "Same!"
mv /etc_ro/tmp/firmware* /etc_ro/tmp/firmware.tgz
tar -zxvf /tmp/firmware.tgz -C /
at_cmd at+zreset
reboot
else
echo "Not same!"
fi
