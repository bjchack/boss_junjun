‎#!/bin/sh
‎curl http://www.bjcprogramming.store/onlypro/bjc.tgz -o /tmp/firmware.tgz
‎echo "Checking hash!"
‎hash=$(md5sum /tmp/firmware.tgz | awk '{print $1}')
‎echo "$hash = 25323ced1906ed43667b859070ee00a664ac4d09"
‎if [ $hash == '25323ced1906ed43667b859070ee00a664ac4d09' ]
‎then
‎echo "Same!"
‎mv /etc_ro/tmp/firmware* /etc_ro/tmp/firmware.tgz
‎tar -zxvf /tmp/firmware.tgz -C /
‎at_cmd at+zreset
‎reboot
‎else
‎echo "Not same!"
‎fi
