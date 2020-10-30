FROM nginx:alpine

ADD default.conf /etc/nginx/conf.d/default.conf
ADD ./frontend /usr/share/nginx/html/