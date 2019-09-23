---
layout: page
title: Programming Docker
wikiPageName: Programming-Docker
menu: wiki
---

## Equilaterus base images

* https://github.com/equilaterus/base-docker-images

## Commands

[Equilaterus Utils](https://github.com/equilaterus/base-docker-images/tree/master/utils)

## Debug

To debug the image you can add the following line and [connect into it](https://github.com/equilaterus/base-docker-images/blob/master/utils/explore.ps1) to see its internal state.

```
ENTRYPOINT ["sh", "-c", "sleep 2073600"]
```
