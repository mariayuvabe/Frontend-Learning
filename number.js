// Number to string conversion 

// Complete the function convertNumberToString such that it converts the number it receives into a string.

/**
 * @param {number} number
 */
function convertNumberToString(number) {
    return number.toString()

}

// Sample usage - do not modify
console.log(convertNumberToString(42)); // "42"
console.log(convertNumberToString(97)); // "97"
console.log(convertNumberToString(11)); // "11"

// Get next age I 

// Complete the function getNextAge such that it returns the age next year (by adding 1 to the current age).

/**
 * @param {string} age
 */
export function getNextAge(age) {
    return Number.parseInt(age,10) + 1
}
