# pull official base image
FROM node:14.0.0-alpine

# set working directory
WORKDIR /server

# add `/app/node_modules/.bin` to $PATH
ENV PATH /server/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]