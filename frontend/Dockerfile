FROM node:16

# Set working directory
WORKDIR /app

# Copy files
COPY package*.json ./
COPY public ./public
COPY src ./src

# Install dependencies
RUN npm install

# Build app
RUN npm run build

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "start"]