# Use an official Node.js runtime as a parent image
FROM node:alpine

# Set the working directory in the container
WORKDIR ./app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Bundle your source code inside the Docker image
COPY . .

# Define the command to run your application
CMD ["node", "index.js"]