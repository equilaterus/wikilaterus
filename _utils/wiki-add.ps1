. $PSScriptRoot/_EquilaterusCLI.ps1

Function Invoke-Script {
    rake wikisub
}

Start-Cli -Title 'Wikilaterus - Add Wiki' -Filename 'Gemfile'
