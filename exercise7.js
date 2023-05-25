/*
7. In JavaScript, the toString method is used to convert an object to a string representation.
By default, when an object is converted to a String, it returns a string that looks something
like [object Object].
However, we can define our own toString methods for custom objects to provide a more
meaningful string representation.
a) Define a custom toString method for the Person object that will format and print
their details
b) Test your method by creating 2 different people using the below constructor function and printing them
c) Create a new constructor function Student that uses call to inherit from Person and add an extra property cohort

d) Add a custom toString for Student objects that formats and prints their details. Test
with 2 students.

*/

// a) Define a custom toString method for the Person object that will format and print their details
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.toString = () => { return `${this.name} is ${this.age} years old, and a ${this.gender}.` }
}

//b) Test your method by creating 2 different people using the below constructor function and printing them
const person1 = new Person('James Brown', 73, 'male')
const person2 = new Person('Catherine Park', 30, 'female')
console.log('person1: ' + person1) //prints person1: [object Object]
console.log('person2: ' + person2)

//c) Create a new constructor function Student that uses call to inherit from Person and add an extra property cohort
function Student(name, age, price, cohort) {
    Person.call(this, name, age, price);
    this.cohort = cohort;
    this.toString = () => { return `${this.name} is ${this.age} years old, and a ${this.gender} student of ${this.cohort}.` }
}

// d) Add a custom toString for Student objects that formats and prints their details. Test with 2 students.
const student1 = new Student('Chris', '20', 'male', 'institute of data');
const student2 = new Student('Christian', '22', 'female', 'institute of data');

console.log('student1: ' + student1);
console.log('student2: ' + student2);