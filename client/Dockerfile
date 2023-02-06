# Use a Node.js base image
FROM node:16 as builder

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./
COPY tsconfig.json ./
COPY tsconfig.node.json ./
COPY index.html ./
COPY ./ ./
COPY deploy/ ./
RUN npm i 
RUN npm run build
RUN ls
FROM nginx:1.16.0-alpine
 
COPY --from=builder /app/dist /var/www/html
RUN ls /var/www/html
RUN rm /etc/nginx/conf.d/default.conf

COPY deploy/nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon on;"]

