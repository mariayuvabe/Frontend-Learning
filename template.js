
// String interpolation 

// Complete the function sayHello such that it interpolates the variable name into a string "Hello name".

function sayHello(name){
    
    return `hello ${name}`
}

console.log(sayHello("Alex"));

// String interpolation advanced 

// Complete the function getFullName such that it returns the full name of the person using interpolation.

/**
 * @param {string} firstName
 * @param {string} lastName
 */
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`

}

// Sample usage - do not modify
console.log(getFullName("Sam", "Doe")); // "Sam Doe"
console.log(getFullName("Alex", "Blue")); // "Alex Blue"

// Multiline string 

// Complete the function getMultilineString such that it returns the following multiline string:

// I am learning JavaScript  
// and I found it to be  
// quite fun!

function getMultilineString() {
    
    return `I am learning JavaScript  
      and I found it to be  
      quite fun!`
 }
 
 // Sample usage - do not modify
 console.log(getMultilineString());

//  Capitalize word 

// Complete the function capitalize such that it capitalizes the word parameter it receives. There's no capitalize method in JavaScript, so you have to write it yourself.

// Look at the sample usage to understand what capitalization means, then look at the hints if it's still not clear.



function capitalize(word) {
    var capitalletter = word[0].toUpperCase()
    
     var otherletters=word.substring(1).toLowerCase()
    
     return `${capitalletter}${otherletters}`
 }
 
 // Sample usage - do not modify
 console.log(capitalize("sam")); // "Sam"
 console.log(capitalize("ALEX")); // "Alex"
 console.log(capitalize("chARLie")); // "Charlie"