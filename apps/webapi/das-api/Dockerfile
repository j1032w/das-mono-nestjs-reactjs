FROM node:18.16.0-alpine3.17

RUN apk add --no-cache bash
RUN npm i -g @nestjs/cli typescript ts-node


WORKDIR /app

ADD package*.json \
  yarn.* \
  tsconfig* \
  nx.json \
  ./

ADD apps \
  libs \
  ./

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start-api"]
