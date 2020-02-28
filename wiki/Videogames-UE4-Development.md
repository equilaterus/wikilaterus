---
layout: page
title: Videogames UE4 Development
wikiPageName: Videogames-UE4-Development
menu: wiki
---

## UE4 and Git-LFS

We have a project setup [right here on GitHub](https://github.com/equilaterus/ue4-gitlfs-baseproject).

## UE4 AI

[Official docs](https://docs.unrealengine.com/en-US/Engine/ArtificialIntelligence/index.html)

* To enable the debugger set a key binding in *Project Settings > Engine - Gameplay Debbuger > Activation Key*. If you're using a non default US keyboard or a keyboard with international bindings, it is recommended to set a plain key as Asterisk (*) or Minus (-), instead of something like an Apostrophe (') that won't be triggered by a single key-press on a US-International setup.

### Navmeshes

* RecastNavMesh: update some navmesh settings on the scene. Also update-able from the project settings window searching for the option *Agent* (you can add support for multiple types of agents from here).

* Navmesh modifier volume: Adds additional information to the navmesh. Exmample: high cost areas, not allowed areas, etc.

* To disable Auto-updates: Editor Preferences -> Level Editor -> Misc -> Update Navigation Automatically.

* **More info:** [Official docs](https://docs.unrealengine.com/en-US/Resources/ContentExamples/NavMesh/index.html)

### AI Perception

[Official docs](https://docs.unrealengine.com/en-US/Engine/ArtificialIntelligence/AIPerception/index.html)

* Add component **AIPerception**.

* [UE4 AI Perception with C++](https://www.thinkandbuild.it/ue4-ai-perception-system/)

### Behavior trees

[Official docs](https://docs.unrealengine.com/en-US/Engine/ArtificialIntelligence/BehaviorTrees/index.html)

* [Quick Start Guide](https://docs.unrealengine.com/en-US/Engine/ArtificialIntelligence/BehaviorTrees/BehaviorTreeQuickStart/index.html)

* **Nodes**: [Official reference](https://docs.unrealengine.com/en-US/Engine/ArtificialIntelligence/BehaviorTrees/BehaviorTreeNodeReference/index.html)
  * **Composite Nodes**: These are the nodes that define the root of a branch and the base rules for how that branch is executed.
  * **Task Nodes**: These are the leaves of the Behavior Tree, these nodes are the actionable things to do and don't have an output connection.
  * **Decorator Nodes**: Also known as conditionals. These attach to another node and make decisions on whether or not a branch in the tree, or even a single node, can be executed.
  * **Service Nodes**: These attach to Composite nodes, and will execute at their defined frequency as long as their branch is being executed. These are often used to make checks and to update the Blackboard. These take the place of traditional Parallel nodes in other Behavior Tree systems.



### Environment Query System (EQS) 

[Official Docs](https://docs.unrealengine.com/en-US/Engine/ArtificialIntelligence/EQS/index.html)


## How to do it?

* **Convert Mouse Location to World Space**: Interact with 3D objects using players' mouse.
  [See video](https://www.youtube.com/watch?v=b1_efR9hrT4)
* **Reducing Packaged Game Size**: [See here](https://docs.unrealengine.com/en-US/Engine/Performance/ReducingPackageSize/index.html)
