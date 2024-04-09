/*
syntax:
const func = (param)=>{
    return param + 1
}
only one param
const func = param =>{
    return param + 1
}
one line command
const func = param => param + 1
*/


const func = (x,y)=> x+y
   

const tradfunc = function(param){
    return param + 1
}


console.log(func(2,3))
console.log(tradfunc(2))

//arrow function as expression

let age =5
let welcome = (age<18) ? ()=>console.log('baby'):console.log('adult')
welcome()