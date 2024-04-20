FROM node:18-alpine
WORKDIR /react-docker/
COPY package.json ./
RUN npm install
CMD ["npm", "start"]
EXPOSE 80
