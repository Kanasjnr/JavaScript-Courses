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

const male = ['daudu','ogundiji','gbotija','gbogunmi','baba amoye','affunimawobe']
console.log(male);

const warriors = male.slice(1,4);
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
const check = male.includes(1)
console.log(check);

const check1 = male.includes('gbogunmi');
console.log(check1);

// SORT method
// sorts the elements of an array and returs the sorted array in an alphabetical order
male.sort()
console.log(male);

// indexOf method
//  used to search or find the index of the first occurrence of a specified element in an array. it searches the arry from the beginnig to the end and returns the first occurence of the specified element. if the element is not found it retuns "-1" it taks 2 parameters the 1st is the search element, the 2nd position you want to start from.
const numbers2 = [ 1,2,4,9,1,4,2,9,8,7,12,20,11,1, 2]
console.log(numbers2);
 const ser = numbers2.indexOf(2,8)
console.log(ser);

// lastIndexOf method
// it searches the arry from the end to the beginning and returns the first occurence of the specified element.
 const ls = numbers2.lastIndexOf(4, numbers2.length)
 console.log(ls);

 const ls2 = numbers2.lastIndexOf(41, numbers2.length)
 console.log(ls2)

// For Each