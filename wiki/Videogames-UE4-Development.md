---
layout: page
title: Videogames UE4 Development
wikiPageName: Videogames-UE4-Development
menu: wiki
---

## UE4 and Git-LFS

We have a project setup [right here on GitHub](https://github.com/equilaterus-gamestudios/ue4-gitlfs-baseproject).

## UE4 C++

Crash course: [Converting Blueprints to C++](https://www.unrealengine.com/en-US/onlinelearning-courses/converting-blueprints-to-c).

Documentation: [Gameplay Architecture](https://docs.unrealengine.com/en-US/Programming/UnrealArchitecture/Reference/index.html).

* UPROPERTY
* UFUNCTION
  * BLUEPRINT PURE / CALLABLE
  * BLUEPRINT IMPLEMENTABLE EVENT
  * BLUEPRINT NATIVE EVENT
* EVENTS
* DELEGATES
  * Dynamic - Not Dynamic
  * Singlecast - Multicast

### Delegate samples

```cpp
/* DECLARATION */
DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FCompletedQuestSignature, int32, index)

UPROPERTY(BlueprintAssignable, BlueprintCallable)
FCompletedQuestSignature CompletedQuest;

/* BROADCAST */
CompletedQuest.Broadcast(parameter);

/* SUBSCRIBE */
UFUNCTION() // Required for dynamic
void FunctionHandler(int32 index)

CompletedQuest.AddDynamic(this, &Class::FunctionHandler);
CompletedQuest.Add // For non dynamic version

```

### Vector samples

Forward unit vector from a given rotation.

```cpp
GetComponentRotation().Vector()
```

Calculate vector of size *MaxDistance* starting at actor/component location on the same rotation as the actor/component.

```cpp
FVector UClass::GetMaxGrabLocation() const
{
        // GetComponentLocation or GetLocation depending if you're on an Actor or Component
        // same with Rotation
	return GetComponentLocation() + GetComponentRotation().Vector() * MaxDistance;
}
```


### Raytracing samples

**TODO**

### Sweep samples

```cpp
// Params with ignore self
FCollisionQueryParams TraceParams(FName("SphereTrace"), false, GetOwner());
FHitResult OutHit;

// Sweep for ECC_PhysicsBody or ECC_WorldDynamic
if(GetWorld()->SweepSingleByObjectType(
	OutHit, GetComponentLocation(), GetMaxGrabLocation(), FQuat::Identity,
        FCollisionObjectQueryParams(ECC_TO_BITFIELD(ECollisionChannel::ECC_PhysicsBody) | ECC_TO_BITFIELD(ECollisionChannel::ECC_WorldDynamic)), 
        FCollisionShape::MakeSphere(GrabRadius), TraceParams)) {
        // Handle hit!
}
```

## UE4 Animation

Documentation: [Animation](https://docs.unrealengine.com/en-US/Engine/Animation/index.html)

* [Basics Course](https://www.youtube.com/watch?v=-slbsR_WWAE&list=PLL0cLF8gjBpqpCGt9ayn4Ip1p6kvgXYi2)
* [UE4 Livestream](https://www.youtube.com/watch?v=YVC-DL9Ibf0)
  * Animation Blueprints
  * Locomotion 
  * Blendspaces
  * Anim montages
  * Caching poses
  * Layering
  * Modifying bones
  * Look at
* Other contents:
  * [Subanim](https://docs.unrealengine.com/en-US/Engine/Animation/AnimHowTo/SubAnimInstance/index.html)
  * [Anim offset](https://docs.unrealengine.com/en-US/Engine/Animation/AnimHowTo/AimOffset/index.html)
  * [Physical anims](https://www.youtube.com/watch?v=N1tDjbFXeOo)
  * [Paragon](https://www.youtube.com/watch?v=YlKA22Hzerk)
* [How to's](https://docs.unrealengine.com/en-US/Engine/Animation/AnimHowTo/index.html)

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

### UE4 AI movement C++

See this tutorial: https://www.vikram.codes/blog/ai/01-basic-navigation
Improved and updated code to seek for a Random Reachable Location in the Navmesh: 

* [MovementAIController.h](https://gist.github.com/dacanizares/6f47164e3d86d9fd6d19bd129d888695)
* [MovementAIController.cpp](https://gist.github.com/dacanizares/5db9c59281a9c9049bf819acce7e29bc)
* Don't forget to add the NavigationSystem module in your {project}.Build.cs. [More info](https://docs.unrealengine.com/en-US/Programming/Modules/Gameplay/index.html): it would be suffice to add "NavigationSystem" string to the PublicDependencyModuleNames.AddRange(...) parameters.


## How to do it?

* **Convert Mouse Location to World Space**: Interact with 3D objects using players' mouse.
  [See video](https://www.youtube.com/watch?v=b1_efR9hrT4)
* **Reducing Packaged Game Size**: [See here](https://docs.unrealengine.com/en-US/Engine/Performance/ReducingPackageSize/index.html)
 
