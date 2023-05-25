/*
5. The following car object has several properties and a method which uses them to print a
description. When calling the function normally this works as expected, but using it from
within setTimeout fails. Why?
    A: Because function relies on context and also passed as a reference so that, it losts context.

a) Fix the setTimeout call by wrapping the call to car.description() inside a function
b) Change the year for the car by creating a clone of the original and overriding it
c) Does the delayed description() call use the original values or the new values from b)? Why?
    A: description() call use the new values from b). 
        becuase when I cloned the orignial object, it is pointing object's reference address, 
        so ultimately new value is assigned to the original value. 
d) Use bind to fix the description method so that it can be called from within
setTimeout without a wrapper function
e) Change another property of the car by creating a clone and overriding it, and test that setTimeout still uses the bound value from d)
    A: yes it still indicates the address of object's refernece, so it changes original's property value.
*/

let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description(txt) {

        console.log(`${txt} This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};
// a) wrapping inside of the function
car.description(); //works
setTimeout(() => car.description('1: '), 100);

// b) Change the year for the car by creating a clone of the original and overriding it.
let clonedCar = car;
clonedCar.year = 1950;

setTimeout(() => car.description('2: '), 100);
clonedCar.description('3: ');

//d) Use bind to fix the description method so that it can be called from within setTimeout without a wrapper function
setTimeout(car.description.bind(car, '4: '), 200);
setTimeout(car.description.bind(clonedCar, '5: '), 200);

//e) Change another property of the car by creating a clone and overriding it, and test that setTimeout still uses the bound value from d)
let bindingCar = car;
bindingCar.make = "BMW";
setTimeout(bindingCar.description.bind(bindingCar, '6: '), 500);