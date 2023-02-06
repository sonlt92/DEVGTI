FROM node:16

WORKDIR /usr

COPY package.json ./

COPY tsconfig.json ./
COPY tsconfig.node.json ./
COPY src ./src
COPY index.html ./
RUN ls -a

RUN npm install

RUN npm run build

## this is stage two , where the app actually runs

FROM node:16

WORKDIR /usr

COPY package.json ./

RUN npm install --only=production

COPY --from=0 /usr/dist .

RUN npm install pm2 -g

EXPOSE 80

CMD ["pm2-runtime","app.js"]
