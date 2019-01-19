---
layout: page
title: Github Pages
wikiPageName: Github-Pages
menu: wiki
---

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
