---
layout: page
title: Blender for Videogames
wikiPageName: Blender-for-Videogames
menu: wiki
---

> This is a WIP wikilaterus page

## Settings

* Interface
    * View manipulation > **Auto depth**: turn on for a better navigation between closer and far objects.

    * Activate Layer managment add on

    * Better performance: System > anisotropic filtering > VBOS

* Viewport
    * [ N ] menu:
        * GSL > **Backface culling** to show only visible faces (not as if always they were are double-sided).
        * **Texture solid** to display texture models in solid mode.

## Hotkeys

|Shorcut             |Action                                             
| ---------:         |---------        
|T                   | Toolshef
|N                   | Viewport menu
|Tab                 | Edit / Object mode            
|Home                | View all objects                                  
|.                   | Focus selected object                             
|shift + F           | Pilot view mode                                   
|ctrl + alt + Q      | 4 view screen (top, front, right, perspective)    
|shift + S           | Snap 3D cursor / Selection
|Z                   | Display mode solid                                
|alt + Z             | Display mode textured                           
|O                   | Proportional editing mode              
|ctrl + A            | Apply
|alt + S             | Undo scale
|shift + R           | Repeat last command
|F6                  | Active tool menu

## Object mode

Transformations work mostly as edit mode. **Always apply rotation and scale** [ ctrl + A ] before animating or exporting.

## Edit mode

> Press **tab to enter edit mode**

### General

* **Transforming**
    * Reset position [ alt + G ]
    * Move [ G ]
        * Vertex slide [ G + G]
    * Scale [ S ]
    * Rotate [ R ]
    * Options
        * Select transformation axis [ X, Y or Z ]
        * Lock transformation axis [ shift + (X, Y or Z)]
    * **Snapping**
        * Toogle snap [ shift + tab ]
        * Snap on the fly [ ctrl ]

* **Selecting**
    * **Misc**
        * Mesh select mode [ ctrl + tab]
        * All [ A + A ]
        * Marker border select [ B ]
        * Marker border un-select [ B + Middle mouse ]
        * Loop [ alt + right click ]
        * Ring loop [ ctrl + alt + right click ]
        * Select similar [ shift + G ]
    * **Loose parts**
        * Current selection [ ctrl + L ]
        * Current pointer [ L ]

### Modeling

* **Common Tools**
    * Extrude [ E ]
    * Bevel [ ctrl + B ]
    * Inset [ I ]
    * Mirror [ ctrl + M]
    * Separate [ P ]
    * Join [ ctrl + J ]
    * Duplicate [ shift + D ]

* **Cutting - Adding extra elements**
    * **General**
        * Subdivide [ W > subdivide]
        * Add ring loop [ ctrl + R ]
        * Add face [ F ]
        * Add faces and edges between vertex [ J ]        
        * Generate center vertex and faces [ alt + P ]
    * **Knife** [ K ]
        * Center [ ctrl ]  
        * Angle constraint [ C ]
        * Cut through [ Z ]

* **Removing extra elements**
    * **General**
        * Remove doubles  [ W > remove doubles]
        * Remove or dissolve [ X ]
        * Merge [ alt + m ]

* **Curves**
    * *Edit mode*
        * Set handle type to automatic before modeling [ v ]        
    * *Object mode*
        * Convert to mesh [ alt + c ]
    
### Additional

* **Shading**
    * Face options [ ctrl + f ]
        * Shade Smooth: smooth selected faces
    * Edge options [ ctrl + e ]
        * Mark sharp: "removes" smooth of an edge

> **Workflows!** Here are some common workflows for game creation assets.

## Smoothing

* Activate auto smooth at 180º.

  ![Autosmooth](https://equilaterus.github.io/wikilaterus/assets/img/blender/auto-smooth.PNG)

* Select faces and use **Shade Smooth** using [ ctrl + f ]

* Mark sharp required edges using option at [ ctrl + e] 

## High-poly (non-destructive)

* Select all and remove **marked as sharp** founded on [ ctrl + e ].

* Select edges where you want to add extra polygons:
    * Select them manually.
    * Or check **Sharp edges** from select menu and configure angle until it selects the parts where you want to add polygons.

        ![Select Sharp edges](https://equilaterus.github.io/wikilaterus/assets/img/blender/select-sharp-edges.PNG)  

* Use **bevel modifier** with a 1.00 of weight at edges data and play with *width* and *segments* values.

    ![Bevel modifier](https://equilaterus.github.io/wikilaterus/assets/img/blender/bevel-modifier-sharp-edges.PNG)

## Removing n-gons

* Selecting **n-gons**
    * Select menu > Select all by trait > Select faces by side
* Removing them
    * Add faces and edges between vertex [ j ]
    * Generate center vertex and faces [ alt + p ]

## UV-Unwrap

* Unwrap menu [ U ]
    * Stitch Islands [ V ]
        * Interchange Island [ i ]
    * Weld align [ W ]
    * Unwrap on the UV Editor view [ E ]
* View multiple objects
    * Select other objects (be sure that each of them have all vertex selected on the UV Editor) and lastly the object that you're editing.
    * On the *View* menu enable **Draw other objects**.
* Unwrap using same size for each part:
    ![Unwrap following quads](https://equilaterus.github.io/wikilaterus/assets/img/blender/unwrap-follow-quads.PNG)

    * [ U ] and select Following Quads.
    * If it fails [ U ] -> Reset 

* Misc from UV Editor
    * UVs menu > **Seams from Island**
    * N > Display > **Stretch** to show UV quality
    * New Image > **Color grid** to show sample UV.
    * From the bottom menu activate an icon with a *mesh and a cursor*. 
        * It will **Keep UV mode and mesh selection in sync**.
        * Disable this option to edit UV parts.

## Baking

> Located at **Render Menu**. 

* General:
    * Apply same material to several objects [ ctrl + L]
    * Create a new image at the UV Editor, be sure that it is active. Keep a backup of your textures.
    * Select *Bake Mode* and disable *Clear* at the **Render Menu** before proceed.
    * To bake from a Hi-Poly to a low-poly select Hi then Low. Check Selected to active.
    * To improve rendering quality at **World** menu increase **Gathering** > **Samples** (even if it is disabled).

* Ambient Occlusion
    * White background image.

* Normals
    * Background image RGB: 0.5, 0.5, 1.0.

* Solid color
    * Background image HSV: 0, 0, 0.5.

* Textures (last step)
    * When you have finished with materials, baking and use this bake option to generate a unique texture with all filters applied.
    * It works even when you create multiple UVs to add detail to certain parts of your model.

 



