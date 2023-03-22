#stage 1
FROM node:6.9.5-alpine as builder
RUN mkdir -p /home/app
WORKDIR /home/app
COPY . .

RUN npm install
RUN npm install bootstrap jquery tether --save
RUN npm run build --prod

#stage 2
FROM nginx:alpine
EXPOSE 4200
#COPY ./config/nginx-custom.conf /etc/nginx/nginx.conf
#RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /home/app/dist /usr/share/nginx/html
