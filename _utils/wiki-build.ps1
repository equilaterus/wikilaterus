. $PSScriptRoot/_EquilaterusCLI.ps1

Function Invoke-Script {
    rake wikibuild
}

Start-Cli -Title 'Wikilaterus - Build Wiki' -Filename 'Gemfile'
