// Arrow function
const name1 = () => {
  console.log("hey");
};
name1();

// PARAMS AND ARGUMENT

const sayHi = (firstName) => {
  console.log(`Hi, ${firstName}`);
};
sayHi("Joe");

const logAge = (name, age) => {
  console.log(`${name} is ${age}years old`);
};
logAge("Joe", 25);

// TRICKY PARTS
// Scope

const name = "John";

const logName = () => {
  console.log(name);
};
logName();

const name4 = "mm";
const globalScope = () => {
  console.log(name4);
};

const globalScope2 = () => {
  console.log(name4);
};

globalScope();

const name5 = "Basit";
const logName2 = () => {
  const name5 = "kans";
  console.log(name5);
};
logName2();
console.log(name5);

// LOCAL SCOPE
const someFunction = () => {
  const name = "frm";
  console.log(name);
};

someFunction();

const someFunction1 = () => {
  const nickName = "Kanas";
  console.log(nickName);
  const anotherFunction = () => {
    console.log(nickName);
  };
  anotherFunction();
};
someFunction1();

const someFunction2 = () => {
  const name = "john";
  console.log(name);
};
const anotherFunction1 = () => {
  const name = "kanas";
  console.log(name);
};
someFunction2();
anotherFunction1();

// BLOCK SCOPE
if (true) {
  const name = "suberu";
  console.log(name);
}

// HOISTING

var HOISTING;
console.log(HOISTING);

function hoist() {
  var message;
  console.log(message);
}
hoist();

console.log(num);
var num;

function hoisted() {
  var message = "hoisting is cool";
  console.log(message);
}
hoisted();

hosting();

function hosting() {
  console.log("this function has been hoisted");
}


// clousure
const outer = () => {
  const outerVar = "hello";
  const inner = () => {
    const innerVar = "Hi";
    console.log(outerVar, innerVar);
  };
  return inner;
};

const innerFn = outer();
innerFn();

const innit = () => {
    const hobby = 'Learning Js'
    const displayHobby = () =>{
        console.log(hobby);
    }
    displayHobby()
}
innit()




