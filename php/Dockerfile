FROM php:8.6.0beta1-cli-alpine3.24
WORKDIR /app
COPY . /app
RUN php -S localhost:8080 -t /app
CMD ["php", "-S", "localhost:8080", "-t", "/app"]