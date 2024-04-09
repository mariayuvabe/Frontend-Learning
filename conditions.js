// Can you vote? 

// Implement the function canVote such that it returns true whenever the age is 18 or above and false in all other scenarios.

/**
 * @param {number} age
 */
function canVote(age) {
    if(age>=18){
        return true
    }else {
        return false
    }

}

// Sample usage - do not modify
console.log(canVote(25)); // true
console.log(canVote(18)); // true
console.log(canVote(10)); // false

// Complete the function getNextAge such that it returns the age next year (by adding 1 to the current age).

/**
 * @param {string} age
 */
export function getNextAge(age) {
    if (age === "") {
        return 0;
    }
    
    return Number.parseInt(age, 10) + 1;
}
//traditional method
function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "even";
    }
    else{
        return 'odd'
    }
}
//advanced
function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "even";
    }
    return "odd";
}


// The ternary operator
// Short if conditions can sometimes be written using the ternary operator. The ternary operator is a short way of writing an if...else statement.

// The ternary operator has the following syntax:


// condition ? expressionWhenTrue : expressionWhenFalse

function evenorodd(number){
    return (number%2===0) ? "even" : "odd"
}