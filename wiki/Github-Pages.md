---
layout: page
title: Github Pages
wikiPageName: Github-Pages
menu: wiki
---

## What is the language that GitHub Pages uses?

It uses a template language called [Liquid](https://shopify.github.io/liquid/) written in Ruby.

## Deploying a folder using Travis CI

You can deploy any kind of web content to a GitHub Page using the following steps:

1. Create a Travis CI account and link your repo.
2. Using an account with permissions to write in the repo create a GitHub Access Token https://github.com/settings/tokens
3. Encrypt your token using locally on your machine the following commands:

    ```
    gem install travis
    travis encrypt GH_TOKEN="github-token" --add
    ```

    In order to use **gem** you'll need to install [Ruby](https://www.ruby-lang.org/en/downloads/). For more info you can check the section *Permission to push* on [this article](https://iamstarkov.com/deploy-gh-pages-from-travis/)


4. Create a **.travis.yml** file on your repo and customize it:

    * Travis CI - GitHub Pages docs: https://docs.travis-ci.com/user/deployment/pages/
    * Example to build using grunt and then deploy to GitHub Pages when a push is made to the master branch: https://github.com/equilaterus/bootlaterus/blob/dev/.travis.yml


## Updating Github Pages gem

Execute the following commands:

```
bundle update github-pages
bundle install
```

## FAQ

* My repo says that I have a vulnerability: 
  * *Update nokogiri to version >= 1.8.5* [CVE-2018-14404](https://nvd.nist.gov/vuln/detail/CVE-2018-14404?fbclid=IwAR0FPQ8JNTYA0G0I0kYIyafCk0eh4uX4GMb-kVDz7bVKL1rEL8IcAi4r6u8) 
    * **FIX**: Update github-pages gem.
