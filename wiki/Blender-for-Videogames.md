---
layout: page
title: Blender for Videogames
wikiPageName: Blender-for-Videogames
menu: wiki
---

> This is a WIP wikilaterus page

## Settings

* Interface
    * View manipulation > Auto depth: turn on for a better navigation between closer and far objects.

Layer managment add on

System > anisotropic filtering > vbos

N > GSL > Backface culling

## Hotkeys

|Shorcut             |Action                                             
|---------           |---------                                          
|Home                | View all objects                                  
|.                   | Focus selected object                             
|ctrl + f            | Pilot view mode                                   
|ctrl + alt + q      | 4 view screen (top, front, right, perspective)    
|shift + s           | snap                                              
|z                   | Display mode solid                                
|alt + z             | Display mode textured                             
|o                   | proportial                                        
|shift tab           | snap
|ctrl                | while moving snap on the fly
|ctrl + b            | bevel (edit mode)
|ctrl + a            | apply
|alt + s             | undo scale
|ctrl + tab          | mesh select mode
|w                   | specials
|alt                 | EDGE LOOP SELECT
|ctrl + r            | Add ring loop
|g+g                 | Special move
|f                   | Add face
|j                   | Add face between vertex
|i                   | Inset
|alt+m               | Merge

* **Select loose parts**
    * Current selection [ ctrl + L ]
    * Current pointer [ L ]

* **Knife** [ K ]
    * Center [ ctrl ]  
    * Angle constraint [ C ]
    * Cut through [ Z ]

* **Editing**
    * Face options [ ctrl + f ]
        * Shade Smooth: smooth selected faces
    * Edge options [ ctrl + e ]
        * Mark sharp: "removes" smooth of an edge
    
## Smoothing

* Activate auto smooth at 180º.

  ![Autosmooth](https://equilaterus.github.io/wikilaterus/assets/img/blender/auto-smooth.PNG)

* Select faces and use **Shade Smooth** using [ ctrl + f ]

* Mark sharp required edges using option at [ ctrl + e] 

## High-poly (non-destructive)

* Select all and remove **marked as sharp** founded on [ ctrl + e ].

* Check **Sharp edges** from select menu and configure angle until it selects the parts where you want to add polygons.

  ![Select Sharp edges](https://equilaterus.github.io/wikilaterus/assets/img/blender/select-sharp-edges.PNG)  

* Use **bevel modifier** with a 1.00 of weight at edges data and play with *width* and *segments* values.

    ![Clone Github](https://equilaterus.github.io/wikilaterus/assets/img/blender/bevel-modifier-sharp-edges.PNG)
