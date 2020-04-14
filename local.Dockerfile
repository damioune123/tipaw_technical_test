FROM node:10-alpine
WORKDIR /usr/src/app

COPY . .
RUN cd gui && npm i && npm run build:prod
RUN cd api && npm i
ENV PORT 80
EXPOSE ${PORT}
CMD cd api && npm run prod
