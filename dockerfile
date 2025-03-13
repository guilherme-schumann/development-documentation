FROM node:20-alpine

WORKDIR /app

RUN npm install -g @docusaurus/init

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]