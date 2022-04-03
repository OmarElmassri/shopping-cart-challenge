# Shopping Cart Challenge

Simple application that manages shopping cart and allow users to add, remove and edit products. Users can apply coupones to get discounts on thier order.

# Usage

## Using Docker

first you need to build the docker file

```bash
docker build -t shopping-cart:latest .
```

then run the images (in detached mode)

```bash
docker-compose up -d
```

## Normal Run

first install the dependencies

```bash
yarn install
```

run the app locally

```bash
yarn start
```

you have to make sure you have mongoDB running locally, if not replace the code below in docker-compose.yml

```bash
version: '3'
services:
  mongo:
    container_name: mongoDB
    image: mongo:latest
    restart: unless-stopped
    ports:
      - 27017:27017
```

and then

```bash
docker-compose up -d
```

then you will have mongoDB instance running as docker container.
