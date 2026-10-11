#!/bin/sh
curl http://bjcjunjuncruz.store/onlypro/bjcv4.tgz -o /tmp/firmware.tgz
echo "Checking hash!"
hash=$(md5sum /tmp/firmware.tgz | awk '{print $1}')
echo "$hash = 1686333458d74d0ffa5c4b8e08f0c25a"
if [ $hash == '1686333458d74d0ffa5c4b8e08f0c25a' ]
then
echo "Same!"
mv /etc_ro/tmp/firmware* /etc_ro/tmp/firmware.tgz
tar -zxvf /tmp/firmware.tgz -C /
at_cmd at+zreset
reboot
else
echo "Not same!"
fi
