FROM node:14.16.1-alpine3.13

WORKDIR /usr/application

COPY . .

RUN yarn

EXPOSE 8080

ENTRYPOINT [ "yarn", "start" ]
