# Contributing Guide

## Development

```shell
pnpm i
pnpm dev
```

## Deployment

Build docker image locally

```shell
sudo make build_image
```

Run docker container locally
```shell
sudo docker run --rm --name univer-examples -p 3010:3010 univer-examples:dev
```

Test at http://localhost:3010/univer-examples/

