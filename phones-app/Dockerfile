FROM node:16-slim

WORKDIR /home/app

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn build

CMD ["yarn", "start"]
#CMD ["node", "index.js"]


#FROM node:16-slim
#
#WORKDIR /home/app
#
#COPY package.json ./
#
#RUN yarn install
#
#COPY --from=builder /home/app/.next .
#
#CMD ["yarn", "start"]
#
