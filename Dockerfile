FROM nginx:alpine

RUN mkdir -p /var/www/html

COPY ./source /var/www/html
COPY ./conf/az.conf /etc/nginx/conf.d/default.conf

RUN chown -R nginx:nginx /var/www/html

WORKDIR /var/www/html

HEALTHCHECK --interval=5s --timeout=5s CMD curl -f http://127.0.0.1 || exit 1
