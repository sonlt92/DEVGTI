FROM node:16
WORKDIR /server/
COPY tsconfig.json ./
COPY ["package.json", "package-lock.json*", "./"]
EXPOSE 4000
RUN npm install
RUN npm i cors
RUN npm install -g ts-node typescript '@types/node'
RUN ls
RUN pwd
COPY . .
CMD  ls
CMD npm run build
CMD node ./src/index.js

