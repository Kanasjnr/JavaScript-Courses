console.log("yo.....");

const myBio = {
  firstName: "Nasihudeen",
  lastName: "Jimoh",
  middleName: "Adegboyega",
  Age: 19,
  others: {
    hobby: "watching football",
    footBallClub: "manchester united",
  },
};
console.log(myBio);
console.log(myBio.others);
console.log(myBio["others"]);
console.log(Object.keys(myBio));
console.log(Object.values(myBio));
console.log(Object.entries(myBio));

//"This" KeyWord
function sentence(words) {
  this.words = words;
  console.log(this);
}

const firstString = new sentence("hello we are learning about this keyword");

// Example 2
const car1 = {
  color: "green",
  brand: "Chevrolet",
  wheels: 4,
};

console.log(car1);

function car(color, brand, wheels) {
  this.color = color;
  this.brand = brand;
  this.wheels = wheels;

  console.log(this);
}
const blueCar = new car("blue", "BMW", 4);
const redCar = new car("red", "ferrari", 4);

function player(name, Age, team, jerseyNumber) {
  this.name = name;
  this.Age = Age;
  this.team = team;
  this.jerseyNumber = jerseyNumber;

  console.log(this);
}
const myPlayer = new player("Marcus Rashford", 25, "manchester united", 10);

const myPlayer1 = new player("messi", 36, "inter miami", 10);
const myPlayer2 = new player("sterling", 28, "chelsea", 7);

function minmax(array) {
  let mathMin = Math.min(...array);
  let mathMax = Math.max(...array);
  return { mathMin, mathMax };
}

console.log(minmax([1, 2, 3, 4]));

//Class
class Person {
  constructor(name, Age, isWorking) {
    this.name = name;
    this.Age = Age;
    this.isWorking = isWorking;
    console.log(this);
  }
}
const personInfo = new Person("supreme", 30, true);

//Example 2
class Car {
  constructor(year, color, brand, wheels) {
    this.year = year;
    this.color = color;
    this.brand = brand;
    this.wheels = wheels;
    console.log(this);
  }
}

const carDetails = new Car(2023, "black", "benz", 4);

class Player {
  constructor(name, Age, team, jerseyNumber) {
    this.name = name;
    this.Age = Age;
    this.team = team;
    this.jerseyNumber = jerseyNumber;

    console.log(this);
  }
}
const goodPlayer = new Player("Marcus Rashford", 25, "manchester united", 10);

//WEB STORAGE API
// set item()
// get item()

localStorage.setItem("name", "John Doe");
let result = document.getElementById("result").innerHTML = localStorage.getItem("name");
console.log(result);

sessionStorage.setItem("name", "Ola");
let demo = document.getElementById("demo").innerHTML = sessionStorage.getItem("name");
console.log(demo);
