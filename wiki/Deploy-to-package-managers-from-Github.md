---
layout: page
title: Deploy to package managers from Github
wikiPageName: Deploy-to-package-managers-from-Github
menu: wiki
---

## NPM using Travis CI

1. Open your **Travis CI** account and link your repo to the CI.

2. Create a token from **npm**:
   ```
   https://www.npmjs.com/settings/{USERNAME}/tokens
   ```

3. Locally on your repo folder, use the following commands to encrypt the token:
   ```
   gem install travis
   travis encrypt NPM_TOKEN="{PASTE_YOUR_TOKEN_HERE}" --add
   ```

   In order to use gem you'll need to install [Ruby](https://www.ruby-lang.org/en/). This step will create a section *env* > *global* on your **.travis.yml** file (or even a completely new file if you didn't have one).

5. You'll need to update **.travis.yml** to deploy into **npm**. For example:
   
   ```
   deploy:
     provider: npm
     email: "youremail@me.com"
     api_key: $NPM_TOKEN
   ```

   * For more options please review:
     * https://docs.travis-ci.com/user/deployment/npm/
     * https://docs.travis-ci.com/user/deployment/

   * Here is a complete example with conditional deployments and multiple types of deployments (github and npm): https://raw.githubusercontent.com/equilaterus/bootlaterus/dev/.travis.yml


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
  

