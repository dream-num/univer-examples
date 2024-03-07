FROM nginx:latest

COPY  ./local /usr/share/nginx/html/univer-examples

RUN sed -i 's/listen\s*80;/listen 3010;/g' /etc/nginx/conf.d/default.conf

EXPOSE 3010

CMD ["nginx", "-g", "daemon off;"]
