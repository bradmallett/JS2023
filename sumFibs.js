// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.


// start w fib numbers
// find last digit
// is odd and it's less than limit/equal to limit?
// if yes, add to oddFibs
// if no, add up oddFibs together
// return oddFibs

const sumFibs = limit => {
    let fibs = [0,1];
    let oddFibs = [];
    let nextFibNum = 1;

    // go in the loop if nextFibNum is smaller/equal to the limit
    while(nextFibNum <= limit) {

        // if next fib num is odd, add to oddFibs array
        if(nextFibNum % 2 !== 0) {
            oddFibs.push(nextFibNum);
        }

        // create next fib number
        const lastIndexOfFibs = fibs.length - 1;
        const nextToLastIndexOfFibs = fibs.length - 2;
        nextFibNum = fibs[lastIndexOfFibs] + fibs[nextToLastIndexOfFibs];
        fibs.push(nextFibNum);
    
    }

    const sumOfOdd = oddFibs.reduce((acc, cn) => acc + cn);
    return sumOfOdd
}

sumFibs(10);





