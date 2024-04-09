// Complete the function concatInitials such that it returns the firstNameInitial followed by the lastNameInitial.

// Best practice icon

/**
 * @param {string} firstNameInitial
 * @param {string} lastNameInitial
 */
function concatInitials(firstNameInitial, lastNameInitial) {
    return firstNameInitial+lastNameInitial
}

// Sample usage - do not modify
console.log(concatInitials("J", "D")); // "JD"
console.log(concatInitials("S", "B")); // "SB"

// Complete the function getDescription such that it returns the first 10 characters of the text parameter it receives followed by an ellipsis. An ellipsis is the dot character written 3 times: ...

// Note: for this challenge, the ... should always be there, even if the text was shorter than 10 characters.

/**
 * @param {string} text
 */
export function getDescription(text) {
    console.log(text); // write something in the BROWSER and see it in the console
    var firsttenchar = text.substring(0,10)
    return firsttenchar+'...'

}