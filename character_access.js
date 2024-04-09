/**
 * @param {string} name
 */
function getFirstCharacter(name) {
    return name[0]
   }
   
   // Sample usage - do not modify
console.log(getFirstCharacter("Amsterdam")); // "A"
console.log(getFirstCharacter("Japan")); // "J"

function getLastCharacter(name) {
    return name.at(-1)
   }
   
// Sample usage - do not modify
console.log(getLastCharacter("Sam")); // "m"
console.log(getLastCharacter("Alex")); // "x"
console.log(getLastCharacter("Charley")); // "y"

function getLastCharacter(name) {
    var l= name.length
    return name[l-1]
   }
   
// Sample usage - do not modify
console.log(getLastCharacter("Sam")); // "m"
console.log(getLastCharacter("Alex")); // "x"
console.log(getLastCharacter("Charley")); // "y"

