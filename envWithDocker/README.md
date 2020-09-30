# How to use environment with docker

* Method-01
> By using -e flag when run you container 
  - E.g. docker run -d -p 4003:8090 -e PORT=8090 -e MONGO_CONNECTION_URL="monogdb://localhost:test" node-web-app

* Method -02 
> Make a .list line in your source code and point that file a env file when run your docker image
   -  E.g. docker run -d -p 4003:8090 --env-file ./docker_env.list node-web-app 



   # step to run this application
   1. docker build -t node-web-app . // create an image here node-web-app is image name
   2. docker run -d -p 4100:8090 node-web-app  // run above created image to create docker container and run the container
   3. docker logs f366d9b509acf5 // optional:- by using this we can checks the log