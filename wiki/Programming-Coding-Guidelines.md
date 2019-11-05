---
layout: page
title: Programming Coding Guidelines
wikiPageName: Programming-Coding-Guidelines
menu: wiki
---

## General guidelines

* Use representative names for variables.
* Use comments only when necessary, try to write readable code.
* Separate logic blocks of code by adding extra newlines (like paragraphs).
* Return as fast as you can.
* Use continue to avoid unnecesary nesting ([Linus Torvalds trick](https://www.mono-project.com/community/contributing/coding-guidelines/#indentation)).

## C# guidelines

* Use PascalCase for class names.
* Use PascalCase for public members.
* Use _camelCase for private or internal members.
* Use camelCase for params.
* Write your code and comments in english.

### Sample code

```csharp
public class Foo 
{    
    public string Name { get; set; }

    private int _counter;

    public bool SomeMethod(string name)
    {
        if (name == Name)
            return true;
        
        // Do some advanced stuff with a meaningful comment
        // Note that code is separated by an extra line from upper condition.
        foreach (var character in name)
        {
            if (character == 'X')
                continue;

            // Do more stuff
            ...
            ...
            ...
        }
        return ...;
    }
}
```

### More information

For more information [see official C# coding conventions](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/inside-a-program/coding-conventions)
