# set of instructions to create the image (parent layer, ..)
# each line is a different layer

# Initial layer === Parent image to be downloaded from docker hub
# the env our application run in
FROM node:17-alpine

# all commands will be executed under this folder
WORKDIR /demo

# copy package.json so that we can run npm install before anything else
COPY package.json .
COPY package-lock.json .

# mention only commandes in build time (when image is created)
RUN npm install

# COPY source dest
# create image under folder demo (dest by default now is /demo)
COPY . .

# port t orun container on (optional as docker desktop run port mapping)
# only add when running container from cmd
EXPOSE 3000

# commandes the run on run time (when containers start running) 
CMD [ "npm", "run", "start" ]

# to build an image run
# > docker build -t tools-integration-demo .