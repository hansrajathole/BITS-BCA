// let a = 34.523455

// console.log(Math.floor(a));
// console.log(Math.ceil(a));

// let num = (Math.random()*(100-50+1))+50

// num = Math.floor(num)
// console.log(num);

// console.log(Math.max(4,9)); // 9
// console.log(Math.min(4,9)); // 4

// let name = "raj"

// let msg = 'hello from '+name  + "kese ho"

// let msg = `hello from ${4+5} kaise ho`
// console.log(msg);



let person = {
    username : "Abhay",
    age : 21,
    gender : "male"
}


// for(let key in person){
//     // console.log(key);
//     console.log(key, ' ===> ' , person[key]);
    
    
// }

// let username = person.username
// let age = person.age
// let gender = person.gender

// let {name , age , gender} = person

// console.log(username);
// console.log(age);
// console.log(gender);
// console.log(name);






let arr = [10,20,30,40,50]


for(let key in arr){
    console.log(arr[key]);
    // console.log(key, ' ===> ' , person[key]);
    if(key === 3){
        return 
    }
    
}


// for(let elem of arr){
//     console.log(elem);
    
// }

// let copyArr =  [...arr]


// copyArr.push(60)
// console.log(arr);
// console.log(copyArr);


// console.log(arr);
// console.log(...arr);


// function sum(...numbers) {
    
//     let sum = 0

//     for(let i = 0 ; i<numbers.length; i++){
//         sum += numbers[i]
//     }

//     return sum
// }

// let ans = sum(10,20,30,40,50)

// console.log(ans);
