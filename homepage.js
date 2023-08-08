
const userProfile= document.querySelector(".userProfile")
const menu = document.querySelector("#menu")

let menuOnOff = false;

userProfile.addEventListener('click', ()=>{
    // menu.classList.toggle('menuOff')
    if (menuOnOff){
        menu.style.display = "none"
        console.log('off')
        menuOnOff = false
    }
    else{
        menu.style.display = "block"
        console.log('on')
        menuOnOff = true
    }
})