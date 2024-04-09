// Complete the function getDescription such that it returns the first 10 characters of the text parameter it receives followed by an ellipsis. An ellipsis is the dot character written 3 times: ...

// However, whenever the text is 10 characters or less, the ellipsis should not be added because the text is not being trimmed!


import {getDescription} from "./helpers.js";

const input = document.querySelector("#input");
const output = document.querySelector("#output");

input.addEventListener("input", (event) => {
    output.textContent = getDescription(event.currentTarget.value);
});

// Can you vote (improved) 

// Implement the function canVote such that it returns true whenever the age is 18 or above and false in all other scenarios. You should not use an if condition (or ternary).

/**
 * @param {number} age
 */
function canVote(age) {
    return age>=18
   }
   
   // Sample usage - do not modify
   console.log(canVote(25)); // true
   console.log(canVote(18)); // true
   console.log(canVote(17)); // false

//    Complete the function evenOrOdd such that it returns the string "even" when the number parameter it receives is even and "odd" otherwise.

/**
 * @param {number} number
 */
export function evenOrOdd(number) {
    if(number%2===0){
        return 'even'
    }
    return 'odd'

}