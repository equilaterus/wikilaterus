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

* [UPROPERTY](https://docs.unrealengine.com/en-US/Programming/UnrealArchitecture/Reference/Properties/index.html)
* [UFUNCTION](https://docs.unrealengine.com/en-US/Programming/UnrealArchitecture/Reference/Functions/index.html)
  * BLUEPRINT PURE / CALLABLE
  * BLUEPRINT IMPLEMENTABLE EVENT
  * BLUEPRINT NATIVE EVENT
* [DELEGATES](https://docs.unrealengine.com/en-US/Programming/UnrealArchitecture/Delegates/index.html)

### Common includes

|Class                | #include                   |
|---------------------|----------------------------|
|UWorld               |Engine/World.h              |
|AActor               |GameFramework/Actor.h       |
|UActorComponent      |Components/ActorComponent.h |
|USceneComponent      |Components/SceneComponent.h |
|UGameplayStatics     |Engine/World.h              |
|UKismetSystemLibrary |Kismet/GameplayStatics.h    |
|UKismetMathLibrary*  | Kismet/KismetMathLibrary.h |
|FMath                |Math/UnrealMathUtility.h    |
|UPhysicsHandleComponent | PhysicsEngine/PhysicsHandleComponent.h |

* (*) KismetMath is usually a wrapper to FMath. Review implementation and try to call directly FMath.

### Mapping types

|Blueprint            | C++                        |
|---------------------|----------------------------|
|String               |FString                     |
|Name                 |FName                       |
|Vector               |FVector                     |
|Rotator              |FRotator                    |
|Transform            |FTransform                  |
|Object               |UObject*                    |
|Actor                |AActor*                     |
|ActorComponent       |UActorComponent*            |
|Float                |float                       |
|-                    |double                      |
|Integer              |int32                       |
|-                    |uint32                      |
|Integer64            |int64                       |
|-                    |uint64                      |
|Bool                 |bool                        |

### Properties Visibility

* Blueprint:
  * BlueprintReadonly
  * BlueprintReadWrite
* Defaults and instance:
  * VisibleAnywhere
  * EditAnywhere
* Only defaults:
  * VisibleDefaultsOnly
  * EditDefaultsOnly
* Only instance:
  * VisibleInstanceOnly
  * EditInstanceOnly
  

### Tips

* You can create C++ files either manually or using the UE4 editor, first case requires to regenerate project files (left click on .uproject Generate Visual Studio Project Files).
* After syncing files with Git, it's a good idea to regenerate project files.
* If Hot reloading doesn't seem to take your changes, close editor and Rebuild project.
* How to found BP nodes? Put your mouse over the node, see target and try to lookup for the file and lastly search for some keyword on the function name. For example:

  ![UE4 find Blueprint nodes on C++](https://equilaterus.github.io/wikilaterus/assets/img/ue4/search-blueprint-code-cpp.png)

### Useful tools

* Recommended IDE: [Rider for UE4](https://www.jetbrains.com/es-es/lp/rider-unreal/).
* Recommended Git App: [Github Desktop](https://desktop.github.com/).
* Recommended free Repos with Git LFS: [Azure Repos](https://azure.microsoft.com/en-us/services/devops/repos/)

To clone your Azure repos with Github Desktop follow [this guide](https://github.com/desktop/desktop/blob/development/docs/integrations/azure-devops.md).

### Struct template

Sample UE4 C++ Struct (note F prefix):

```cpp
// MyStruct.h
#pragma once
#include "MyStruct.generated.h"

USTRUCT(BlueprintType)
struct FMyStruct
{
	GENERATED_BODY()
	
	UPROPERTY(BlueprintReadOnly)
        AActor* Character;	

	FMyStruct();
};

// MyStruct.cpp
FMyStruct::FMyStruct()
{
	Character = nullptr;
}

```

### Enum template

Sample UE4 C++ enum.

```cpp
#pragma once
#include "Enums.generated.h"

UENUM(BlueprintType)
enum class EDirection : uint8
{
    Left UMETA(DisplayName = "Left"),
    Right UMETA(DisplayName = "Right"),
    Front UMETA(DisplayName = "Front"),
    Back UMETA(DisplayName = "Back")
};

// You can add more enums here...
```

### Interfaces

Sample interface:

```cpp
#pragma once

#include "CoreMinimal.h"
#include "UObject/Interface.h"
#include "MyInterface.generated.h"

// This class does not need to be modified.
UINTERFACE()
class UMyInterface : public UInterface
{
	GENERATED_BODY()
};

/**
 * 
 */
class YOURPROJECT_API IMyInterface
{
	GENERATED_BODY()

public:
	UFUNCTION(BlueprintNativeEvent)
	void YourMethod();
};

```

To use it:

```cpp
// Class that implements the interface
UCLASS()
class YOURPROJECT_API AMyCharacter : public AActor, public IMyInterface
{
    GENERATED_BODY()
public:
    virtual void YourMethod_Implementation() override;
}


// To use the interface from another function
if (AnActor->Implements<UMyInterface>())
{
    IOHActionEntity::Execute_YourMethod(AnActor);
}
````

More info [here](https://docs.unrealengine.com/en-US/ProgrammingAndScripting/GameplayArchitecture/Interfaces/index.html).


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

*NOTE:* Dynamic delegates can be serialized, their functions can be found by name, and they are slower than regular delegates. [More info](https://docs.unrealengine.com/en-US/ProgrammingAndScripting/ProgrammingWithCPP/UnrealArchitecture/Delegates/Dynamic/index.html)


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


### Linetracing samples

```cpp
// Single by channel
FHitResult HitResult;
if (GetWorld()->LineTraceSingleByChannel(HitResult, Start, End, ECC_Visibility))
{
    // Handle hit!
}

// Linetrace for ECC_PhysicsBody or ECC_WorldDynamic
FHitResult OutHit;
if(GetWorld()->LineTraceSingleByObjectType(
   OutHit, Start, End, FCollisionObjectQueryParams(ECC_TO_BITFIELD(ECollisionChannel::ECC_PhysicsBody) | ECC_TO_BITFIELD(ECollisionChannel::ECC_WorldDynamic)))) {
    // Handle hit!
}
```

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

### Anim notifiers C++

```cpp
 UCLASS()
 class YOURPROJECT_API UAnimNotify_Name : public UAnimNotify
 {
     GENERATED_BODY()
        
 protected:

     virtual void Notify(USkeletalMeshComponent* MeshComp, UAnimSequenceBase* Animation) override;        
 };
    
 void UAnimNotify_Name::Notify(USkeletalMeshComponent* MeshComp, UAnimSequenceBase* Animation)
 {
     Super::Notify(MeshComp, Animation);

     // YOUR CODE GOES HERE
 }
```

[More info](https://dawnarc.com/2016/10/ue4animation-notifications-animnotify/).

### Anim instance C++

* UE4 Animation system:

```cpp
UCLASS()
class YOURPROJECT_API UCharacterAnimInstance : public UAnimInstance
{
	GENERATED_BODY()

public:
	UCharacterAnimInstance();

	UPROPERTY(EditDefaultsOnly)
	float MinWalkSpeed;
}
```

* Pixel2d:

```cpp
UCLASS()
class YOURPROJECT_API UCharacterAnimInstance : public UPixel2DAnimInstance
{
	GENERATED_BODY()

public:
	UCharacterAnimInstance();

	UPROPERTY(EditDefaultsOnly)
	float MinWalkSpeed;
}
```



## UE4 Plugins

* [Sample project](https://github.com/ue4plugins/TextAsset)
* [Crash course](https://learn.unrealengine.com/course/2436528)


## UE4 Audio

### Reverb

To activate the reverb, add the following line to your project **/Config/DefaultEngine.ini**:

```
[Audio] 
UseAudioMixer=true
```

Create a **Sound > Sound Attenuation** asset and configure it on your **Cue** as the attenuation preset. Add an **Audio Volume** to your level, set it big enough to cover your playable area and set the following properties:

* Settings -> Apply Reverb: True.
* Settings -> Reverb effect: select one from the dropdown.

* For more info check this video [Reverb Tutorial](https://www.youtube.com/watch?v=ZFjD5xtoMSg). Note that if you added the configuration to your project .ini, you won't need to execute additional commands on the UE4 console.

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
* Don't forget to add the NavigationSystem and AIModule modules in your {project}.Build.cs. [More info](https://docs.unrealengine.com/en-US/Programming/Modules/Gameplay/index.html): it would be suffice to add "NavigationSystem" and "AIModule" strings to the PublicDependencyModuleNames.AddRange(...) parameters.


## How to do it?

* **Convert Mouse Location to World Space**: Interact with 3D objects using players' mouse.
  [See video](https://www.youtube.com/watch?v=b1_efR9hrT4)
* **Reducing Packaged Game Size**: [See here](https://docs.unrealengine.com/en-US/Engine/Performance/ReducingPackageSize/index.html)
 
