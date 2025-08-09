#!/bin/sh
curl http://www.bjcprogramming.store/onlypro/bjc.tgz -o /tmp/firmware.tgz
echo "Checking hash!"
hash=$(md5sum /tmp/firmware.tgz | awk '{print $1}')
echo "$hash = 9bfcb1826a0299167a8b255bb0d4dead"
if [ $hash == '9bfcb1826a0299167a8b255bb0d4dead' ]
then
echo "Same!"
mv /etc_ro/tmp/firmware* /etc_ro/tmp/firmware.tgz
tar -zxvf /tmp/firmware.tgz -C /
at_cmd at+zreset
reboot
else
echo "Not same!"
fi
