console.log("hello");

const cohorts = [
  "ola",
  "kanas",
  "supreme",
  "kennyMas",
  "muaz",
  "rocco",
  "muhammed",
];

console.log(cohorts.length);

console.log(cohorts);
console.log(typeof cohorts);

// to view element at the position of 2
console.log(cohorts[2]);
console.log(typeof cohorts[2]);

// to replace an element at the position of 1
const replaceEl = (cohorts[1] = "Nasihudeen");
console.log(replaceEl);
console.log(typeof replaceEl);

// to add a new element but you can only add to the last index position
cohorts[7] = "lagbaja";
console.log(cohorts);

// array can store element of any data type
const arr = [
  "banana",
  10000,
  { name: "bala", age: 80 },
  function () {
    alert("boooooooooo🥳🥳🥳🥳🥳");
  },
];
console.log(arr);

// to loop through an array
for (let i = 0; i < cohorts.length; i++) {
  console.log(i, cohorts[i]);
}
for (const cohort of cohorts) {
  console.log(cohort);
}
// ARRAY METHOD

// push method:used to add a new element to the last element

const students = ["basit", "ola", "samod", "tunde", "shally", "wizzy"];
console.log(students);

students.push("burna", "shmurda");
console.log(students);
// to bring the length of the new arry + previous one
console.log(students.push("burna", "shmurda"));

// pop(); to delete the last element
const numbers = [2, 4, 6, 8, 10];
console.log(numbers);
const num = numbers.pop();

// to view a removed element
console.log(numbers);
console.log(num);

// pushing the popped element from an array to a different array
students.push(num);
console.log(students);

// shift method; to remove the first element of an arry

const colors = ["blue", "yellow", "black", "green"];
console.log(colors);
colors.shift();
console.log(colors);

const col = colors.shift();
console.log(col);

// unshift method : to add a new element to the beginning of an array
const parties = ["PDP", "APGA", "ACCORD", "APC"];
console.log(parties);
const newL = parties.unshift("LP");
console.log(parties);
console.log(newL);

// splice;
//  allows to add values or element into the array. it takes parametrs it takes 3 params  compulsary
//  the first param detamines where the new elements are placed
// the second param detamins the number of elements you want to delete after the new element has been placed
// the 3rd param rep the element you wish to add

const foods = ["rice", "amala", "semo", "iyan", "beans", "eba"];
console.log(foods);
foods.splice(3, 2, "tuwo");
console.log(foods);

const wears = ["gucci", "D&G", "armani", "versace", "nike"];
console.log(wears);
wears.splice(1, 3);
console.log(wears);

// slice method
// it returns a new array that contains element from a certain point

const male = [
  "daudu",
  "ogundiji",
  "gbotija",
  "gbogunmi",
  "baba amoye",
  "affunimawobe",
];
console.log(male);

const warriors = male.slice(1, 4);
console.log(warriors);

// using a negative number start the counting from the back
const majekobaje = male.slice(-2);
console.log(majekobaje);

const elite = male.slice(1);
console.log(elite);

// to string convert array into string
const string = male.toString();
console.log(string);

// includes used to check boolean value
const check = male.includes(1);
console.log(check);

const check1 = male.includes("gbogunmi");
console.log(check1);

// SORT method
// sorts the elements of an array and returs the sorted array in an alphabetical order
male.sort();
console.log(male);

// indexOf method
// it used to search or find the index of the first occurrence of a specified element in an array.
// it searches the array from the beginnig to the end and returns the first occurence of the specified element.
// if the element is not found it retuns "-1" it taks 2 parameters the 1st is the search element, the 2nd position
// you want to start from.
const numbers2 = [1, 2, 4, 9, 1, 4, 2, 9, 8, 7, 12, 20, 11, 1, 2];
console.log(numbers2);

const ser = numbers2.indexOf(2, 4);
console.log(ser);

// lastIndexOf method
// it searches the arry from the end to the beginning and returns the first occurence of the specified element.
const ls = numbers2.lastIndexOf(4, numbers2.length);
console.log(ls);

const ls2 = numbers2.lastIndexOf(41, numbers2.length);
console.log(ls2);

// For Each
// it is the most used method of an array
// performs an action on each element in an array
// you can use for each method to either console.log somthing or change something or sum up something or do something when you dont need the ARRAY back
// forEach is used whenever we want to do something on each elements of an array
// it allows a call back function that allows you to change the original array
const names = ["shola", "bola", "tola"];

// es 6 method
// for (const name of names){
//   console.log(name);
// }

// es5 method
// for (let i=0; i < names.length; i++){
//   console.log(i, names[i]);
// }

// for each method syntax

// contains an anonymous function

const fnc = (value, i, arr) => {
  console.log(value);
  // console.log(i);
  // console.log(arr);
};
// callback function is a function that is been passed as an argument to another function
const forE = names.forEach(fnc);
console.log(forE);
// example
let initBal = 0;
const trans = [42, 45, 26, 4, 13, 16];
trans.forEach((tran) => console.log((initBal += tran)));

names.forEach((name) =>
  console.log(
    `congratulations ${name}, you would be representing the team in uk next month`
  )
);

// Map method()
// is allocates memory in all data stored and returns values
// it  will return a new array while the original one is still in state instead returns a new array

const inventory = [
  { name: "rice", price: 42000 },
  { name: "beans", price: 2500 },
  { name: "small chops", price: 1000 },
  { name: "yam", price: 500 },
  { name: "Garri", price: 1200 },
];

inventory.map((value, i) => {
  console.log(value.name);
  console.log(value.price);
});

const prices = inventory.map((value) => value.price);
console.log(prices);

const itemNames = inventory.map((value) => value.name);
console.log(itemNames);

// Filter
// shows the output in an array
const number = [-20, -45, 43, 30, -1, 23, 34, -50, 44, -75];
console.log(number);
console.log(number.filter((number) => number < 0));

const posNum = number.filter((number) => number > 0);
console.log(posNum);

// complex
for (let i = 0; i < number.length; i++) {
  let negNums = [];

  if (number[i] < 0) {
    negNums.push(number);
    console.log(number[i]);
  }
}

//
const employeeData = [
  { name: "Adekola", ages: 2023 - 1960, yearsSpent: 23 },
  { name: "wale", ages: 2023 - 1970, yearsSpent: 10 },
  { name: "otedola", ages: 2023 - 1980, yearsSpent: 20 },
  { name: "dangote", ages: 2023 - 1963, yearsSpent: 15 },
  { name: "Akosi", ages: 2023 - 1980, yearsSpent: 35 },
  { name: "mutula", ages: 2023 - 1981, yearsSpent: 10 },
];
const toRetire = employeeData.filter((employee) => {
  if (employee.ages >= 60 || employee.yearsSpent >= 35) {
    return employee;
  }
});
console.log(toRetire);

const employeesToRetired = toRetire.map((employee) => {
  return employee.name;
});

console.log(employeesToRetired);

employeesToRetired.forEach((toRetire) => {
  console.log(
    `hey ${toRetire} congratulations on your retirement, your pension will be given asap`
  );
});

// Find
// returns the first value that satisfy the condition and it also taks call back function

const _numbers = [1, 2, 4, 2, 5, 6, 3, 10, 5];

const result = _numbers.find((value) => value < 3);
console.log(result);

const animals = [
  "cat",
  "Dog",
  "cow",
  "ram",
  "goat",
  "lizard",
  "giraffe",
  "Donkey",
  "Duck",
];

const rs = animals.find((animal) => animal.startsWith("D"));
console.log(rs);

const rs2 = animals.find((animal) => {
  return animal.startsWith("G");
});
console.log(rs2);

// some ()
// it takes call back function
// it tsest at least if one elemenet passes the test implemeneted by the provided function
// it returns boolean value
// it cannot modify the arry

const array = [1, 2, 3, 4, 5];

console.log(array.some((el) => el > 5));

// every ()
// checks if all the element passes the test provided in the function
// takes a call back function
console.log(array.every((el) => el > 0));

// reduce ()
// this iterates all the element in an arry and computes them in a single value
// accumulator

let initialValue = 0;
const priceList = [200, 400, 100, 350, 1040, 450];
const total = priceList.reduce((accmulator, currentValue) => {
  return (accmulator += currentValue);
}, initialValue);
console.log(total);

// example2
const totalTransaction = number.reduce((acc, el) => {
  return (acc += el);
});
console.log(totalTransaction);

// concat
const alphabet = ["A", "B", "C", "D"];
const numbers$ = [1, 2, 3, 4, 5];

const numb$alpha = alphabet.concat(numbers$);
console.log(numb$alpha);
