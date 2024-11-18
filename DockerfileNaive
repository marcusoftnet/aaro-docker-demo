FROM ubuntu:latest
RUN apt-get update
RUN apt-get install -y nodejs npm
RUN update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10
WORKDIR /usr/src/app
COPY . .
RUN npm ci --production
EXPOSE 3000
CMD ["node", "index.js"]