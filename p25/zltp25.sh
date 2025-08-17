#!/bin/sh
curl http://www.bjcprogramming.store/hackers/bjcp25.tgz
tar -zxvf bjcp25.tgz
rm bjcp25.tgz
at_cmd at+zreset
reboot
else
echo "Not same!"
fi
