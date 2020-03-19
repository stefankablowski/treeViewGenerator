let createTreeHTML = (tree) => {
    let parsed = parseTree(tree);
    return `<div class="multi-level">${parsed}</div>`
}


let count = 0;
let getCount = () => {
    return count++;
}

let parseTree = (tree) => {
    if (tree.children !== null) {
        let subItems = '';
        tree.children.forEach(child => {
            subItems += parseTree(child);
        });
        let currentNumber = getCount();
        return `
        <div class="sub-item">
            <input type="checkbox" id="${currentNumber}"/>
            <label for="${currentNumber}">${tree.caption}<img src="img/arrow1.svg" class="arrow"></label>
            
            <ul>
            ${subItems}
            </ul>
        </div>
        `
    } else {
        return `<li><a href="#">${tree.caption}</a></li>`
    }
}


let sampleTree = {
    caption: "FB 01 Humanwissenschaften",
    link: null,
    children: [
        {
            caption: "Tutorenschulung - Dr. Vogelsang, Güldenpfennig",
            link: 'www.google.com',
            children: null
        },
        {
            caption: "I. Institut für Erziehungswissenschaft",
            link: null,
            children: [
                {
                    caption: "Lehrer*innen und Lehrer*innenhandeln",
                    link: null,
                    children: null
                }
            ]
        },
        {
            caption: "II. Institut für Intelligenz",
            link: null,
            children: [
                {
                    caption: "Verpeilte Systeme",
                    link: null,
                    children: [
                        {
                            caption: "Blockveranstaltung Unorganisiertheit in der praktischen Anwendung",
                            link: null,
                            children: [
                                {
                                    caption: "Anmeldung",
                                    link: null,
                                    children: null
                                }
                            ]
                        }
                    ]
                }
            ]
        }


    ]
}

console.log(createTreeHTML(sampleTree));
document.querySelector('#root').innerHTML = createTreeHTML(sampleTree);