#this is a test run for python

FROM alpine:3.18

RUN apk add curl

WORKDIR /downloads

RUN adduser -D lonewolf

USER lonewolf


#THIS IS TO RUN DIFFERENT TERMINAL COMMANDS

FROM mcr.microsoft.com/powershell

RUN mkdir -p /demo

SHELL [ "pwsh" , "-command" ]

RUN "hello world" | Out-File -Path /demo/hello.txt



#THIS IS TO WORK WITH ENV VARIABLES
FROM python

WORKDIR /code

ENV app_host='0.0.0.0'
 
ENV PORT=5000 \ 
    MONGO_URI='mongodb://localhost:27017/mydatabase' \
    GEMINI_API_KEY='mykey' 
   

#THIS IS TO COPY AND ADD FILES
FROM python

COPY app.py /code/

ADD "https://www.google.com" /code/



#using EXPOSE to expose the port
FROM python

EXPOSE 5000






# ALL THE STEPS TAKEN TO BUILD
# - docker build -t my-python-app .
# - docker run my-python-app cat /etc/os-release                    ----> this gives the release name what we are running
# - docker history myimage                                          ----> this gives the history of the image
# - docker run myimage pwd                                          ----> this gives the present working directory
# - docker inspect myimage --format='{{json .Config.ExposedPorts}}' ----> this gives the exposed ports