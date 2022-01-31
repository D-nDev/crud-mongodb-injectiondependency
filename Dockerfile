FROM node:16

WORKDIR /usr/app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

EXPOSE 4000
CMD [ "yarn", "build:docker" ]
