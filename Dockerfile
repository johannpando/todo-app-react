# Usa una imagen base de Node.js para construir la aplicación
FROM node:18-alpine as build

WORKDIR /app

# Instala las dependencias y construye la aplicación
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Usa Nginx para servir la aplicación
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expone el puerto 80 para Nginx
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]