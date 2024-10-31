# Backend Dockerfile

# Use Node.js image from DockerHub
FROM node:20.11

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the backend code
COPY . .

# Expose the port that your application runs on
EXPOSE 3001

# Start the server
CMD ["npm", "start"]
