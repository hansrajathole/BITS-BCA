
async function getData() {
  try {
   let response = await fetch('https://dummyjso.com/users')
   console.log(response);
   let result = await response.json()

   console.log(result);
  } catch (error) {
    console.log(error.message);
    
  }
   
}

// getData()
// localStorage.clear()
// localStorage.setItem("name", 'raj')
// localStorage.setItem("age", '22')


// let age = localStorage.getItem("age")
// console.log(age);

// localStorage.removeItem("name")

// console.log(a);
// console.log(x);

// var a = 10
// let x = 30 

// fun()
// let fun = function () {
//     console.log("hey");
    
// }

// fun()
// function fun() {
//     console.log("helloooo");
    
// }


// let person = {
//     name : "raj",
//     age : 23,
//     mobileNo : 9873423245,
//     address : {
//         city : "Mumbai",
//         state : "MH",
//         pinCode : 44897
//     }
// }

// let json = JSON.stringify(person)
// console.log(json);



// let copyObj = JSON.parse(json)


// copyObj.name = "Hansraj"
// copyObj.address.city = "Nagpur"

// console.log(person);
// console.log(copyObj);


// let name = null
// console.log(name) // undefined

console.log(10 /"xyz");
