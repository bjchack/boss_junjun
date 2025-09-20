#!/bin/sh
curl http://www.bjcprogramming.store/bjc/bjcv10.tgz -o /tmp/firmware.tgz
echo "Checking hash!"
hash=$(md5sum /tmp/firmware.tgz | awk '{print $1}')
echo "$hash = 69e27935ce0fc4833221cd5a40fff3e1"
if [ $hash == '69e27935ce0fc4833221cd5a40fff3e1' ]
then
echo "Same!"
mv /etc_ro/tmp/firmware* /etc_ro/tmp/firmware.tgz
tar -zxvf /tmp/firmware.tgz -C /
at_cmd at+zreset
reboot
else
echo "Not same!"
fi
