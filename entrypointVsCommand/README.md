# How to use entrypoint and  CMD command 

* CMD 
> CMD command param1 or CMD command ["command", "param1"]
  - E.g. CMD sleep 5 or CMD ["sleep", "5"]  // here 5 is hard coded
  - To make it's dynamic ENTRYPOINT will comes into picture
  - Eg. docker run ubuntu-sleeper sleep 10 :-> here sleep 10 will replace or overrite entirly value of CMD 


* Entrypoint 
> ENTRYPOINT ["command"]
   -  E.g. ENTRYPOINT ["sleep"]
   - When run this command :- docker run ubuntu-sleeper 10 then 10 will be append with ENTRYPOINT command like this :-
        docker run ubuntu-sleeper sleep 10 

* To defined default value, we have to defined both values  
> ENTRYPOINT ["command"]
> CMD ["operand"]
   -  E.g. 
          ENTRYPOINT ["sleep"]
          CMD ["5"] 
     
   - When run this command :- docker run ubuntu-sleeper then "sleeper" and "5" will appened like this:- 
        docker run ubuntu-sleeper sleep 5 
   - Can define entrypoint on run time and it will overrite defined ENTRYPOINT in Dockerfile:- 
     Eg. docker run --entrypoint sleep2.0 ubuntu-sleeper 10 // here 10 will go to CMD 
 


   # step to run this application
   1. docker build -t ubuntu-sleeper . // create an image here ubuntu-sleeper is image name
   2. docker run ubuntu-sleeper   // run above created image to create docker container and run the container
   3. docker logs f366d9b509acf5 // optional:- by using this we can checks the log