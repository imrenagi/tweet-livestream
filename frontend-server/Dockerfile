FROM node:alpine

MAINTAINER Imre Nagi <imre.nagi2812@gmail.com>

RUN npm install nodemon -g

ADD . /src

WORKDIR /src
ADD package.json /src/package.json
RUN npm install

ADD nodemon.json /src/nodemon.json

EXPOSE 3000

CMD npm start
