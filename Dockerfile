FROM node:14-alpine AS node_builder

WORKDIR /usr/src/app

RUN npm i lerna -g --loglevel notice

COPY package.json .
RUN npm install --loglevel notice

COPY packages/shopping-cart-client ./packages/shopping-cart-client
COPY packages/shopping-cart-server ./packages/shopping-cart-server
COPY packages/shopping-cart-shared ./packages/shopping-cart-shared

COPY lerna.json .
RUN lerna bootstrap

CMD npm start