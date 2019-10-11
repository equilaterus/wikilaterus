---
layout: page
title: Deployments Docker
wikiPageName: Deployments-Docker
menu: wiki
---

## Equilaterus base images

[Official Repo](https://github.com/equilaterus/base-docker-images)

* [Asp Core + SQL Server](https://github.com/equilaterus/base-docker-images/tree/master/aspcore-sqlserver) with hot-reloading.
* [ReactJS with Router](https://github.com/equilaterus/base-docker-images/tree/master/reactjs-router) with hot-reloading, dev and production images.
* [ReactJS](https://github.com/equilaterus/base-docker-images/tree/master/reactjs) with hot-reloading, dev and production images.

## Commonly Used Commands

See PowerShell utils [here](https://github.com/equilaterus/base-docker-images/tree/master/utils).

### Clean all

```
docker-compose down
docker system df
docker system prune -a
docker volume ls
docker volume prune
```

### Explore a container

```
docker ps
$container = Read-Host "Please enter container name:"
docker exec -it $container sh
```

### Run/stop a container with docker compose

```
docker-compose -f docker-compose.yml up -d --build
docker-compose stop
```

### Used space

```
docker system df
```

## Debug

To debug the image you can add the following line and [connect into it](https://github.com/equilaterus/base-docker-images/blob/master/utils/explore.ps1) to see its internal state.

```
ENTRYPOINT ["sh", "-c", "sleep 2073600"]
```
