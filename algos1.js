
// Factorialize a Number
// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {
    let product = 1;
  
    for(let i = 1; i <= num; i ++) {
      product *= i;
    }
  
    return product
  }
  
  factorialize(5);
  
  




// =========================================================================

// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWordLength(str) {
    const words = str.split(' ');
    let biggestWord = 0;
    
    for(let i = 0; i < words.length; i++) {
      if(words[i].length > biggestWord) {
        biggestWord = words[i].length;
      }
    }
  
    return biggestWord;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");






  
// =========================================================================

// Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
    let newArr = [];
  
    for(let i = 0; i < arr.length; i++) {
      arr[i].sort((a,b) => b - a);
      newArr.push(arr[i][0]);
    }
  
    return newArr;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [-72, -3, -17, -10]]);
  // returns [ 5, 27, 39, -3 ]



// Here I refactored it
  function largestOfFour2(arrays) {
    return arrays.map(arr => Math.max(...arr));
    }
    
    largestOfFour2([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [-72, -3, -17, -10]]);
  // returns [ 5, 27, 39, -3 ]






  
// =========================================================================

// Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
    const targetLength = target.length;
    const index = str.length - targetLength; 
    const newStr = str.slice(index);
    
    return newStr === target ? true : false;
  }
  
  confirmEnding("Bastian", "ian");
  // returns true
  
  confirmEnding("Bastian", "kdo");
  // returns false






  
// =========================================================================

// Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument).
// Return an empty string if num is not a positive number.
// For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
    // check if num is negative
    if(num < 0) return ''
  
    // create variable to build strings into 
    let newStr = ''
      
    // create loop to concat strings into newStr variable
    for(let i = 1; i <= num; i++) {
      newStr += str
    }
  
    return newStr
  }
  
  repeatStringNumTimes("abc", 3)
  // returns abcabcabc







  // =========================================================================

// Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
// Return the truncated string with a ... ending.

function truncateString(str, maxStrLength) {
    // check if str is longer than num
    if(maxStrLength >= str.length) return str
  
    // use slice to cut string to correct length
    return str.slice(0, maxStrLength) + '...'
    
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8)
  // returns 'A-tisket...'







// =========================================================================


// Finders Keepers
// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.
// This means that given an element x, the 'truth test' is passed if func(x) is true.
// If no element passes the test, return undefined.

function findElement(arr, func) {

  // create loop to iterate through array
  for(let i = 0; i < arr.length; i ++) {

    // check if func returns true on array item
    // if true, return array item
    if(func(arr[i]) === true) return arr[i]
  }

  // if all array items are false, return undefined
  return undefined
}

findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0)
// returns 8







// =========================================================================

