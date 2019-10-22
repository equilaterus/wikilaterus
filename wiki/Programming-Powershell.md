---
layout: page
title: Programming Powershell
wikiPageName: Programming-Powershell
menu: wiki
---

## Installation

For additional info please check [PowerShell GitHub Repo](https://github.com/PowerShell/PowerShell).

### Windows

Probably you have it already installed. Just open a PowerShell Prompt (not CMD). Anyway, it is recommended to download and install [PowerShell Core](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-windows?view=powershell-6#installing-the-msi-package) so you're using the latest version.

### Linux 

Follow [these instructions](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-6) and start it typing **pwsh** or **sudo pwsh** on bash (use the second one to start PowerShell with Root privileges).

### Mac

Follow [these instructions](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-6) and start it typing **pwsh** or **sudo pwsh** on bash (use the second one to start PowerShell with Root privileges).


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
