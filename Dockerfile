FROM node:14
WORKDIR /app

ENV PORT 8080

COPY package*.json .
RUN npm install

COPY . .
RUN npm run build

CMD [ "node", "dist/index.js" ]
EXPOSE $PORT/tcp
