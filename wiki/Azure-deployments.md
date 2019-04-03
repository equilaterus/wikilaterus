---
layout: page
title: Azure deployments
wikiPageName: Azure-deployments
menu: wiki
---

## json-server

1. Create an **App Service**. Wait till it's implemented, then go to the *Deployment Center* and configure your Repo with the **Kudu** path.

    ![Azure Deployment Center](https://equilaterus.github.io/wikilaterus/assets/img/azure/deployment-center.png)

2. Add *"engines": {"node": "^10.14.1"}* to the package.json (to see all available Node versions check *Deployment Center* logs after finishing all this steps).

3. Create a file named *server.js* with the following content:

    ```javascript
    const jsonServer = require('json-server')
    const server = jsonServer.create()
    const router = jsonServer.router('db.json')
    const middlewares = jsonServer.defaults()

    server.use(middlewares)
    server.use(router)
    server.listen(process.env.PORT, () => {
      console.log('JSON Server is running!')
    })
    ```

4. Your CI build is ready just Commit and Push your changes.
