#stage 1
FROM node:latest as node
WORKDIR /home/app
COPY . .
RUN npm install
RUN npm run build --prod

#stage 2
FROM nginx:alpine
COPY --from=node /home/app/dist/sms /usr/share/nginx/html
