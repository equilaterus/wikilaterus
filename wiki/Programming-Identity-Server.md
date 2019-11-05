---
layout: page
title: Programming Identity Server
wikiPageName: Programming-Identity-Server
menu: wiki
---

## Quickstarts for an SPA

Here is a summary of guides to look when implementing an SPA. For MVC [it is easier](http://docs.identityserver.io/en/latest/quickstarts/2_interactive_aspnetcore.html).

* [Adding a JavaScript client](http://docs.identityserver.io/en/aspnetcore2/quickstarts/6_javascript_client.html). Note  *AllowedGrantTypes = GrantTypes.Code* and *RequirePkce = true* under Identity configuration, [more info here](http://docs.identityserver.io/en/latest/topics/grant_types.html#interactive-clients)
* [Identity Server + EF Core persistance](http://docs.identityserver.io/en/aspnetcore2/quickstarts/7_entity_framework.html)
* [Identity Server + Identity to store users](http://docs.identityserver.io/en/aspnetcore2/quickstarts/8_aspnet_identity.html)
* [Scaffold Identity in ASP.NET Core projects](https://docs.microsoft.com/en-us/aspnet/core/security/authentication/scaffold-identity?view=aspnetcore-3.0&tabs=visual-studio)
