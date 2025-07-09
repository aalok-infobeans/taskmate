# Use official Node.js image
FROM node:22.17.0

# Set working directory inside container
WORKDIR /app

# Copy only package.json and lock file first (layer caching)
COPY frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend code
COPY frontend/ .

# Build the frontend
RUN npm run build

# Expose frontend port
EXPOSE 4000

# Optional: Start frontend server if needed (like using Vite preview or serve)
# CMD ["npm", "run", "preview"]
