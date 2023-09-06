console.log("hi my fans");

// object in details

const person = {
  firstName: "john",
  lastName: "Doe",
  age: 21,
};
console.log(person);

const supreme = {
  firstName: "olamide",
  lastName: "Abiodun",
  profession: "caterer",
  isMarried: true,
  gender: "male",
};
console.log(supreme);

const director = {
  firstName: "aliu",
  lastName: "musa",
  age: 40,
  gender: "male",
  isMarried: true,
  car: {
    carName: "Lexus",
    year: "2022",
    color: "ash",
  },
  car2: {
    carName: "toyota",
    year: "2015",
    color: "gray",
  },
};
console.log(director);

// Add vairables as values in an object
const firstName = "Roqeeb";
const lastName = "Yusuf";

const person2 = {
  firstName: firstName,
  lastName: lastName,
};
console.log(person2);
// or
const person3 = {
  firstName,
  lastName,
};
console.log(person3);

const player = {
  firstName: "marcus",
  lastName: "Rashford",
  age: 21,
  jerseyNumber: 10,
  team: {
    clubName: "Manchester United",
    country: "england",
    manager: "Erik Ten Hang",
  },
};
console.log(player);

//Accessing,Adding and Updating Properties of an object
// Dot Notation (.)
// it is used to access,add or update a property of an object
// it allows us to retrieve some values from an object

console.log(player.team);

// square Bracket ([])
// allows us to access properties of an object

console.log(player["firstName"]);

const bola = "age";
console.log(player[bola]);

// Built In Method
// it is a property containing a function declaration

const myObj = {
  myMethod1: () => {},
  myMethod2: function () {},
  myMethod3() {},
};

const dog = {
  name: "fluffy",
  age: 2,
  bark: () => {
    console.log("woof woof!");
  },
};
console.log(dog.name);
dog.bark();

// object methods

// Key method
// it creates an array containing the keys of an object

const employees = {
  boss: "micheal",
  secretary: "john",
  sales: "jimmy",
  accountant: "oscar",
};

const employeesInfo = Object.keys(employees);
console.log(employeesInfo);
//value method
// it creates/returns an array containing the values of an object
const session = {
  id: 1,
  time: "5-september-2023",
  device: "mobile",
  browser: "chrome",
};
const sessionLog = Object.values(session);
console.log(sessionLog);

// entries method
// it creates a nested array of the key and value pairs of an object
const sessionInfo = Object.entries(session);
console.log(sessionInfo);
const operatingSystem = {
  name: "linux",
  version: 18.04,
  license: "open source",
};
const operatingSystemInfo = Object.entries(operatingSystem);
console.log(operatingSystemInfo);

// freeze method
// it prevents modification of existing properties and prevent its properties from being added or removed
const user = {
  userName: "john",
  password: 123123,
};
const userInfo = Object.freeze(user);
userInfo.userName = "supreme";
console.log(userInfo);

// seal method
// it prevents new properties from being added to an object

const user1 = {
  userName: "john",
  password: 123123,
};
const userInfo1 = Object.seal(user1);
userInfo1.userName = "bola";
console.log(userInfo1);

// object is a common data structure that holds kids and value pairs
const person1 = {
  name: "soliu",
  age: 10,
};
console.log(person1);

let x;
const person$ = {
  name: "ali",
  age: 20,
  isAdmin: true,
  address: {
    street: "12 unity and peace",
    city: "Ilorin",
    state: "kwara",
  },
  hobbies: ["music", "sport"],
};
x = person$.name;
console.log(x);

x = person$.hobbies[0];
console.log(x);

// how to update a property in an object

person$.name = "soliu";
console.log(person$);

person$["isAdmin"] = false;
console.log(person$);

// how to delete a property

// delete person$.age;
// console.log(person$);

delete person$.address.street;
console.log(person$);

// how to add a property
person$.hasChildren = true;
console.log(person$);

// how to write a function in an object
person$.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};
person$.greet();

person$.ageM = function () {
  console.log(`basirat is ${this.age} years old`);
};
person$.ageM();

const todo = {};
todo.id = 1;
b = todo;
console.log(b);

// constructor in an object
const todo1 = new Object();
todo1.id = 1;
todo1.name = "buy milk";
todo1.completed = false;
b = todo1;
console.log(b);

const firstName1 = "Soliu";
const lastName1 = "Ahmad";

const naming = {
  firstName1,
   lastName1,
};
console.log(naming);
