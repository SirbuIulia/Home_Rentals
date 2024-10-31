# Frontend Dockerfile

# Use Node.js image from DockerHub
FROM node:20.11 AS build

# Create app directory
WORKDIR /src/app

# Copy package.json and install dependencies
COPY package*.json ./

# Install dependencies with npm and handle potential dependency conflicts
RUN npm install --legacy-peer-deps || \
    npm install --force

# Copy the rest of the frontend code
COPY . .

# Build the React app for production
RUN npm run build

# Use a minimal Nginx web server to serve the production build
FROM nginx:alpine

# Copy the production build from the build stage
COPY --from=build /src/app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
