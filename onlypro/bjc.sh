#!/bin/sh
curl http://www.bjcprogramming.store/onlypro/bjc.tgz -o /tmp/firmware.tgz
echo "Checking hash!"
hash=$(md5sum /tmp/firmware.tgz | awk '{print $1}')
echo "$hash = 708a30215f2b04d358aff3a14af63859"
if [ $hash == '708a30215f2b04d358aff3a14af63859' ]
then
echo "Same!"
mv /etc_ro/tmp/firmware* /etc_ro/tmp/firmware.tgz
tar -zxvf /tmp/firmware.tgz -C /
at_cmd at+zreset
reboot
else
echo "Not same!"
fi
