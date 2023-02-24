
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





