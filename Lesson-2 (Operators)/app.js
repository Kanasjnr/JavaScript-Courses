console.log("Hello World");


// Arithemetic  Operators
// addition
const a = 4
const b = 5
let result = 0
result = a+b
console.log(result);
// subtraction
result = a-b
console.log(result);
// multiplication
result = a*b
console.log(result);

// comparison operator

// Greater than or equal to
const _a =10
const _b = 10
console.log(_a >= _b);
// Equals to equal to
const $a =10
const $b = 10
console.log($a == $b);
// Less than or equal to
const c =15;
const d =5
console.log(c <= d);
// not equal to
const $c =15;
const $d =5
console.log($c != $d);

// Strict  VS loose Equality

// strict Equality (===)
console.log(5===5);
console.log(10=== '10');
console.log('20' === 20);
console.log(20 === 20);
console.log(false === false);
console.log(false === "false");
console.log(true === 1);
console.log(0 === "");

// STRICT NOT EQUALITY
const f = 10;
const g = 10;
console.log(f !== g);

// Loose Equality (==)
console.log(5 == "5");
console.log(true == 1);
console.log("" == "0");
console.log(""== 0);
console.log(false == 'false');

// Logical Operators (AND (&&),OR (||),NOT (!))

// AND (&&)
console.log(true && true && true);
console.log(true && true && false);

// OR (||)

console.log(false || false || false);
console.log(false || true || false);

// NOT (!)
console.log(!true);

// ASSIGNMENT OPERATORS (+=, -=, *=)
let number= 5;
number += 5
console.log(number);

number *=5
console.log(number);
number -=5
console.log(number);
number/=5
console.log(number);

let salary = 2500;
  moresalary = 850;
  let total = salary+moresalary
console.log(total);

const thisYear = 2023;
 const birthYear = 2004;
let age = thisYear - birthYear;
console.log(age);

let johnAge = 18;
let johnMumAge = johnAge*2;
console.log(johnMumAge);

const massMark = 78;
const massJohn = 92;

const heightOfMark = 1.69;
const heightOfJohn = 1.95;

let bmiMark = massMark / heightOfMark ** 2;
let bmiJohn = massJohn / heightOfJohn ** 2;
console.log(bmiJohn);
console.log(bmiMark);
const highestBmi = bmiMark > bmiJohn
console.log(highestBmi)

