FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 5173

CMD ["npm", "run", "dev"]


# - docker build -t my-mern-app .
# - docker run -p 3000:3000 my-mern-app
# - docker run -d -p 3000:3000 my-mern-app
# - docker ps
# - docker stop my-mern-app
# - docker rm my-mern-app
# - docker rmi my-mern-app
# - docker run -d -p 3000:3000 --name my-mern-app my-mern-app
# - docker exec -it my-mern-app bash
