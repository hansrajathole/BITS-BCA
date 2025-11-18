// Callback function
// function greet(name) {
//     console.log(`hello, good morning ${name}`);
    
// }


// function func(callback) {
//     let name = "Abhay"

//     callback(name)
// }

// func(greet)




// higher order function

// function fun() {
//     console.log("function chala");

//     function child(name) {
//         console.log('hello kaise ho '+name);
           
//     }

//     return child
    
// }

// let returnFun = fun()

// returnFun('chacha')



// IIFE

// (
//     function () {
//         console.log('hello guys');
        
//     }
// )()


// console.log(x);  // undefined
// // console.log(z);  // error ===> not defined
// console.log(y);  // error ==> cannot use before initilization



// var x = 40
// let y = 50


// function parent() {
//     let car = 'BMW'
//     let money = 294380349

//     function child() {
//         console.log(`mere papa ke pass ${car} hai`);

//         console.log(`mere papa ke pass bht paise hai ${money}`);
        
//     }

//     return child
// }

// let returnFun = parent()
// returnFun()


// console.log('hello kaise ho');
// setTimeout(()=>{
//     console.log("badhiya...");
    
// },3000)


// setTimeout(()=>{
//     console.log("abe jaldi bol....");
// },2000)


// setInterval(()=>{
//     console.log("hello");
    
// },3000)


let promise = new Promise((resolve , reject)=>{
    setTimeout(()=>{
       let num = Math.floor(Math.random()*2)
        console.log(num);
        
       if(num === 1){
            
            
            resolve("chalo party karte hai")
       }else {
            reject("party cancle paise kharch ho gye")
       }
    },5000)
})

console.log(promise);

promise.then((res)=>{
    console.log(res);
    console.log(promise);
    
    
})
.catch(err=>{
    console.log(err);
    console.log(promise);
     
})



