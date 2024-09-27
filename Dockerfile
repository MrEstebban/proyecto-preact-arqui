# Usar una imagen base de Node.js
FROM node:22-alpine

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos de dependencias al contenedor
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto del código del proyecto al contenedor
COPY . .

# Ejecutar el comando para generar los archivos de producción
RUN npm run build

# Instalar un servidor web estático (por ejemplo, serve)
RUN npm install -g serve

# Exponer el puerto en el que la aplicación correrá
EXPOSE 5173

# Definir el comando para iniciar el servidor web
CMD ["serve", "-s", "dist", "-l", "5173"]