const title = document.getElementById('snippet_title_input')
const code = document.getElementById('snippet_code_input')
const explanation = document.getElementById('snippet_explanation_input')
const snippet_container = document.getElementById('snippet_holder')
const submitBtn = document.getElementById("add_btn")

const view_title = document.getElementById('view_title_display')
const view_explanation = document.getElementById('view_explanation_display')
const view_code = document.getElementById('view_code_display')

let divdisplay;
let i = 0;
const snippetArr = []
let id;

class Snippet{

    constructor(title, code, explanation)        
        {
        this.title = title
        this.code = code
        this.explanation = explanation
        this.fill = this.generateDiv()
    }

    keepTabsOnIds(div){
        let obj = {id: i, title: this.title, explanation: this.explanation, code: this.code}

        snippetArr.push(obj)
        id = i;
        i++
        return id
 
     }

    clickDtection(div){
        div.addEventListener('click', (e)=> {
            let chosenSnippet = e.target.id
            
            let chosenTitle = snippetArr[chosenSnippet].title
            let chosenExp = snippetArr[chosenSnippet].explanation
            let choosenCode = snippetArr[chosenSnippet].code

            view_title.innerHTML = chosenTitle;
            view_explanation.innerHTML = `/* ${chosenExp} */`
            view_code.innerHTML = choosenCode;


              // console.log('this is the id:' + chosenSnippet)
            // console.log('this is the innerHTML of view_title:' +view_explanation.innerHTML )
        })
    }

    generateDiv(){
        
        let div = document.createElement('div')
        div.classList.add("newSnippet")
        div.classList.add(i)
        let y = '${event.type} hello'
        this.keepTabsOnIds()
        this.clickDtection(div)
        div.innerHTML = `<div id='${id}'><div class='title' id='${id}'> ${this.title}</div><div class='explanation' id='${id}'> ${this.explanation} </div> </div>`
        div.id = id
        return div
    }
}


submitBtn.addEventListener('click', () => {
    if(title.value === "" || code.value === "" || explanation.value === "" ){
        console.log("empty")
    }
    else{
        let divdisplay = new Snippet(title.value, code.value, explanation.value)
        snippet_container.appendChild(divdisplay.fill)

        title.value = " "
        code.value = " "
        explanation.value = " "
        // snippet_container.push(divdisplay)
    }
})





    
