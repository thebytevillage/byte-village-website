# Stage 1: build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build -- --base-href /

# Stage 2: serve
FROM nginx:1.27-alpine
COPY --from=builder /app/dist/byte-village/browser/en /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
