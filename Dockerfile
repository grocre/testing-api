FROM node:16-alpine

WORKDIR /usr/app/dev

COPY . . 

RUN yarn install
RUN yarn prod

FROM stage:0

WORKDIR /usr/app/prod

COPY dist/ .
COPY package.json . 

RUN yarn install --production

EXPOSE 3333

ENTRYPOINT [ "yarn" ]
CMD ["prod:run"]