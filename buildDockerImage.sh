rm -rf sms-ui.tar
docker rmi -f sms-ui:1.0
docker build -f Dockerfile -t sms-ui:1.0 .
docker save -o sms-ui.tar sms-ui:1.0
chmod 755 sms-ui.tar
