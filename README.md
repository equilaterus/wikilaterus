# Wikilaterus

[![Build Status](https://travis-ci.org/equilaterus/wikilaterus.svg?branch=master)](https://travis-ci.org/equilaterus/wikilaterus) 

Equilaterus' Wiki based on [Bootlaterus](https://equilaterus.github.io/bootlaterus/).

Published at: https://equilaterus.github.io/wikilaterus/

## Instructions to run locally

* [Install Ruby](https://equilaterus.github.io/wikilaterus/wiki/Programming-Ruby.html#install-ruby)

* Run the [Powershell](https://equilaterus.github.io/wikilaterus/wiki/Programming-Powershell.html#installation) files on the *util* folder:    

    * **install-site**: run once to install all requirements to run wikilaterus.

    * **run-site**: run to start the server.

    * **wiki-sync**: to sync the [wiki](https://github.com/equilaterus/wikilaterus/wiki) with the [githubpages](https://equilaterus.github.io/wikilaterus/) that is deployed through this repo.

    * **wiki-add** and **wiki-build**: they're as example to create your own repo synced with a wiki. Run them once just follow the instructions and you'll get a configuration like the one on this repo. 

## Wiki to Github Page Plugin

Thanks to djacquel for this: https://github.com/djacquel/WikiToJekyll

## FAQ

* **Where can I store my images?** Add images on the assets folder they'll be published to the Github page automatically.

* **What are the steps to update a wiki?** Always modify your articles directly Github (For example here in our case: https://github.com/equilaterus/wikilaterus/wiki) and then execute *win-wiki-sync.bat*. In case of a desync (that the commands cannot generate the local files), check the next point. 

* **wiki got desynced**: this happens because you updated your files locally instead of doing the changes in the Github wiki. You'll need to locate the latest commit that worked correctly and then execute (**PROCEED WITH CAUTION, CREATE A COPY OF YOUR REPO**):

  ```
  git reset --hard <commit-id>
  ```

  And then, to sync with your Github repo (**THIS STEP CAN DAMAGE YOUR ONLINE REPO, PROCEED WITH CAUTION**):

  ```
  git push -f <remote-name> <branch-name>
  ```

  *remote-name* is usually **origin** and *branch name* is usually **master**.

  **Note**: these steps are a workarround when there is no way of making work *wiki sync*, use them as a last resource option.

## License

The content of this project itself is licensed under the Creative Commons Attribution 4.0 International ([CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)) license, and the underlying source code used to format and display that content is licensed under the MIT license.
