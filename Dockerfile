FROM node

COPY package.json .
COPY yarn.lock .

RUN npm install -g yarn && yarn --ignore-engines --production

COPY . .

ENV PORT 8080

CMD ["node", "./dist/server.js"]
