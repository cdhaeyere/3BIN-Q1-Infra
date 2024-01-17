FROM node:current-alpine3.16

COPY . /var/www/exoplanets

WORKDIR /var/www/exoplanets

RUN npm install

EXPOSE 3000
CMD [ "node", "app.js" ]
