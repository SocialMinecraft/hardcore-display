FROM node:18-alpine

WORKDIR /app
RUN npm install
COPY . .
RUN rm -rf node_modules
RUN npm install
RUN npm build

EXPOSE 3000
CMD ["npm", "start"]