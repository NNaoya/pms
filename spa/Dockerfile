FROM node:14.8.0-alpine as build-stage

WORKDIR /usr/src/app
COPY package*.json ./
COPY yarn.lock ./
COPY . .
RUN npm install
RUN npm run build

FROM fitiavana07/nginx-react
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD nginx -g 'daemon off;'
