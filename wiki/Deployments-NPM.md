---
layout: page
title: Deployments NPM
wikiPageName: Deployments-NPM
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
