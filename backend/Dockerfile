# Build stage
FROM node:22-alpine AS builder

WORKDIR /app


COPY package*.json ./


COPY backend/package*.json ./backend/


RUN npm install


COPY . .


RUN npm run build:backend


FROM node:22-alpine AS runner

WORKDIR /app


COPY package*.json ./


COPY backend/package*.json ./backend/


COPY --from=builder /app/node_modules ./node_modules


COPY --from=builder /app/backend/dist ./backend/dist


ENV NODE_PATH=/app/node_modules


WORKDIR /app/backend

EXPOSE 5000


CMD ["node", "dist/server.js"]
