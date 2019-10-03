---
layout: page
title: Programming Powershell
wikiPageName: Programming-Powershell
menu: wiki
---

## Equilaterus CLI-Tools

We've created a set of scripts to make easier your life: [See GitHub Repo](https://github.com/equilaterus/cli-tools-powershell).

## Command Line Util - Snippet

If you don't want to use our CLI-Tools, here is a snippet to create a basic PowerShell utility:

```powershell
write-host "TITLE"
write-host "DESCRIPTION"
write-host "`n`n========================================"

# ADD YOUR COMMANDS HERE

# END COMMANDS SECTION

write-host "`n`n========================================"
write-host "`nPress any key to quit..."
[void][System.Console]::ReadKey($true)
```
