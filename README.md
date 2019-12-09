# treeViewGenerator

Easily generate copy-paste-ready HTML from a JSON Object

## How to use:

```javascript
let sampleTree = {
    caption: "Software Courses",
    children: [
        {
            caption: "Getting started with Functional Programming - Prof. Dr. F. Sharp",
            children: null
        },
        {
            caption: "Copy-Code-Camp - S. Presso",
            children: [
                {
                    caption: "Exercises Room 1337",
                    children: null
                }
            ]
        },
        {
            caption: "OOP is the future - Mr. O.",
            children: [
                {
                    caption: "Assignments Room 42 Building 0",
                    children: null
                }
            ]
        }


    ]
}
```

```javascript
document.querySelector('#treeRoot').innerHTML = createTreeHTML(sampleTree);
```
