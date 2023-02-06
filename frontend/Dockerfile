#FROM nginxinc/nginx-unprivileged:stable
#COPY build /usr/share/nginx/html

FROM nginx
# RUN echo 'Running update'
# RUN apt-get update
# RUN apt-get install nginx -y
COPY build /var/www/html/
COPY build /usr/share/nginx/html/
# EXPOSE 80
# CMD [“nginx”,”-g”,”daemon off;”]