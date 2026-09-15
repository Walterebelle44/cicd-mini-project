FROM node:18.16.0-alpine3.24
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY . /app
CMD ["node", "index.js"]