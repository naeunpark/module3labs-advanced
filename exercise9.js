/*
9. We can delay execution of a function using setTimeout, where we need to provide both
the callback function and the delay after which it should execute.
a) Create a promise-based alternative randomDelay() that delays execution for a
random amount of time (between 1 and 20 seconds) and returns a promise we can use
via .then(), as in the starter code below
b) If the random delay is even, consider this a successful delay and resolve the promise,
and if the random number is odd, consider this a failure and reject it
c) Update the testing code to catch rejected promises and print a different message
d) Try to update the then and catch messages to include the random delay value
*/

function randomDelay() {
    return new Promise(function(resolve, reject) {
        let min = 1;
        let max = 20;
        let randomNumber = Math.random() * (max - min) + min;
        let seconds = Math.floor(randomNumber);

        if (seconds % 2 == 0) setTimeout(() => resolve(seconds), seconds * 1000);
        else reject(`Random number ${seconds} is not "EVEN" number`);
    })
}

randomDelay()
    .then((value) => console.log(`There appears to have been ${value} seconds delay.`))
    .catch((error) => console.log(`Error Message: ${error}`))