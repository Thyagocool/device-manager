FROM node:18-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY . /usr/src/app/
# RUN npm install

# Bundle app source
COPY . /usr/src/app

CMD [ "npm", "start" ]