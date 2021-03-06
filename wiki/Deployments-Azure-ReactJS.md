---
layout: page
title: Deployments Azure ReactJS
wikiPageName: Deployments-Azure-ReactJS
menu: wiki
---

## Before start

[VSTS vs Kudu deployments](https://github.com/projectkudu/kudu/wiki/VSTS-vs-Kudu-deployments)

## Kudu

**General steps**: Create an **App Service**. Wait till it's implemented, then go to the *Deployment Center* and configure your Repo with the **Kudu** path.

![Azure Deployment Center](https://equilaterus.github.io/wikilaterus/assets/img/azure/deployment-center.png)

**Kudu/SCM console portal**: To access *Kudu/SCM console portal* navigate to http://MYAPPSERVICE.scm.azurewebsites.net. For more information check [this link](https://blogs.msdn.microsoft.com/benjaminperkins/2017/11/08/how-to-access-kudu-scm-for-an-azure-app-service-environment-ase/)

### ReactJS

> Azure deployment compatible with create-react-app.

1. Add *"engines": {"node": "^10.14.1"}* to the package.json (to see all available Node versions check *Deployment Center* logs after finishing all these steps).

2. Create a file on the *project's root folder* called .deployment with the following content:

   ```javascript
   [config]
   command = azure/deploy.cmd
   ```

3. Create a folder called *azure* and create a filed called *deploy.cmd* with [this content](https://gist.github.com/dacanizares/030a642323b34ac82ea2f20a34f8cd33).

4. Also, create a file called *web.config* with [this content](https://gist.github.com/dacanizares/615a22aa0648ea1451dbfe2d1a3e3084).

5. Your CI build is ready just Commit and Push your changes.
