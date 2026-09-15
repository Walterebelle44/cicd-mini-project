FROM php:8.6.0beta1-cli-alpine3.24
WORKDIR /app
COPY package.json /app/
RUN composer install
COPY . /app
RUN php artisan key:generate
CMD ["php", "artisan", "serve"]