# set of instructions to create the image (parent layer, ..)
# each line is a different layer

# Initial layer === Parent image to be downloaded from docker hub
# the env our application run in
FROM node:17-alpine

# all commands will be executed under this folder
WORKDIR /demo

# COPY source dest
# create image under folder demo (dest by default now is /demo)
COPY . .

# mention only commandes in build time (when image is created)
RUN npm install

# port t orun container on (optional as docker desktop run port mapping)
# only add when running container from cmd
EXPOSE 4000

# commandes the run on run time (when containers start running) 
CMD [ "npm", "run", "start" ]
