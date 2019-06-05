---
layout: page
title: Deployments Azure json server
wikiPageName: Deployments-Azure-json-server
menu: wiki
---

> [VSTS vs Kudu deployments](https://github.com/projectkudu/kudu/wiki/VSTS-vs-Kudu-deployments)

## Kudu

**General steps**: Create an **App Service**. Wait till it's implemented, then go to the *Deployment Center* and configure your Repo with the **Kudu** path.

![Azure Deployment Center](https://equilaterus.github.io/wikilaterus/assets/img/azure/deployment-center.png)

**Kudu/SCM console portal**: To access *Kudu/SCM console portal* navigate to http://MYAPPSERVICE.scm.azurewebsites.net. For more information check [this link](https://blogs.msdn.microsoft.com/benjaminperkins/2017/11/08/how-to-access-kudu-scm-for-an-azure-app-service-environment-ase/)

### json-server

1. Add *"engines": {"node": "^10.14.1"}* to the package.json (to see all available Node versions check *Deployment Center* logs after finishing all these steps). [See sample JSON file](https://gist.github.com/dacanizares/806d98764f599be83e5f995410248ad5)

2. Create a file named *server.js* on the project's root folder with the following content:

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

3. Your CI build is ready just Commit and Push your changes.
