# Shopping Cart Challenge

Simple application that manages shopping cart and allow users to add, remove and edit products. Users can apply coupones to get discounts on thier order.

# Application Structure

Monorepo managed by Lerna and yarn workspaces containing app client (ReactJS), app server (NodeJS) and shared package containing common interfaces used by the application.

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

# Seeding

In order to use coupons you have to seed some coupones into the database. There is a JS file will handle the seeding follow these steps to seed the coupons.

from the root directory of the project

```bash
yarn install

cd packages/shopping-cart-server

yarn coupon:seed
```

Done you will have two coupons to use:

- ABC123P - will make 20% discount
- DEF456V - will make 150 EGP discount

# Thinking Process

- Applied the approach of monorepo to easly manage the app and its dependencies
- Build two pages products and shopping cart to make it look as a real-world e-commerce application
- Seeding coupons to the database to use them

# Leftouts

If there was more time

- Detailed documentation of the codebase
- Apply Swagger on the server
- Apply class-validator package on the server
- Extract more common used properties to shared package

# Useful Links

[Lerna](https://lerna.js.org/)
