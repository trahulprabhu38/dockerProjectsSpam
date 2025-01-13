FROM ubuntu:latest

RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y nginx

EXPOSE 8002

CMD ["nginx", "-g", "daemon off;"]
