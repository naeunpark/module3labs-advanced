/*
4. The Fibonacci sequence of numbers is a famous pattern where the next number in the
sequence is the sum of the previous 2.
e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
a) Write a function printFibonacci() using setInterval that outputs a number in
the Fibonacci sequence every second.
b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
calls to do the same thing
c) Extend one of the above functions to accept a limit argument, which tells it how many
numbers to print before stopping.
*/

let num;
let secondNum;
let sum;

function printFibonacci() {
    if (num == null && secondNum == null) {
        sum = 1;
        num = 0;
        secondNum = sum;
    } else if (num == 0 && secondNum == 1) {
        sum = num + secondNum;
        num = secondNum;
        secondNum = sum;
    } else {
        num = secondNum;
        secondNum = sum;
        sum = num + secondNum;
    }
    console.log(sum);
}

function printFibonacciTimeouts(delay, limit) {
    let counter = 1;
    console.log(`Total ${limit} numbers will be printed.`);
    setTimeout(function repeatFibonacci(counter) {
        printFibonacci();
        if (counter < limit) {
            setTimeout(repeatFibonacci, delay, counter + 1);
        }
    }, delay, counter);
}

// setInterval(printFibonacci, 1000);
printFibonacciTimeouts(1000, 10);