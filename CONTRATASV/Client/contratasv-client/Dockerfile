# Etapa de build
FROM node:18-alpine AS build
WORKDIR /app

# Instalar dependencias
COPY package*.json ./
RUN npm ci

# Copiar el código
COPY . .

# Permitir inyectar VITE_BASE_URL al build
ARG VITE_BASE_URL
# Crear .env con la variable para que Vite la tome al build
RUN echo "VITE_BASE_URL=${VITE_BASE_URL}" > .env

# Construir la app (production)
RUN npm run build

# Etapa de producción: nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
