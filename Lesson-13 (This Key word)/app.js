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
//more examples

class Person1 {
  constructor(name, age, isBlack) {
    (this.name = name), (this.age = age), (this.isBlack = isBlack);
  }
}
const user = new Person1("muhammed", 85, false);
const user1 = new Person1("Muh", 45, true);
const user2 = new Person1("supreme", 15, false);
const user3 = new Person1("Quadri", 85, false);
console.log(user);
console.log(user1);
console.log(user2); 
console.log(user3);

const createPerson = (name, age, isActive) => {
  return { name, age, isActive };
};

const user7 = createPerson("kenny", 30, true);
const user8 = createPerson("kanas", 30, true);

console.log(user7);
console.log(user8);

class Car7 {
  numberOfCars = 0;
  constructor(model) {
    this.model = model;
    this.numberOfCars += 1;
  }
  static startRace() {
    console.log("3....2..1..GO!");
  }
}
const car3 = new Car7("Totota");
const car4 = new Car7("Volvo");
const car5 = new Car7("Benz");

console.log(car4.numberOfCars);
console.log(car3.numberOfCars);
console.log(car5.numberOfCars);
Car7.startRace();

//********************INHERITANCE*************
class Animal {
  alive = true;

  eat() {
    console.log(`This ${this.name} can eat`);
  }

  sleep() {
    console.log(`This ${this.name} can sleep`);
  }
}

class Rabbit extends Animal {
  name = "rabbit";

  run() {
    console.log(`This ${this.name} can run`);
  }
}

class Monkey extends Animal{
  name = 'monkey';
  
  climb() {
    console.log(`This ${this.name} can climb`);
  }
}

const rabbit = new Rabbit();

rabbit.eat();
rabbit.sleep();
rabbit.run()

const monkey = new Monkey();
console.log(rabbit.alive);
console.log(monkey.alive);
monkey.climb()
monkey.sleep()
monkey.eat()

//Getter and Setter
class Carr {
  constructor(power) {
    this._gas = 25;
    this._power = power;
  }

  get power() {
    return `${this._power} hp`;
  }
  
  get gas() {
    return `${this._gas}L (${this._gas / 50 * 100} %)`
  }
set gas(value){

  if (value > 50 ){
    value = 50
  }else if (value < 0) {
    value =0
  }
  this._gas = value
}

}


let carr1 = new Carr(400)
carr1.gas = 100
console.log(carr1.power);
console.log(carr1.gas);



//WEB STORAGE API
// set item()
// get item()

localStorage.setItem("name", "John Doe");
let result = (document.getElementById("result").innerHTML =
  localStorage.getItem("name"));
console.log(result);

sessionStorage.setItem("name", "Ola");
let demo = (document.getElementById("demo").innerHTML =
  sessionStorage.getItem("name"));
console.log(demo);
