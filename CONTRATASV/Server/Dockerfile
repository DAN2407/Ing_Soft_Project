# Imagen base
FROM node:18-alpine

# Directorio de trabajo
WORKDIR /usr/src/app

# Copiar package y instalar dependencias (producción)
COPY package*.json ./
RUN npm ci --omit=dev

# Copiar el resto del código
COPY . .

# Exponer puerto (según .env PORT=3000)
EXPOSE 3000

# Comando por defecto
CMD ["node", "app.js"]
