. $PSScriptRoot/_EquilaterusCLI.ps1

Function Invoke-Script {
    bundle exec jekyll serve
}

Start-Cli -Title 'Wikilaterus - Run' -Filename 'Gemfile'
