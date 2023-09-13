//Asynchronus JavaScipt
// interval and Timer
//set interval
// setInterval(() => {
//   console.log("hello world");
// }, 1000);

const myInterval = setInterval(() => {
  console.log("hello world");
}, 2000);

clearInterval(myInterval);

setTimeout(() => {
  console.log("Welcome to DLT Africa");
}, 5000);

setTimeout(() => {
  console.log("Lonley at the top");
}, 5000);
console.log("gben gben gben gben");

//Exampel 2

// setTimeout(firstMessage,3000)
// setTimeout(secondMessage,9000)
// setTimeout(thirdMessage,6000)
// function firstMessage () {
//   alert (`Hey Guys Its A Raining Day`)
// }
// function secondMessage () {
//   alert (`Cold everywhere i need cold tea`)
// }
// function thirdMessage () {
//   alert (`Muhamed stingy... Kanas look away`)
// }

// // const button = document.getElementsById('myButton')
// document.getElementById('myButton').onclick = function () {
//     clearTimeout(timer1)
//     clearTimeout(timer2)
//     clearTimeout(timer3)

//     alert(`Yoga thanks for coming`)
// }

// let supreme = 'small chops';
// let price = 300

// let timer1 = setTimeout(firstMessage,3000,supreme,price)
// let timer2 = setTimeout(secondMessage,9000)
// let timer3 = setTimeout(thirdMessage,6000)
// function firstMessage (supreme,price){
//   alert(`hi supreme my ${supreme} has the lowest price of ${price} in the markrt`)
// }

// let count = 0

// let max = window.prompt(`Count up to #`);
// max = Number(max)

// const myTimer = setInterval(countUp, 1000);

// function countUp () {
//     count +=1
//     console.log(count);

//     if(count >= max) {
//         clearInterval(myTimer)
//     }
// }

//errors object

try {
  console.lag();
} catch (error) {
  console.log(error);
} finally {
  // show window prompt
  // try{
  //    let x = window.prompt('Enter #')
  //    x = Number(x)

  //    if(isNaN(x)) throw "That Was not a number"

  //    if(x == "") throw "kindly input a valid number"

  //    console.log(`${x} is a number`);

  // }

  // catch (err){
  // console.log(err);
  // }

  console.log(`congratulations🥳💃`);
}
///Date

let date = new Date();

let year = date.getFullYear();
console.log(year);
let month = date.getMonth();
console.log(month);
let dayOfTheWeek = date.getDay();
console.log(dayOfTheWeek);
let hours = date.getHours();
console.log(hours);

const myLabel = document.getElementById("myLabel");
myLabel.innerText = formatTime(date);

function formatDate(date) {
  let hours = date.getHours();
  let month = date.getMonth() + 1;
  let dayOfTheWeek = date.getDay() + 1;

  return `${hours}/ ${month}/${dayOfTheWeek}`;
}

function formatTime(date) {
  let hours = date.getHours();
  let minute = date.getMinutes();
  let seconds = date.getSeconds();

    let amOrpm = hours >= 12 ? "pm" : "am"

    return `${hours} : ${minute} : ${seconds} ${amOrpm}`
}

date = date.toLocaleString();
console.log(date);

// const myLabel = document.getElementById('myLabel')
// myLabel.innerText = date
