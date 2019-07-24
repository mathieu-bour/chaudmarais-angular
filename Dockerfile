FROM node:11-alpine

WORKDIR /var/www
COPY dist/* /var/www/

CMD node /var/www/server.js
