---
layout: page
title: Linux Dev Environment
wikiPageName: Linux-Dev-Environment
menu: wiki
---

These instructions may apply to any distribution.

## Sudo errors

If you're getting errors when trying to use **sudo**, you should add your user to *sudoers*. Open terminal, run these commands and restart your machine:

```
su -
usermod -aG sudo username
```

## Software

### VS Code (VSCodium)

* [Install VSCodium](https://vscodium.com/#install)

### GitHub Desktop

* [Download](https://github.com/shiftkey/desktop/releases/tag/release-2.9.9-linux2). 
  * Install .deb on Debian / Ubuntu (on Debian right click run with Discover)
  * Use app-image on arch.

### NodeJS and NPM

Install [NVM](https://github.com/nvm-sh/nvm).

```
nvm install 14
nvm use 14 (OPTIONAL STEP)
```

### Docker

* [Installation Debian](https://docs.docker.com/engine/install/debian/)
* [Installation Arch](https://linuxhint.com/arch-linux-docker-tutorial/)

Add your user to docker group and restart:

```
su -
usermod -aG docker username
```

### Rider

Install with **tool-box**: 
  * [Download](https://www.jetbrains.com/toolbox-app/download/download-thanks.html?platform=linux)
  * [Installation Guide](https://www.jetbrains.com/help/rider/Installation_guide.html#toolbox)

If your project has NPM tasks with msbuild, run *Rider* using a terminal with NPM access. For example: left click on Rider search for Application > Command run. Copy and run it:
```
/home/equilaterus/.local/share/JetBrains/Toolbox/apps/Rider/ch-0/213.6775.4/bin/rider.sh
```

### Dotnet core

* [Installation Debian](https://docs.microsoft.com/en-us/dotnet/core/install/linux-debian)
* [Instalation Arch](https://wiki.archlinux.org/title/.NET#Installation)
* Snaps can have problems when running web-apps.

To fix certificate error (not thrusting) run:

```
dotnet dev-certs https
```

### Powershell

Install dotnet sdk and type:

```
dotnet tool install --global PowerShell
```

>> After that use **pwsh** to start powershell.

For dotnet core 3.1:

```
dotnet tool install --global PowerShell --version 7.0.9
```

For other versions check: [nuget package](https://www.nuget.org/packages/PowerShell/7.0.9)

### SQL Server with Docker

[Guide](https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?view=sql-server-ver15&pivots=cs1-bash)

Summary:

```
sudo docker pull mcr.microsoft.com/mssql/server:2019-latest

sudo docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=testdb123*" \
   -p 1433:1433 --name sql1 --hostname sql1 \
   -d mcr.microsoft.com/mssql/server:2019-latest
```

Connection string:

```csharp
string _connString = "Server=localhost,1433;Database=Master;User Id=SA;Password=testdb123*";
```


