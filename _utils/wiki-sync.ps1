. $PSScriptRoot/_EquilaterusCLI.ps1

Function Invoke-Script {
    rake wiki
}

Start-Cli -Title 'Wikilaterus - Sync Wiki' -Filename 'Gemfile'
