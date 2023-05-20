FROM node:16-alpine as builder

WORKDIR /usr/app/dev

COPY . . 

RUN yarn install
RUN yarn prod

FROM node:16-alpine

WORKDIR /usr/app/prod

COPY --from=builder usr/app/dev/dist/ .
COPY --from=builder usr/app/dev/package.json . 

RUN yarn install --production

EXPOSE 3333

ENTRYPOINT [ "yarn" ]
CMD ["prod:run"]