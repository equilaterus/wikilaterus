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
* Set VSCode/Codium as default editor. [more info](https://askubuntu.com/questions/648105/how-do-i-setup-microsoft-visual-studio-code-as-a-default-editor#:~:text=Debian%20alternatives%20system&text=Some%20need%20you%20to%20set,to%20the%20nautilus%20context%20menu.)

  ```
  xdg-mime default codium.desktop text/plain

  # If you're using code instead of codium
  xdg-mime default code.desktop text/plain 
  ```

### GitHub Desktop

* [Download](https://github.com/shiftkey/desktop/releases/tag/release-2.9.9-linux2). 
  * Install .deb on Debian / Ubuntu (on Debian right click run with Discover)
  * Use app-image on arch.

* If you're working with Windows users:

   ```
   git config --global core.autocrlf input
   ```

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

If your project has NPM tasks with msbuild (if NPM INSTALL fails during compilation), run *Rider* using a terminal with NPM access. For example: left click on Rider search for Application > Command run. Copy and run it:
```
/home/equilaterus/.local/share/JetBrains/Toolbox/apps/Rider/ch-0/213.6775.4/bin/rider.sh
```

To avoid repeating the previous step, create a file **RunRider.sh** at **/home** with the following contents:

```
#!/bin/bash
echo 'Running...'
# Copy your Rider command....
sh /home/equilaterus/.local/share/JetBrains/Toolbox/apps/Rider/ch-0/213.6775.4/bin/rider.sh 
```

Next time, open a console and type:

```
sh RunRider.sh
```

### Dotnet core

* [Installation Debian](https://docs.microsoft.com/en-us/dotnet/core/install/linux-debian)
* [Instalation Arch](https://wiki.archlinux.org/title/.NET#Installation)
* Snaps can have problems when running web-apps.

If you have multiple versions of dotnet core, create a file **global.json** in the same location as this readme with the following contents:

```json
{
    "sdk": {
        "version": "3.1.417" 
    }  
}
```

Replace the version with a 3.1.x installed on your machine. To see your SDKs:

```
dotnet --list-sdks
```

If you have trouble with [dotnet ef](https://docs.microsoft.com/en-us/ef/core/cli/dotnet) after installing it, use the following command:

```
export PATH="$PATH:$HOME/.dotnet/tools/"
```

To fix certificate error (not thrusting) run:

```
dotnet dev-certs https
```



### Powershell

Install dotnet sdk and type:

```
dotnet tool install --global PowerShell
```

> After that use **pwsh** to start powershell.

For dotnet core 3.1:

```
dotnet tool install --global PowerShell --version 7.0.9
```

For other versions check: [nuget package](https://www.nuget.org/packages/PowerShell/7.0.9)

### SQL Server with Docker

[Guide](https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?view=sql-server-ver15&pivots=cs1-bash)

Summary:

```
# Download SQL Server image
sudo docker pull mcr.microsoft.com/mssql/server:2019-latest


# Create and run sql1 container
sudo docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=testdb123*" \
   -p 1433:1433 --name sql1 --hostname sql1 \
   -d mcr.microsoft.com/mssql/server:2019-latest

# Delete container with DB
docker rm /sql1 -f
   
# Start container
docker start /sql1
```

Connection string:

```csharp
string _connString = "Server=localhost,1433;Database=Master;User Id=SA;Password=testdb123*";
```


