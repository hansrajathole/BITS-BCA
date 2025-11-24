

// let inp = document.querySelector("input")
// let form = document.querySelector("form")


// form.addEventListener("submit", (event)=>{
//     event.preventDefault()
//     console.log(event.target.firstElementChild.value);
    
    
// })


// inp.addEventListener("keyup", (event)=>{
//     console.log(event.target.value);
    
// })



let ol = document.querySelector("ol")

ol.addEventListener("click", (event)=>{
    if(event.target.tagName === "LI"){
        event.target.remove()
    }
    
})


