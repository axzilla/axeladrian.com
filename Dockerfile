# Base image
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Copy dependency files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code and build
COPY . .
RUN npm run build

# Production image
FROM node:18-alpine

WORKDIR /app

# Copy only built files and necessary production dependencies
COPY --from=build /app/dist /app/dist
COPY --from=build /app/package*.json ./

RUN npm ci --only=production

# Expose port
EXPOSE 4321

# Start the server
CMD ["node", "./dist/server/entry.mjs"]