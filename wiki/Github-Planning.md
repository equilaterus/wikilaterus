---
layout: page
title: Github Planning
wikiPageName: Github-Planning
menu: wiki
---

# Overview

Planning on Github is strange at first sight: names and artifacts seems to be confusing. In this page we will explain the structure that we follow at **equilaterus** so you can start doing **effective planning on Github**.

## Conventions

* **Issues**: According to their *label*, an *issue* can represent:  
  * **Bug label**: An error to be fixed.  
  * **No label**: Any kind of task.
  * **Epic label**: A milestone. **Note**: In your own project, you will need to create it through **issues tab** as it isn't a default Github label.

* **Milestones**:  A milestone is a *collection of issues*, they represent a feature or set of bugs that, being finished, will generate value for the final product. *Each Milestone must have a single issue with its name, it requires to be labeled as an Epic and its description will contain a link to the Milestone url*, this allows managing milestones on the project board (you cannot include a Milestone directly on them so that's why need to create an issue representing it).

* **Projects**: Contains a collections of issues that team will be working on during a product iteration. If an issue represents an **Epic** it is not necessary to add all issues inside the Epic into the project as long as you can use the link in the description of the Milestone.

## Screenshots

### Projects

> A Project that contains simple dev tasks and Milestones (note that we just add **Epics** not all the issues inside them)

![A project](https://equilaterus.github.io/assets/img/planning/projects.PNG)


### Issues (backlog)

> This view contains all issues. You will see some of them labeled as **Epic**, do not confuse with real Milestones, they're just a representation that we need to create in order to use them on the *Project Boards*.

![Backlog](https://equilaterus.github.io/assets/img/planning/backlog.PNG)

### Inside an issue representing a Milestone

> On the backlog, if you open an issue with the *Epic label* you will see something like this.

![Inside an issue representing a Milestone](https://equilaterus.github.io/assets/img/planning/milestone-inside.PNG)

### Milestones 

> You can found current **Milestones** (not their *issue-like representation*) inside *Issues tab -> Milestones*. If you open one of them you will see all *issues* that are part of the Milestone.

![Milestones](https://equilaterus.github.io/assets/img/planning/milestones.PNG)

### Inside a real Milestone

> Note that a real Milestone (not its *issue-like representation*), contains many issues inside it.

![Inside a real Milestone](https://equilaterus.github.io/assets/img/planning/milestone-true-inside.PNG)


