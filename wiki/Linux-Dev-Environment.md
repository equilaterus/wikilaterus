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

### Git

* [Install instructions](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)


### Terminal

1. [Install zsh](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH#how-to-install-zsh-on-many-platforms)
2. Run command: 
   ```
   zsh
   ```
3. [Install and run Powerlevel10k](https://github.com/romkatv/powerlevel10k#manual)
4. Set it as your default shell:
   ```
   usermod --shell /usr/bin/zsh root
   usermod --shell /usr/bin/zsh YOUR_USERNAME
   ```

To re-run the setup:
```
p9k_configure
```

### VS Code (VSCodium)

* [Install VSCodium](https://vscodium.com/#install)
* Set VSCode/Codium as default editor. [more info](https://askubuntu.com/questions/648105/how-do-i-setup-microsoft-visual-studio-code-as-a-default-editor#:~:text=Debian%20alternatives%20system&text=Some%20need%20you%20to%20set,to%20the%20nautilus%20context%20menu.)

  ```
  xdg-mime default codium.desktop text/plain

  # If you're using code instead of codium
  xdg-mime default code.desktop text/plain 
  ```

### GitHub Desktop

* [Repository](https://github.com/shiftkey/desktop).
  * Install with **dnf** on Fedora.
  * Install with apt or download *.deb* on Debian / Ubuntu (on KDE right click run with Discover)
  * Use app-image on *arch*.

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

* [Installation Fedora](https://docs.docker.com/engine/install/fedora/)
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

To avoid repeating the previous step, create a file **rider.sh** at **/home** with the following content:

```
#!/bin/bash
echo 'Running Rider...'
# Copy your Rider command....
sh /home/equilaterus/.local/share/JetBrains/Toolbox/apps/Rider/ch-0/213.6775.4/bin/rider.sh 
```

Next time, open a console and type:

```
sh rider.sh
```

### Dotnet core

* [Installation Fedora](https://docs.microsoft.com/en-us/dotnet/core/install/linux-fedora#install-the-sdk)
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

To fix certificates error run:

```
dotnet dev-certs https
```

You'll still have to configure trust certificates or access your page as unsecure resource from your web browser. As it is a dev env, you can safely access it as an unsafe site.

**IMPORTANT!**: Before upgrading your system disable source package repo: **packages-microsoft-com-prod** (ADDED WHEN INSTALLING POWERSHELL), otherwise you may need to uninstall all dotnet (*sudo dnf remove 'dotnet*'*) and reinstall it again (after removing the repo). To remove it you can go to **Discover > Settings** and disable the repo.

Error **"The configured user limit (128) on the number of inotify instances has been reached."**, increase the instances with the following command:

```
echo fs.inotify.max_user_instances=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

### Powershell

* NOT RECOMMENDED as the MSFT repo can cause problem when you update dotnet!
* [Install Fedora](https://docs.microsoft.com/en-us/powershell/scripting/install/install-fedora?view=powershell-7.2)
* [Install Debian](https://docs.microsoft.com/en-us/powershell/scripting/install/install-debian?view=powershell-7.2)
* [Install Arch](https://ephos.github.io/posts/2018-9-17-Pwsh-ArchLinux#arch-linux) *untested*.

If you prefer, you can install it as a dotnet tool:

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

# Start container
docker start /sql1

# Delete container with DB
docker rm /sql1 -f
```

Connection string:

```csharp
string _connString = "Server=localhost,1433;Database=Master;User Id=SA;Password=testdb123*";
```

### Temperature and other sensors

Run the following steps and execute *xsensors*:

```
sudo dnf install lm_sensors
sudo sensors-detect
# Configure
sensors

# Install GUI app
sudo dnf install xsensors
```

### Other software

Dropbox:

```
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
flatpak install flathub com.dropbox.Client
```

Steam:

```
sudo dnf install https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
sudo dnf install steam
```

Telegram:

```
sudo flatpak install flathub org.telegram.desktop
```

Flatpacks permissions:

```
flatpak install flathub com.github.tchx84.Flatseal
```


## Share files with Samba

> This section is a WIP. Tested only on Fedora KDE.

1. Installation:

   ```bash
   sudo dnf install samba
   hostnamectl status
   # Set the hostname that you prefer 
   sudo hostnamectl set-hostname 'YOU-HOST-NAME'

   # Add a password to your user when using samba
   # used to auth external users to open shared resources
   # USERNAME is your Linux username
   sudo smbpasswd -a USERNAME

   # List users
   sudo pdbedit -L -v

   # Firewall
   sudo firewall-cmd --permanent --add-service={samba,samba-client} --zone=home
   sudo firewall-cmd --reload
   # Verify Samba is included in your active firewall:
   sudo firewall-cmd --list-services

   #Enable and start smb and nmb services:
   sudo systemctl enable smb.service
   sudo systemctl start smb.service

   #Verify smb service:
   sudo systemctl status smb.service

   
   # IF YOU CANT ACCESS YOUR SMB RESOURCES
   # Open SELinux to see warnings, common fixes:

   # If you want samba to export all ReadOnly
   setsebool -P samba_export_all_ro 1
   # If you want samba  to enable home dirs
   setsebool -P samba_enable_home_dirs 1
   # If you want samba to export all ReadWrite
   setsebool -P samba_export_all_rw 1
   ```

2. Sample configuration:

```
[global]
  workgroup = workgroup
  usershare allow guests = Yes
  usershare owner only = No
  guest ok = No
  force user = USERNAME ONLY IF YOU HAVE PROBLEMS WITH SOME PATHS
               https://forums.linuxmint.com/viewtopic.php?t=201079

[memes]
  comment = memes
  path = /path/to/memes
  read only = Yes
  public = Yes
  browseable = Yes
```

Dont forget to start the service: **sudo systemctl start smb.service**


### Configure *Usershares* 

OPTIONAL - To use Dolphin to share elements directly. Not working sometimes:

   ```
   sudo dnf install kdenetwork-filesharing

   mkdir /var/lib/samba/usershares
   groupadd -r sambashare
   chown root:sambashare /var/lib/samba/usershares  
   chmod 1770 /var/lib/samba/usershares
   ```

   Set the following parameters in the */etc/samba/smb.conf* configuration file:

   ```
   /etc/samba/smb.conf
   [global]
    usershare path = /var/lib/samba/usershares
    usershare max shares = 100
    usershare allow guests = yes
    usershare owner only = yes
   ```

   Add the user to the sambashare group. Replace USERNAME with the name of your linux user:
  
   ```
   gpasswd sambashare -a USERNAME

   # Reload samba config!
   smbcontrol all reload-config
   ```

Now, you can go to Dolphin (KDE file explorer) and left click on a **folder > Properties > Share** and configure the settings to share your folder on the network.

If you want to share paths inside your home directory you must make it accessible for the group others (Everyone).


Links:
https://fedoramagazine.org/fedora-32-simple-local-file-sharing-with-samba/
https://wiki.archlinux.org/title/Samba (See advanced configuration)
