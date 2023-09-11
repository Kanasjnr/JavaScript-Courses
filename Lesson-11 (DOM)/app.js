console.log("how are you doing my fans");

const el1 = document.getElementsByClassName("heading");
const el2 = document.getElementById("heading1");
const header = document.getElementsByTagName("h1");
const lastHeader = document.querySelector(".heading2");
const lastHead = document.querySelector("#para");
const all = document.querySelectorAll("h1 .heading");

console.log(el1);

const work = document.getElementsByClassName("text");
const text = document.getElementById("headingText");
const select = document.getElementsByTagName("h2");


const button = document.querySelector('button');

button.addEventListener('click', () =>{
    alert('Welcome Back')
})
const menu = document.getElementsByClassName("menu-item");

const menuClicked = (currEl) => {

  for (let i = 0; i < menu.length; i++) {
    menu[i].classList.remove("active");     //to remove class ".active"

  }
  event.target.classList.add('active')
};




// *****************CREATE ELEMENT************************
const heading = document.createElement('h1')
console.log(heading);

const body = document.querySelector('body')
console.log(body);

body.appendChild(heading)

heading.innerText = "Hello World!"




const favSub = document.querySelector('.fav-subject')
favSub.remove()  //to remove 

// new keyword
const arr2 = [1,2,3]
console.log(arr2);
const arr3 = new Array(1,2,3)
console.log(arr3);



const state =  {}

const state1 = new Object()

state.bestState = " Lagos" 
console.log(state);
state1.bestState = "abuja"
console.log(state1);


const MyDate = new Date ('september 8, 2023')
console.log(MyDate.getFullYear());


console.log(Array);
console.log(Object);
console.log(Number);
console.log(Date);