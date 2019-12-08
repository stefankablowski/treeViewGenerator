let createTreeHTML = (tree) => {
    let parsed = parseTree(tree);
    return `<div class="multi-level">${parsed}</div>`
}


let count = 0;
let getCount = () => {
    return count++;
}

let parseTree = (tree) => {
    if(tree.children !== null){
        let subItems = null;
        tree.children.forEach(child => {
            subItems+= parseTree(child);
        });
        let currentNumber = getCount();
        return `
        <div class="sub-item">
            <input type="checkbox" id="${currentNumber}"/>
            <img src="images/Arrow.png" class="arrow"><label for="${currentNumber}">${tree.caption}</label>
            
            <ul>
            ${subItems}
            </ul>
        </div>
        `
    }else{
        return `<li><a href="#">${tree.caption}</a></li>`
    }
}


let sampleTree = {
    caption: "a",
    children: [
        {
            caption: "a1",
            children: null
        },
        {
            caption: "a2",
            children: [
                {
                    caption: "element inside element inside el1",
                    children: null
                }
            ]
        },
        {
            caption: "a3",
            children: [
                {
                    caption: "element inside element inside el1",
                    children: null
                }
            ]
        }


    ]
}

console.log(createTreeHTML(sampleTree));
