FROM node:12.18.1 as builder

COPY package.json package-lock.json ./

RUN npm i

EXPOSE 8080

COPY . .

CMD ["npm", "run", "serve"]

