FROM node:16-slim as builder

WORKDIR /home/api

COPY package.json .

RUN yarn install

COPY . .

RUN yarn build


FROM node:16-slim

WORKDIR /home/api

COPY package.json .

RUN yarn install

COPY --from=builder /home/api/dist/ .


