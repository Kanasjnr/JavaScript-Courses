console.log("Hello My Gee 😉");

// IF AND ELSE
const eligibleAge = 18;
if (eligibleAge > 18){
    console.log('You are eligibale to vote');
} else if (eligibleAge === 18) {
    console.log(' congratulations You are eligibale to vote');
}else{
    console.log('ooops come back yext year');
}

const firstName = "kenny";
const job = "Driver"

if (job === "mechanic") {
    console.log(`${firstName} is good ${job}`);
} else if (job === "Driver") {
    console.log(`${firstName} is an expert driver`);
} else if (job === "teacher") {
    console.log(`${firstName} is a professional`);
} else if (job === "carpenter") {
    console.log(`${firstName} is good and an expert`);
} else if (job === "Software Engineer") {
    console.log(`${firstName} is a good programmer`);
} else{
    console.log(`you are a lazy man`);
}

// class Work
const time = 11;
if (time < 10 ){
console.log("Good morning");
} else if (time > 8){
    console.log("Good Day");
}else{
    console.log("Good Evening");
 }

//  truthy and falsy value

// truthy values
if ('true') {
    console.log('TRUE');
}else{
    console.log('FALSE');
}

if ('10') {
    console.log('TRUE');
}else{
    console.log('FALSE');
}

if ([]) {
    console.log('TRUE');
}else{
    console.log('FALSE');
}

if ({}) {
    console.log('TRUE');
}else{
    console.log('FALSE');
}

if (function () {}) {
    console.log('TRUE');
}else{
    console.log('FALSE');
}
 
// falsy values
if ('') {
    console.log('TRUE');
}else{
    console.log('FALSE');
}

if (false) {
    console.log('TRUE');
}else{
    console.log('FALSE');
}

if (0) {
    console.log('TRUE');
}else{
    console.log('FALSE');
}

if (null) {
    console.log('TRUE');
}else{
    console.log('FALSE');
}

if (NaN) {
    console.log('TRUE');
}else{
    console.log('FALSE');
}

if (undefined) {
    console.log('TRUE');
}else{
    console.log('FALSE');
}

const dogs = 5;
if (dogs < 0) {
    console.log(`you have ${dogs} dogs`);
}else{
    console.log(`you have no dogs`);
}

// Switch statement
const superHero = 'Iron Man';
switch (superHero){
    case'Iron Man':
    console.log('I am Iron Man')
    break;
    case 'Thor':
    console.log('That is my hammer!')
     break;
     case 'Captain America':
    console.log('Never Give Up')
     break;
    case 'Black Widow':
     console.log('one shoot one kill')
      break;
    default: console.log('Enter a Valid Superhero Name')
}

const daysOfTheWeek = 'saturday';
switch (daysOfTheWeek) {
    case 'monday':
        console.log('first day of the week');
        break;
case 'tuesday':
console.log('second day of the week')
break;
case 'wednesday':
        console.log('third day of the week');
        break;
  case 'thursday':
        console.log('fourth day of the week');
        break;
        case 'friday':
            console.log('fifth day of the week');
            break;  
            case 'saturday':
                console.log('owanbe 🥳🥳');
                break;   
                case 'sunday':
        console.log('to rest');
        break;
    default:console.log('Not a day of the week');
      
}

// logical operators
const age = 19;
const isCool = true;

if (isCool && age > 18) {
    console.log('You May Enter');
}else{
    console.log('You cannot Enter');
}