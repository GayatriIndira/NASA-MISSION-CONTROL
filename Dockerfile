FROM node:lts-alpine

# FROM cgayatri123/nasa-mission-control

WORKDIR /app

COPY package*.json ./

COPY nasa-front-end/package*.json nasa-front-end/
RUN npm run install-nasa-front-end --only=production

COPY server/package*.json server/ 
RUN npm run install-server --only=production

COPY nasa-front-end/ nasa-front-end/
RUN npm run build --prefix nasa-front-end

COPY server/ server/

USER node

CMD [ "npm", "start", "--prefix", "server" ]

EXPOSE 5000 