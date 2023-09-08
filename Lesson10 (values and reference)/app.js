console.log("hello my fans ");

// copying Numbers
let s = 1;
let Y = s;
s = 2;
console.log(s);
console.log(Y);

//  copying string
let firstPerson = "mark";
let secondPerson = firstPerson;
firstPerson = "austin";
console.log(firstPerson);
console.log(secondPerson);

//  copying complex values
let animal = ["dog", "lion", "chimpazee"];
animal.push("cow");
console.log(animal);

let person = {
  firstName: "john",
  lastName: "sam",
};
const otherPerson = person;
person.firstName = "seyi";
console.log(person);
console.log(otherPerson);

// Equality
const person1 = { firstName: "soliu" };
const otherPerson1 = { firstName: "soliu" };
console.log(person1 === otherPerson1);

const otherPerson3 = person1;
console.log(person1 === otherPerson3);

//       Shallow clonning /spread operator (...)

// means creating a new object or array that is a copy of the original, but it only copies the top-level structure.
//  If the original object or array contains nested objects or arrays,
//  those nested structures will still be referenced rather than being deeply copied.
//  Shallow cloning is often used when you want to create a new object with the same top-level properties as the original while maintaining references to shared nested objects or arrays.
const color = ["red", "blue", "green", "black"];
console.log(...color);
const copiedColor = color;
console.log(color === copiedColor);

const spreadOperator = {
  firstName: "team",
  university: "Unilag",
};
// cloning using spread operator(...) method
const otherSp = { ...spreadOperator };
console.log(otherSp);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
console.log(obj1);
console.log(obj2);

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

const car1 = ["benz", "toyota"];
const car2 = ["lambo", "porshe"];
const car3 = [...car1, ...car2];
console.log(car3);

const numbers = [1, 2, 3, 4, 5];
const newNumber = [...numbers];

console.log(...numbers);
console.log(newNumber);

const number = [1, 2, 3, 4, 5];
const copiedNumber = number;
const newNumber2 = [...number];

console.log(number === copiedNumber);
console.log(number === newNumber2);

copiedNumber.push(8);

console.log(number);
console.log(copiedNumber);
console.log(newNumber2);

// cloning using Array slice method

const numbs = [2, 3, 4, 6, 6, 7];
const cpyNumbs = numbs;

const newNumbs = numbs.slice();
numbs.push(8);

console.log(numbs);
console.log(newNumbs);
console.log(cpyNumbs);

// object Assign method

const person6 = {
  name: "John",
  age: 20,
  
};
const otherPerson6 = { ...person6 };

person6.age = 25;

console.log(person6);
console.log(otherPerson6);

const myGuy = {
  name: "kanas",
  color: "red",
  age: 20,
};
const newRealGhee = Object.assign({}, myGuy);
myGuy.name = "muaz";

console.log(myGuy);
console.log(newRealGhee);

//  Deep Cloning
const details = {
  firstName: "Rocco",
  car: {
    brand: "benz",
    color: "blue",
    wheels: 4,
  },
};

const newDetails = { ...details };
newDetails.firstName = "roqeeb";
newDetails.car.color = "white";

console.log(details);
console.log(newDetails.car);

// Jason
// is a text format that is completely language independent
// jason is used to send and recieve data in many languages

const myPeople = {
  fullName: "Adelo Adebo",
  car: {
    brand: "Volvo",
    door: 2,
    color: "yellow",
  },
};

const stringified = JSON.stringify(myPeople);
console.log(stringified);

const newPeople = JSON.parse(stringified);
console.log(newPeople);

const myObj = {
  name: "muhammed",
  hobbies: ["eat", "sleep", "Travel"],
  hello: function () {
    console.log("Yoga!");
  },
};
console.log(myObj);
console.log(typeof myObj.name);
myObj.hello();

const send = JSON.stringify(myObj);
console.log(send);

const recieve = JSON.parse(send)
console.log(recieve);