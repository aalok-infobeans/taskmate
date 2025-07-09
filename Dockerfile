# Root-level Dockerfile (used by backend service)
FROM node:22-alpine

WORKDIR /app

# Copy package.json & install backend deps
COPY package*.json ./
RUN npm install

# Copy the rest
COPY . .

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "backend/bin/www"]
