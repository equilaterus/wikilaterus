---
layout: page
title: Deployments Nuget.org
wikiPageName: Deployments-Nuget.org
menu: wiki
---

## Nuget.org using AppVeyor

1. Create your nuget package: 

   * NET Standard package:
     * You can manually [Add package metadata to the project file](https://docs.microsoft.com/en-us/nuget/quickstart/create-and-publish-a-package-using-the-dotnet-cli#add-package-metadata-to-the-project-file)
     * Or do it using [Visual Studio UI](https://docs.microsoft.com/en-us/nuget/quickstart/create-and-publish-a-package-using-visual-studio#configure-package-properties)
   * Other types of projects: [See guide](https://docs.microsoft.com/en-us/nuget/create-packages/creating-a-package)

2. Open your **AppVeyor** account and link your repo to the CI.

3. Go to the *Configuration* > *Settings* > *General* and configure your **Project Version** and enable **.NET Core .csproj patching**.

4. Go to *Build* option (left menu) and enable **Package NuGet projects**. In case of issues compiling, under before build script you can add a *CMD*: *nuget restore*.

5. Before continuing, you'll need to create an **API Key** from [nuget.org](https://nuget.org). Login into your account and click on your user profile (top-left menu), open **API Keys** and Create a new one.


6. Back to AppVeyor, go to  *Configuration* > *Settings* > *Deployment* and configure it as shown here:

   * Deployment provider: NuGet.

   * API Key: PASTE_YOUR_API_KEY

   * Deploy from branch: If needed select an specific branch to deploy.

7. Go to *Export YAML* (Left menu) and copy that file into your repo root folder. Customize it if needed. For example, we provide versioning directly on the file: [Vortex/appveyor.yml](https://github.com/equilaterus/Vortex/blob/dev/appveyor.yml) 
  

