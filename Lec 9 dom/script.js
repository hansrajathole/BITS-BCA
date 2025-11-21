// let p = document.createElement("p")
// let body = document.querySelector("body")

// p.innerText = "Lorem ipsum dolor sit amet."
// p.id = "para"
// p.style.backgroundColor = 'red'

// // body.append(p)
// body.prepend(p)



let btn = document.querySelector("button")
// let body = document.querySelector("body")

// btn.addEventListener("click", ()=>{
//     let img1 = document.getElementById("img1")
//     let img2 = document.getElementById("img2")
    
//     let img1Src = img1.getAttribute("src")
//     let img2Src = img2.getAttribute("src")

//     img1.setAttribute("src",img2Src)
//     img2.setAttribute("src",img1Src)



// })



// btn.addEventListener("click", ()=>{
//     let img = document.querySelector("#img2")

//     body.removeChild(img)
// })

// let h1 = document.querySelector("h1")

// btn.addEventListener("click", ()=>{
//     let p = document.createElement("p")
//     p.innerText = "samaj aa rha hai sabhi ko"

//     let parent = btn.parentElement

//     parent.replaceChild(p, h1)

    
// })



// btn.addEventListener("click", ()=>{
//     // let parent = btn.parentElement

//     // let fisrt =parent.firstElementChild
//     // let last = parent.lastElementChild
//     // console.log(fisrt);
//     // console.log(last);
    
//     console.log(btn.previousElementSibling);
//     console.log(btn.nextElementSibling);
    
    
// })


let popUp = document.querySelector(".pop-up")

btn.addEventListener("click", ()=>{
    popUp.style.display = "inline"
})


let h1 = document.querySelector("h1")

h1.addEventListener("dblclick", ()=>{
    popUp.style.display = "none"
})