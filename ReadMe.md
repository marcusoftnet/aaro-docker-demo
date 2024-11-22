# Demo

1. Demo app
    1. Run `npm i` in directory
    1. Run `node index.js` in directory
    1. Go to <http://localhost:3000> to demo app in Container

## Docker demos

1. Naive Node - start from Ubuntu
    1. Rename `.dockerignore` to `dockerignore` - demo contents
    1. Run `docker buildx build -t naive-node .`
    1. Run `docker images` to show the image and its size
    1. Run the application with `docker run -d -p 3000:3000 naive-node`
    1. Run `docker ps` to show the running container
    1. Show running container in Docker Desktop
    1. Go to <http://localhost:3000> to demo app in Container
    1. Kill the running docker process with `docker stop <pid>`

1. Better Node - much slimmer image
    1. Rename `.dockerignore` to `dockerignore`
    1. Run `docker buildx build -t better-node -f DockerfileBetter .` - will use the Dockerfile DockerfileBetter
    1. Run `docker images` to show the image and its size
    1. Run the application with `docker run -d -p 3000:3000 better-node`
    1. Run `docker ps` to show the running container
    1. Show running container in Docker Desktop
    1. Go to <http://localhost:3000> to demo app in Container
    1. Shut down container with `docker ps && docker stop id`

## Docker compose demos

1. Simple docker compose
    1. Run `docker compose up -d` to bring the `docker compose.yml` file up
    1. Show the container running with `docker ps`
    Go to <http://localhost:3001> to demo app in Container
    1. Run `docker compose down` and `docker ps` to show that the application can be shut down

1. Advanced docker compose
    1. Run `docker compose -f docker compose-advanced.yml up -d` to bring up the advanced environment
    1. Run `docker images` and `docker ps`
    1. Show the container running with `docker ps`
    Go to <http://localhost:3001> to demo app in Container
    1. Bring the entire application down with `docker compose -f docker compose-advanced.yml down`
