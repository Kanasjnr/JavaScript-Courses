//Higher Order Function
//* For Each Method
//* For Filter Method
//* For Map Method
//* For Sort Method
//* For Reduce Method

// Why function Takes Pram?
function double(n) {
  return n * 2;
}
console.log(double(5));

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//for loop method
for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}

//for Each Method
companies.forEach(function (Company) {
  console.log(Company);
  console.log(Company.name);
});

// let canDrink = []
// for (let i = 0; i< ages.length; i++) {
//     if(ages [i] >= 21){
//         canDrink.push(ages[i])

//     }

// }
// console.log(canDrink);

// Filter
// const canDrink = ages.filter(function(age){
//     if(age>=21){
//         return true
//     }
// })
// console.log(canDrink);

const canDrink = ages.filter((age) => age >= 21);
console.log(canDrink);

const retailCompany = companies.filter(function (Company) {
  if (Company.category == "Retail") {
    return true;
  }
});
console.log(retailCompany);

const retailCompanies = companies.filter(
  (Company) => Company.category === "Retail"
);
console.log(retailCompanies);

const lasted10Years = companies.filter(
  (Company) => Company.end - Company.start >= 10
);
console.log(lasted10Years);

// map method

const companies1 = companies.map(function (Company) {
  return Company.name;
});
console.log(companies1);
// map through compant name,start and end using function decleration
const companies2 = companies.map(function (Company) {
  console.log(Company.name, Company.start, Company.end);
});

const companies3 = companies.map(
  (Company) => `${Company.name} [${Company.start} - ${Company.end}]`
);

console.log(companies3);

// multiplying the root of ages

const ageMap = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);
console.log(ageMap);

// Sort Mthod

// const sortedCompanies = companies.sort(function(c1,c2) {
//     if(c1.start > c2.start) {
//         return 1
//     }else{
//         return -1
//     }
// })
// console.log(sortedCompanies);

const sort = companies.sort((c1, c2) => c1.start > c2.start);
console.log(sort);

const age1 = ages.sort((a, b) => a - b);
console.log(age1);

//************ reduce method
// for loop method
let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
  ageSum += ages[i];
}
console.log(ageSum);

// reduce method
const ageSum1 = ages.reduce(function (total, age) {
  return total + age;
}, 0);
console.log(ageSum1);

//Using Arrow Function

const ageSum2 = ages.reduce((total, age) => total + age, 0);
console.log(ageSum2);

const totalYears = companies.reduce(
  (total, Company) => total + (Company.end - Company.start),
  0
);
console.log(totalYears);

// combination of all methods

const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);
console.log(combined);

// Spead And Rest Operators (...)

const add = (a, b) => {
  return a + b;
};
console.log(add(2, 2));

// rest operator

const addNo = (...args) => {
  return args.reduce((acc, val) => acc + val);
};
console.log(addNo(2, 2, 2, 2));

// spred operator
const numbers = [1, 2, 3, 4, 5];
const newNumber = [...numbers, 6];
console.log(newNumber);

// Object And Array destructuring

const persons = {
  firstName: "Gary",
  lastName: "Vee",
  car: {
    color: "red",
    wheel: 4,
  },
  animals: {
    dog: {
      name: "fluffy",
      age: 20,
    },
    cat: {
      name: "kitty",
      age: 10,
    },
  },
};

// destructuring

const {firstName, lastName, car:{color,wheel}, animals: {cat, dog}} = persons
console.log(persons);

// Aray
const intro = ["Hello",'i','am','sarah']
console.log(intro);

const [greeting,,,name] = intro
console.log(greeting, name);