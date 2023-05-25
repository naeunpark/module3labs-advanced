/*
2. The following delayMsg function is intended to be used to delay printing a message until
some time has passed.
a) What order will the four tests below print in? Why?
    A: 1st position, because all other tests are made by setTimeout(), even it is set with 0 waiting time,
        it needs time to be store in call stack and needs to wait until it handles the script. 
        So that's why the fourth test is coming at the first position.
b) Rewrite delayMsg as an arrow function
c) Add a fifth test which uses a large delay time (greater than 10 seconds)
d) Use clearTimeout to prevent the fifth test from printing at all.
*/

let delayMsg = (msg) => console.log(`This message will be printed after a delay: ${msg}`)


setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')
let fifth = setTimeout(delayMsg, 10000, '#5: Delayed by 10000ms');
clearTimeout(fifth);