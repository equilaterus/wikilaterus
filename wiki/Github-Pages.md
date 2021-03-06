---
layout: page
title: Github Pages
wikiPageName: Github-Pages
menu: wiki
---

## Bootstrap integration

We have a project to easily integrate any Bootstrap theme with your GitHub Pages website. Check [bootlaterus.gh-pages](https://github.com/equilaterus/bootlaterus.gh-pages).

## Testing a site locally

* [Install Ruby](https://equilaterus.github.io/wikilaterus/wiki/Programming-Ruby.html#install-ruby)

* Run the following commands to install the site:

  ```
  gem install bundler
  bundle install
  ```

* Run this command to start the server:

  ```
  bundle exec jekyll serve
  ```

## Deploying a folder using Travis CI

You can deploy any kind of web content to a GitHub Page using the following steps:

1. Install Ruby!
2. Create a Travis CI account and link your repo.
3. Using an account with permissions to write in the repo create a GitHub Access Token https://github.com/settings/tokens
4. Encrypt your token using locally on your machine the following commands:

    ```
    gem install travis
    travis encrypt GH_TOKEN="github-token" --add
    ```

    For more info you can check the section *Permission to push* on [this article](https://iamstarkov.com/deploy-gh-pages-from-travis/)


5. Create a **.travis.yml** file on your repo and customize it:

    * Travis CI - GitHub Pages docs: https://docs.travis-ci.com/user/deployment/pages/
    * Example to build using grunt and then deploy to GitHub Pages when a push is made to the master branch: [open example](https://github.com/equilaterus/bootlaterus/blob/dev/.travis.yml)


## Updating Github Pages gem

Execute the following commands:

```
bundle update github-pages
bundle install
```

## FAQ

* My repo says that I have a vulnerability: 
  * *Update nokogiri to version >= 1.8.5* [CVE-2018-14404](https://nvd.nist.gov/vuln/detail/CVE-2018-14404?fbclid=IwAR0FPQ8JNTYA0G0I0kYIyafCk0eh4uX4GMb-kVDz7bVKL1rEL8IcAi4r6u8) 
    * **FIX**: Update github.

* What is the language that GitHub Pages uses?
  * It uses a template language called [Liquid](https://shopify.github.io/liquid/) written in Ruby.
