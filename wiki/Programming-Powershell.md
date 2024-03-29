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

#### FAQ

* **How to run a PowerShell script from explorer?**:  Left click > Run with Powershell.

* **I can't see Run With Powershell option**: Right click on the **.ps1** file that you're trying to run and select *open with...*, select Notepad and be sure to enable the option *always open ps1 files with this application*.

* **How to run a PowerShell with a BAT file?**: Create a file with the same name as your ps1 file but change its extension to .bat. Add one of the following contents to the file:

  * Without admin rights:
    ```
    @ECHO OFF
    PowerShell.exe -NoProfile -ExecutionPolicy Bypass -Command "& '%~dpn0.ps1'"
    PAUSE
    ```

  * With admin rights: 
    ```
    @ECHO OFF
    PowerShell.exe -NoProfile -Command "& {Start-Process PowerShell.exe -ArgumentList '-NoProfile -ExecutionPolicy Bypass -File ""%~dpn0.ps1""' -Verb RunAs}"
    PAUSE
    ```

### Linux 

See section **Linux Dev Environment** on Wikilaterus.


### Mac

Follow [these instructions](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-6) and start it typing **pwsh** or **sudo pwsh** on bash.


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
