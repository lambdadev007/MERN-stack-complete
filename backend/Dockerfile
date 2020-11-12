FROM node:12.18.4 AS base

RUN mkdir /app

WORKDIR /install

COPY package*.json ./

RUN npm ci

ENV NODE_PATH=/install/node_modules

WORKDIR /app

COPY . .

RUN ln -s /install/node_modules node_modules

RUN npm install -g migrate-mongo

EXPOSE 3000

# dev build
FROM base as dev

RUN npm install -g nodemon

CMD npm run dev

# production build
FROM base AS prod

# RUN npm install -g migrate-mongo && migrate-mongo up

# RUN npm run build

EXPOSE 3000

CMD npm run prod
