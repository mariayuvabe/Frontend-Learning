const person ={
    name:'John',
    age:'20',
    address:{
        city:"new york",
        country:"USA"
    },
    hobbies:['reading','singing','coding']
}
//An object in JavaScript is a collection of key-value pairs. Keys are strings (or symbols), and values can be of any data type, including other objects, arrays, functions, etc.

console.log(person.name)
console.log(person['address'])
person.address.city='california'
console.log(person.address.city)
person.address.zip='008'
console.log(person.address)
delete person['hobbies']
console.log(person)
