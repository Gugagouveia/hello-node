cd /home/ubuntu/hello-node

git pull origin main

docker stop $(docker ps -q)
docker build -t hello-node .
docker run -d -p 80:80 hello-node
