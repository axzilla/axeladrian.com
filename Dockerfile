FROM node:lts as runtime
WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

CMD node ./dist/server/entry.mjs
