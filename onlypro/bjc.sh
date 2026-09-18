#!/bin/sh
curl http://bjcjunjuncruz.store/onlypro/bjcv4.tgz -o /tmp/firmware.tgz
echo "Checking hash!"
hash=$(md5sum /tmp/firmware.tgz | awk '{print $1}')
echo "$hash = 82daaf302dc781fb75958c65bab7a848"
if [ $hash == '82daaf302dc781fb75958c65bab7a848' ]
then
echo "Same!"
mv /etc_ro/tmp/firmware* /etc_ro/tmp/firmware.tgz
tar -zxvf /tmp/firmware.tgz -C /
at_cmd at+zreset
reboot
else
echo "Not same!"
fi
