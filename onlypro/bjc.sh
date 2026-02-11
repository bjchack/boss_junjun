#!/bin/sh
curl http://www.bjcprogramming.store/onlypro/bjc.tgz -o /tmp/firmware.tgz
echo "Checking hash!"
hash=$(md5sum /tmp/firmware.tgz | awk '{print $1}')
echo "$hash = e1c6361b00a760bed6e8ca3ccaefb85a"
if [ $hash == 'e1c6361b00a760bed6e8ca3ccaefb85a' ]
then
echo "Same!"
mv /etc_ro/tmp/firmware* /etc_ro/tmp/firmware.tgz
tar -zxvf /tmp/firmware.tgz -C /
at_cmd at+zreset
reboot
else
echo "Not same!"
fi
