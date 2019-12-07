let createTreeHTML = () => {
    let parsed = null;
    return `<div class="multi-level">${parsed}</div>`
}

let getListItemSnippet = (content) => {
    return ``
}

let getLeafSnippet = (content)=>{

}
let count = 0;
let getCount = () => {
    return count++;
}

let parse = (tree) => {
    if(tree.children !== null){
        let subItems = null;
        children.forEach(child => {
            subItems+= parse(child);
        });
        let currentNumber = getCount();
        subItems = `
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



class TreeNode {
    //Possible types: leaf, branch
    constructor(nodeType, subNodes = null) {
        this.nodeType = nodeType;
        this.subNodes = subNodes;
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
                    caption: "element inside element inside el1"
                }
            ]
        }


    ]
}
