# Usa una imagen base oficial de Node.js
FROM node:16-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install --production

# Copia el resto del código de la aplicación al contenedor
COPY . .

# Expone el puerto en el que corre tu aplicación
EXPOSE 1337

# Comando para correr la aplicación
CMD ["npm", "start"]

