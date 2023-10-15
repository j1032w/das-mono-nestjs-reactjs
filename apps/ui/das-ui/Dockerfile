FROM node:18.16.0-alpine3.17 AS build

RUN apk add --no-cache bash



WORKDIR /app

ADD package*.json \
  yarn.* \
  tsconfig* \
  nx.json \
  ./

RUN yarn install

ADD apps ./apps
ADD libs ./libs



RUN yarn build-ui



# --------------------------------------------------------------------------------------
# Use a second image that only contains the compiled application


FROM nginx:1.25.2-alpine

RUN chown -R nginx:nginx /var/cache/nginx /var/run /var/log/nginx
RUN chmod g+wr /var/cache/nginx /var/run /var/log/nginx

#USER nginx

COPY --from=build /app/dist/apps/ui/das-ui /usr/share/nginx/html


EXPOSE 80


CMD ["nginx", "-g", "daemon off;"]


