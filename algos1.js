
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
  
  