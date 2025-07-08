# Use official Node 22 image
FROM node:22-alpine

# Create app directory
WORKDIR /app

# Copy only package files first (for caching layers)
COPY package*.json ./

# Install dependencies from root
RUN npm install

# Copy everything else (includes backend/, frontend/, etc.)
COPY . .

# Set env and expose port
ENV NODE_ENV=production
EXPOSE 3000

# Start the app from backend/bin/www
CMD ["node", "backend/bin/www"]
