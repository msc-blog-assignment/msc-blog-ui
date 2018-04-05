FROM node

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

ENV PORT 8080

CMD ["node", "./dist/server.js"]
