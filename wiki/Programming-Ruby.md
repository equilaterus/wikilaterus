---
layout: page
title: Programming Ruby
wikiPageName: Programming-Ruby
menu: wiki
---

## Install Ruby

### Windows Instructions

1. To install Ruby [following this link](https://rubyinstaller.org/downloads/).
2. Select version *2.6.5* or latest **with devkit**.
3. When prompt for installing MSYS use option 1. 

### Linux / MacOS

1. Install Homebrew ([Linux](https://docs.brew.sh/Homebrew-on-Linux) / [MacOS](https://brew.sh/)) 
2. Install Ruby using these commands:

   ```
   brew install rbenv ruby-build

   # Add rbenv to bash so that it loads every time you open a terminal
   echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile
   source ~/.bash_profile

   # Install Ruby
   rbenv install 2.6.5
   rbenv global 2.6.5
   ruby -v

   ```

**More info:** Follow [this link](https://gorails.com/setup/osx/10.14-mojave)
