/*
1. makeCounter below is a decorator function which creates and returns a function that
increments a counter.
a) Create a second counter counter2 using the makeCounter function and test to see if
it remains independent to counter1
    A: Yes, it's independent, As I can see the console.log(result) I can see counter2 has got not influence by counter1()'s result or process.
b) Modify makeCounter so that it takes an argument startFrom specifying where the
counter starts from (instead of always starting from 0)
c) Modify makeCounter to take another argument incrementBy, which specifies how
much each call to counter() should increase the counter value by.
*/

function makeCounter(startFrom, incrementBy) {
    let currentCount = startFrom ? startFrom : 0;
    let incrementNumber = incrementBy ? incrementBy : 1;

    return function() {
        currentCount += incrementNumber;
        console.log(currentCount)
        return currentCount;
    };
}
let counter1 = makeCounter(1, 2);
let counter2 = makeCounter();

counter1(); // 1
counter1(); // 2
counter2()