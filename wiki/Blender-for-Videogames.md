---
layout: page
title: Blender for Videogames
wikiPageName: Blender-for-Videogames
menu: wiki
---

> This is a WIP wikilaterus page

## Recommended Blender Course!

![Blender Game Asset Creation](https://cloud.blender.org/api/storage/file/eb/ebf6b6be02644a506e1d7e63825acb4a-l.jpg)

You can try some free lessons but the full content is available for **Blender Cloud Subscribers**: [Open Course](https://cloud.blender.org/p/game-asset-creation/56041550044a2a00d0d7e068)

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
    * You can change the pivot point at the bottom of the Viewport, next to *Viewport Shading*.

* **Selecting**
    * **Misc**
        * Mesh select mode [ ctrl + tab]
        * All [ A + A ]
        * Invert selection [ ctrl + i ]
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
    Use Bezier curves to create cable-like models:
    * *Settings*
        * *Bezier curve data*:
            * **Fill**: Full.
            * **Bevel**: Custom value to set width.
            * **Resolution**: Custom value to set detail.
    * *Edit mode*
        * *Select All* and *Set handle type to automatic* before modeling [ v ]        
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

* Activate **Auto Smooth** at 180º.

  ![Autosmooth](https://equilaterus.github.io/wikilaterus/assets/img/blender/auto-smooth.PNG)

* Select faces and use **Shade Smooth** using [ ctrl + f ]

* Mark sharp required edges using option at [ ctrl + e] 

* *Note*: [Edge Split Modifier](https://docs.blender.org/manual/en/latest/modeling/modifiers/generate/edge_split.html) can be used to achieve the same effect as **Auto Smooth**.

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
    * **Keep UV mode and mesh selection in sync** (Disable this option to edit UV parts).

      ![UV Sync](https://equilaterus.github.io/wikilaterus/assets/img/blender/blender-uv-sync.png)

    * **Snap to pixels** (recommended to be activated):

      ![UV Sync](https://equilaterus.github.io/wikilaterus/assets/img/blender/blender-uv-snap-pixels.png)

* You can add multiple UVs to add more details to some parts of the model and then bake all changes on a single UV. *See Texture baking section*.
    * At **Data** tab you can add UVs.
    * Remove them before exporting. 

## Baking

> Located at **Render Menu**.

* Ambient Occlusion
    * White background image.

* Normals
    * Background image RGB: 0.5, 0.5, 1.0.

* Solid color
    * Background image *alpha*. **Keep alpha color for empty parts as for exporting we will use a padding algorithm on Gimp (UVPadder) to generate better textures for mipmaps generatio** (*See exporting section for more information*).

## Baking with Blender Internal

* General:
    * Apply same material to several objects [ ctrl + L]
    * Create a new image at the UV Editor, be sure that it is active. Keep a backup of your textures.
    * Select *Bake Mode* and disable *Clear* at the **Render Menu** before proceed.
    * To bake from a Hi-Poly to a low-poly select Hi then Low. Check Selected to active.
    * To improve rendering quality at **World** menu increase **Gathering** > **Samples** (even if it is disabled).
* Textures (last step)
    * When you have finished with materials, baking and use this bake option to generate a unique texture with all filters applied.
    * It works even when you create multiple UVs to add detail to certain parts of your model.
    * Join all meshes into a single one, applying modifiers and select common UV map for a succesful process.

### Blender Internal Materials

* Use them to previsualize your changes and also to prepare a **Texture baking** step.
  * Create a material and add textures:
     * For the *Normals* be sure that the affect *Geometry > Normal* and to select at *Image Sampling* **Normal Map > Tangent**.
     * For detail textures (over textures) be sure to change the **Blending Mode** to **Multiply**.

## Baking with Cycles

* General:
    * Add *Nodes* [ shift + a ]
    * Open *Node Editor View*.
    * Be sure to select the correct **Texture Node** when backing.
    * Select *Bake Mode* and disable *Clear* at the **Render Menu** before proceed.
    * To bake from a Hi-Poly to a low-poly select Hi then Low. Check Selected to active.
    * Sampling settings:

    ![Sampling settings for cycles](https://equilaterus.github.io/wikilaterus/assets/img/blender/blender-cycles-samples.png)

* Normals:
    * To bake from a Hi-Poly to a low-poly select Hi then Low. Check Selected to active.
    * Adjust Ray Distance.

    ![Baking normals on cycles](https://equilaterus.github.io/wikilaterus/assets/img/blender/blender-cycles-normals.png)

* Baking multiple normals:
    * This workarround uses color baking to consolidate multiple UVs into a single one. This procedure is to add more details to a part of the model and then optimize the size by backing everything into a single texture.
    * Create different UV-Maps to add more detail and configure a material as here (note the unconnected node for the bake resulting texture):

    ![Baking multiple normals different UVs](https://equilaterus.github.io/wikilaterus/assets/img/blender/blender-cycles-multiple-uvs.png)
    * Add a material and apply it to the rest of the model, create a *Default Normal Texture* (RGB: 0.5, 0.5, 1.0.):

    ![Baking multiple normals different Materials](https://equilaterus.github.io/wikilaterus/assets/img/blender-cycles-multiple-baking-mat.png)
    * While selecting the unconnected *Resulting Node* (Image Texture named: NewNormal in the picture) bake *Diffuse Color*.

    ![Baking color on cycles](https://equilaterus.github.io/wikilaterus/assets/img/blender/blender-cycles-baking-color.png)

* Baking multiple textures:
    * Apply the previous steps but instead of setting a Normal Texture on the color of your Difuse Shader, link your texture.

### Baking FAQ:

* "No object or images found to bake to":

  * On *edit mode* selecting all the *faces* check at the *UV editor* that you've selected the correct image to bake to.

    ![No object or images found to bake to](https://equilaterus.github.io/wikilaterus/assets/img/blender/bblender-bake-no-active-images-objects.png)

  * Check that the objects are visible for rendering on the Hierarchy menu.

    ![No object or images found to bake to](https://equilaterus.github.io/wikilaterus/assets/img/blender/blender-no-object-images-bake.png)

  * Be sure to enable **Use the scene's active camera and layers in this view**.

    ![No object or images found to bake to](https://equilaterus.github.io/wikilaterus/assets/img/blender/blender-no-object-images-bake.png)
 
## Painting

> This workflow of Blender is partially broken. It is recommended to use it with caution (to add details and not for a complete asset painting). If you have access to **Substance Painter** it is better to use it, if not, you can *Bake base difusse colors* and use **Gimp** and/or **Krita** for texture painting. 

* General
    * Brush size [ F ]
    * Strength [ shift + F ]
    * Stroke method [ E ]
    * Paint: *Mix mode*.
    * Erase: *Erase alpha mode*.
    * Bleed: outer margin to avoid artifacts on compressed versions of the texture. [Broken on 2.78 - 2.79c](https://developer.blender.org/T50831) - it is recommended to export them and use UVPadder on Gimp to fix this issue and even create better textures that will not show artifacts when mipmaps are generated on the Game Engine (*See Texture Exporting section for more details*).

* Add multiple slots for each type of detail. For example:
   * Color variation.
   * Border details:
        * Activate *Cavity Mask*.
        * Add a *Subdivide modifier* with a *Simple* subdivision type. **DO NOT APPLY IT**.

* Gradient:
   * Brush: fill-
   * Stroke method: line.

* It is recommended to paint everything (specially gradients) using perspective mode with a FOV of 250 [ N menu ].

## Exporting

### Textures

### Texture Padding - Dilation

* If you worked with **Substance Painter** be sure to enable [Infinite Padding Generation](https://support.allegorithmic.com/documentation/spdoc/padding-134643719.html) to avoid artifacts when the Game Engine generates Mipmaps. 

  ![Substance Painter Infinite Padding](https://support.allegorithmic.com/documentation/spdoc/files/134643719/134643715/1/1441729899000/padding_zoom.gif)

  ![Substance Painter Padding comparison](https://support.allegorithmic.com/documentation/spdoc/files/134643719/134643718/1/1441729897000/padding_toggle.gif)

* If you worked with open source software, there is an alternative that generates a similar effect:

  * Save as an image and open it up on Gimp. Use UVPadder to fill empty spaces in the texture. 

    * [UVPadder for Gimp Original Forum Post](https://polycount.com/discussion/114616/uvpadder-filter-for-gimp-2-6)
    * [Download UVPadder](https://drive.google.com/file/d/1RCsXhOGDbCiR0eMkQT4hv1smSN6ODF9A/view) and see instructions on *readme.txt*.
    * It works with *Windows* and *Linux*, there is the source that you can use to compile for other OS.

* If the method doesn't work, you can at least fill your empty space of the texture with a *common* color to avoid highly visible artifacts. For example see this image took from the following video of *JDGameArt*:

  ![UV Image empty space filled with color](https://equilaterus.github.io/wikilaterus/assets/img/blender/uv-empty-color.png)

  Full video with a discussion regarding this topic: [![Mipmaps, UV Seams, & UV Padding](https://img.youtube.com/vi/GD7mlc6h4N8/0.jpg)](https://youtu.be/GD7mlc6h4N8) 

### Model

* As of Blender 2.78 keep the default settings and check *Tangent Space* option in the *Geometries* tab of the FBX exporter.

  ![Blender 2.78 to UE export settings](https://equilaterus.github.io/wikilaterus/assets/img/blender/blender-fbx-export-tangent.png)



