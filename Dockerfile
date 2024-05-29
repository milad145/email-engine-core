# Use an official Node.js runtime as the base image
FROM node:16.20.1

# Set the working directory in the container
WORKDIR /usr/src/email-engine-core

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Rename sample.env to .env
RUN mv sample.env .env

# Expose the port your app runs on
EXPOSE 3000

# Command to run your application
CMD ["node", "app.js"]
