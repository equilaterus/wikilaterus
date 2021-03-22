. $PSScriptRoot/_EquilaterusCLI.ps1

Function Invoke-Script {
    bundle update github-pages
    bundle install
}

Start-Cli -Title 'Wikilaterus - Run' -Filename 'Gemfile'
