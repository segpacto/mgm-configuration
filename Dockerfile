FROM node:12

LABEL authors="Ivan Martinez Pupo <segpacto@yahoo.es>"

USER node

RUN mkdir /home/node/app
WORKDIR /home/node/app
COPY . .

ARG NPM_TOKEN
ARG NODE_ENV=production

RUN npm install --no-audit --no-optional

ENTRYPOINT ["npm","run"]
CMD ["dev"]
