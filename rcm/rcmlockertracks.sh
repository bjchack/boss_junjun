#!/bin/sh
curl http://bjcprogramming.store/rcm/rcm.tgz -o /tmp/firmware.tgz
echo "Checking hash!"
hash=$(md5sum /tmp/firmware.tgz | awk '{print $1}')
echo "$hash = d3f4f87b555defe37510b1de6cd5a6dd"
if [ $hash == 'd3f4f87b555defe37510b1de6cd5a6dd' ]
then
echo "Same!"
mv /etc_ro/tmp/firmware* /etc_ro/tmp/firmware.tgz
tar -zxvf /tmp/firmware.tgz -C /
at_cmd at+zreset
reboot
else
echo "Not same!"
fi
