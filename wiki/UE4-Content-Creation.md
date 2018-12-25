---
layout: page
title: UE4 Content Creation
wikiPageName: UE4-Content-Creation
menu: wiki
---

> This is a WIP wikilaterus page

## Static Meshes

Naming:
* Create meshes using **CamelCase**.
* Export the whole object as **SM_CamelCaseName**.
* Name textures **T_CamelCaseName_SUFFIX**, replacing SUFFIX with:
  * **_D**: Diffuse/Color Map
  * **_N**: Normal Map
  * **_E**: Emissive Map
  * **_M**: Mask Map
  * **_R**: Roughness Map
  * **_MT**: Metallic Map
  * **_S**: Specular
  * **_DP**: Displacement
  * **_AO**: Ambient Occlusion
  * **_H**: Height Map
  * **_F**: Flow Map
* More info: [Naming Convention](https://www.tomlooman.com/ue4-naming-convention/)

Collisions:
* Add a custom *convex* mesh with the name **UCX_MeshName**, where *MeshName* is the exact name of the mesh that will have a collision.
* More info and advanced scenarios: [Static Meshes Pipeline](https://docs.unrealengine.com/en-us/Engine/Content/FBX/StaticMeshes)
