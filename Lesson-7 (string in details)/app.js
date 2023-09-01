console.log("hi peeps");

const age = 18;
if (age > 18) {
  console.log("you are mature");
} else if (age === 18) {
  console.log("okay... you are mature enough");
} else {
  console.log("you are not mature");
}

const myGhees = "";
switch (myGhees) {
  case "Muhammed":
    console.log("best friend");
    break;
  case "rocco":
    console.log("agba");
    break;
  default:
    console.log("you are not one of them");
}

myGhees === "Muhammed" ? console.log("best friend") : console.log("agba");

//  STRING IN DETAILS
const single = "this is a single string written inside of soingle qoutes ";
const double = "this is a string  written inside of double qoutes ";
const bacticks = `this is a string  written inside of bacticks qoutes`;

console.log(single);
console.log(double);
console.log(bacticks);

const single1 = "${2+2}";
const double2 = "${2+2}";
const bacticks2 = `${2 + 2}`;

console.log(single1);
console.log(double2);
console.log(bacticks2);
// STRING INSIDE STRING

const greetings = " Hi, I'm john";
console.log(greetings);
// STRING WITH ESCAPE CHARACTER
const greetings1 = "Hi, I'm john call me 'johnny'";
console.log(greetings1);

// STRING LENGTH
const name = "Kanas, alimi muaz";
console.log(name.length);

const firstLetter = name[0];
console.log(firstLetter);
// STRING CASE
const mixedStringCase = "Hello, How Are you?";
const lowerCase = mixedStringCase.toLowerCase();
const upperCase = mixedStringCase.toUpperCase();
console.log(lowerCase);
console.log(upperCase);

// SEARCHING FOR A SUBSTRING

// INDEX OF ()
const exampleStr = "I love cat, he said, cat are great!";
console.log(exampleStr.indexOf("cat"));
console.log(exampleStr.indexOf("dog"));

const hobbies = "i love html, css and javascript";
const index = hobbies.indexOf("javascript");
console.log(index);

// Last index of ()
const myHobbies = "coding,reading,sleeping,chatting";
console.log(myHobbies.lastIndexOf("chatting"));

// INCLUDE
const fruits = "Apple, Pawpaw, Orange and mango";
console.log(fruits.includes("Pawpaw"));
console.log(fruits.includes("cashew"));

// Start with
const text = "Hello, world, welcome to the universe";
console.log(text.startsWith("Hello"));

// End With
const cohorts = "supreme, kenny, kanas and rokeeb";
console.log(cohorts.endsWith("supreme"));

// class work
const guestList = "ola of lagos, rocco, kenny, kanas and muhammed";
console.log(guestList.length);
const upperCase1 = guestList.toUpperCase();
console.log(upperCase1);

// SUBSTRING
// SLICE METHOD

const exampleString = "hotdog";
console.log(exampleString.slice(3));

const exampleString1 = "pineapple";
console.log(exampleString1.slice(4));


// split method
const sentence = 'The quick brown fox jumped over the lazy dog';
console.log(sentence.split(' '));

// reverse method
const name2 = "Rocco and Muhammed"
const reverse = name2.split(' ') .reverse() .join (' ');
console.log(reverse);

const cohort3 = 'muaz, Quadri supreme kenny muhammed rocco kanas';
const result = cohort3.split(' ').reverse().join();
console.log(result);

// repeat method
const dogSays = 'woof';
console.log(dogSays.repeat(10));


// trim method
const str = '      @example.gmail.com        '
console.log(str.trim());

// class work
const footballClubs = "Bayern,Arsenal,Watford,everton"
const clubs = footballClubs.split(',').reverse().join();
console.log(clubs);

const cow = 'muuu'
console.log(cow.repeat(5));

const dinner = 'i ate rice for dinner yesterday'
console.log(dinner.slice(6,10));