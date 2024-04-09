// Empty array 

// Complete the function getEmptyArray such that it returns an empty array.

function getEmptyArray() {
    const arr = []
    return arr
  }
  
  // Sample usage - do not modify
  console.log(getEmptyArray());

//   Number of elements 

// Complete the function getNumberOfElements such that it returns the number of items contained in the elements array it receives.


/**
 * @param {array} elements
 */
function getNumberOfElements(elements) {
    return elements.length
}

// Sample usage - do not modify
console.log(getNumberOfElements(['a', 'b', 'c'])); // 3
console.log(getNumberOfElements([])); // 0

// Add calculator to apps 

// Complete the function useCalculator such that it adds the "Calculator" string to the apps array it receives. Then, return the apps array.

/**
 * @param {array} apps
 */
function useCalculator(apps) {
    apps.push("Calculator")
    return apps
}

// Sample usage - do not modify
console.log(useCalculator(["Clock", "Twitter"])); // ["Clock", "Twitter", "Calculator"]
console.log(useCalculator(["Weather"])); // ["Weather", "Calculator"]

// Use any app 

// Complete the function such that the app variable is added to the apps array. Then, return the apps array.

/**
 * @param {array} apps
 * @param {string} app
 */
function useApp(apps, app) {
    apps.push(app)
    return apps

}

// Sample usage - do not modify
console.log(useApp(["Clock", "Twitter"], "Firefox")); // ["Clock", "Twitter", "Firefox"]
console.log(useApp([], "Safari")); // ["Safari"]

// Get first app 

// Complete the function getFirstApp such that it returns the first element from the apps array it receives as a parameter.


/**
 * @param {array} apps
 */
function getFirstApp(apps) {
    return apps[0]

}

// Sample usage - do not modify
console.log(getFirstApp(["Chrome", "Clock", "Twitter"])); // "Chrome"
console.log(getFirstApp(["Clock", "Contacts"])); // "Clock"

// Get last app 

// Complete the function getLastApp such that it returns the last element from the apps array it receives as a parameter.
/**
 * @param {array} apps
 */
function getLastApp(apps) {
    return apps.at(-1)

}

// Sample usage - do not modify
console.log(getLastApp(["Chrome", "Clock", "Twitter"])); // "Twitter"
console.log(getLastApp(["Safari", "Contacts"])); // "Contacts"


// Loop through array elements 

// Complete the function loopThroughElements such that it iterates over every item in the elements array it receives and logs it to the console (using console.log).
/**
 * @param {array} elements
 */
function loopThroughElements(elements) {
    elements.forEach(function(element){
        console.log(element)
    })

}

// Sample usage - do not modify
loopThroughElements(["Sam", "Charlie", "Alex"]); // should log every name to the console


// Log user ids 

// Complete the function logUserIds such that it iterates over every item in the userIds array it receives and logs it to the console (using console.log).



/**
 * @param {number[]} userIds
 */
function logUserIds(userIds) {
    userIds.forEach(function(userId){
        console.log(userId)
    })
}

// Sample usage - do not modify
logUserIds([10, 15, 14]); // should log every userId to the console

// Sum grades 

// Complete the function sumGrades such that it returns the sum of all the grades it receives as a parameter. We haven't seen reduce yet, so try to solve it using what you have learned so far.

/**
 * @param {number[]} grades
 */
function sumGrades(grades) {
    let sum=0
    grades.forEach(function(grade){
        sum += grade
    })
    return sum

}

// Sample usage - do not modify
console.log(sumGrades([15, 5, 10])); // 30
console.log(sumGrades([12, 10, 13, 19])); // 54


// Sum positive numbers 

// Complete the function sumPositiveNumbers such that it returns the sum of all positive numbers from the numbers parameter it receives.

/**
 * @param {number[]} numbers
 */
function sumPositiveNumbers(numbers) {
    let sumpositiveno=0
    numbers.forEach(function(number){
        if(number>=0){
            sumpositiveno+=number

        }
    })
    return sumpositiveno


}

// Sample usage - do not modify
console.log(sumPositiveNumbers([15, -5, 10])); // 25
console.log(sumPositiveNumbers([-3, 4, -2, 1])); // 5

// Sum odd numbers 

// Complete the function sumOddNumbers such that it returns the sum of all the odd numbers from the numbers parameter it receives.
// The function should also work for negative numbers.

/**
 * @param {number[]} numbers
 */
function sumOddNumbers(numbers) {
    let oddnosum=0
    numbers.forEach(function(number){
        if(number%2!=0){
            oddnosum +=number
        }
    })
    return oddnosum
}

// Sample usage - do not modify
console.log(sumOddNumbers([15, 5, 10])); // 20
console.log(sumOddNumbers([2, 3, 4, 5, 6])); // 8
console.log(sumOddNumbers([-2, -3, 4, 5, 6])); // 2

// Complete the function renderTableRows such that it returns the following HTML:

// <tr>
//     <td>label here</td>
//     <td>value here</td>
// </tr>
// for every row that it receives in its rows parameter.

// The rows parameters looks like the following:

// [["Carbs", "17g"], ["Protein", "19g"], ["Fat", "5g"]]
// This is a nested array. Every inner array contains 2 items, the first one referring to the label that you should replace instead of label here and the second one referring to the value which you should replace instead of value here.


export function renderTableRows(rows) {
   let html = "";
   rows.forEach(function(row) {
       html += `<tr>
       <td>${row[0]}</td>
       <td>${row[1]}</td>
   </tr>`
   });
   return html;
}

// Positive temperatures 

// Complete the function getPositiveTemperatures such that it returns an array containing the positive temperatures (the temperatures that are above 0).

function getPositiveTemperatures(temperatures) {
      
    return temperatures.filter(function(tempature){
        console.log(tempature)
    return tempature>0

    })
}

// Sample usage - do not modify
console.log(getPositiveTemperatures([-5, 12, 3])); // [12, 3]
console.log(getPositiveTemperatures([1, -3, -2, 4, 10])); // [1, 4, 10]

// Get year 

// Complete the function getYear such that it returns the searchYear (passed as 2nd parameter) when it's found in the array. Otherwise, it should return undefined.

/**
 * @param {number[]} years
 * @param {number} searchYear
 */
function getYear(years, searchYear) {
    return years.find(function(year){
        return year === searchYear
    })

}

// Sample usage - do not modify
console.log(getYear([2019, 2020, 2021], 2020)); // 2020
console.log(getYear([2019, 2020, 2021], 1990)); // undefined

// Is app used? 

// Complete the function isAppUsed such that it returns true when the app parameter it receives exists in the apps parameter, and false otherwise.


function isAppUsed(apps, app) {
    return apps.includes(app)

}

// Sample usage - do not modify
console.log(isAppUsed(["Twitter", "Calculator"], "Calculator")); // true
console.log(isAppUsed(["Clock", "Calculator"], "Safari")); // false

// String sizes 

// Complete the function getStringSizes such that it returns an array of the number of characters for every string it receives in the strings parameter.

// This means, for the array ["abc", "d"] it should return [3, 1] that's because the first string is made up of 3 characters and the second string is made up of 1 character.


function getStringSizes(strings) {
    return strings.map(function(string){
        return string.length
    })

}

// Sample usage - do not modify
console.log(getStringSizes(["a", "abc"])); // [1, 3]
console.log(getStringSizes(["Sam", "Alex", "Charlie"])); // [3, 4, 7]
console.log(getStringSizes(["Hello", "Blue"])); // [5, 4]

// Implement the getVotersCount function such that it returns the number of citizens that are allowed to vote (must be 18 years or older).

export function getVotersCount(ages) {
    console.log(ages);
   
    return ages.filter(function(age){
        return age >=18
    }).length

}