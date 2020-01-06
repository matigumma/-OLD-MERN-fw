FROM node:13.3.0-alpine

WORKDIR /usr/src/app

#install dependencies
COPY package.json .

RUN npm install --quiet && \
    npm cache clean --force
#RUN npm rebuild node-sass
#isntall nodemon for development mode
#RUN npm install nodemon -g --quiet

COPY . .

EXPOSE 8081

#CMD npm run start:dev
CMD ["node", "src/index.js"]