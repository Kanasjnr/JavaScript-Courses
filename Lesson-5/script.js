console.log("hiiiii");

// FUNCTIONS

// function decleration

function sum(number) {
  return number * number;

}
// functions Call
 const result = sum(5)
 console.log(result);

function sum2(numb){
    return numb+numb
}
const result1 =sum2(15)
console.log(result1);

function sum3 (){
    return 9+9
}
console.log(sum3 ());
//  Decleration And Invoking Function

// function Declaration
function name (){
    statement
}

// Function Expession
// const name = function(){
// statement

// Example 
function sayHi(name) {
    console.log(`hello ${name}`);
}
sayHi ('Kanas')

// Example 2
function add (a,b){
    return a+b
}
const sum1 = add(5,6)
console.log(sum1);
// Example3
function test (){
    return true;
}

const bool = test();
console.log(bool)

function sum2 (num1,num2 = 0){
    return num1 + num2;
}

console.log(sum2 (7));
// OR
function sum3(c,d) {
    if (d === undefined) {
        return c+c;
    }
}

console.log(sum3(8));

// function expression
const Knas = function (e, f){
    return e * f
}
const addUp = Knas(2,2)
console.log(addUp);

// Example 2
const nas = function ( g,h){
    return g / h
}
const rocco = nas(20 ,10)
console.log(rocco);

// Arrow function
const muhammed = ( x,y) =>{
    return x+y
}
const mm = muhammed(10,10)
console.log(mm);

const dlt = (tutor, student) =>{
    const tutor1= 'lagabaja';
    const tutor2= 'naheem';
    const student1='dada';
    const student2= 'daudu';
    return (`Mr ${tutor2} is the tutor, while ${student2} is part fo the student`)
}
const name4= dlt (' naheem', "daudu")
console.log(name4);