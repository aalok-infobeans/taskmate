# backend/Dockerfile

FROM node:22-alpine

WORKDIR /app

# Copy only package.json from root directory
COPY ../package*.json ./

# Install dependencies at /app (which matches root)
RUN npm install

# Copy full repo into container
COPY .. .

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "backend/bin/www"]
