console.log("yooooo")


// TERNARY OPERATORS
const age = 18;

if (age >= 18) {
    console.log('You Can Drive')
}else{
    console.log('You are underage');
}

age >= 18? console.log('You can drive'): console.log('You Are underage');

const gender = "female";
// if (gender=== "male") {
//     console.log('ola is a boy');
// }else{
//     console.log("bola is a girl");
// }

gender === "male"? console.log("muaz is a boy") :console.log( 'muizah is a girl');

// LOOPING
//WHILE LOOP

let index = 0;
while (index < 10){
    console.log(index);
    index++
}

let loadding = 0;
while (loadding < 100) {
    console.log('wEBSITE LOADING');
    loadding ++
    
}

// for loop
for (let kanas = 2; kanas < 10; kanas++) {
  console.log(kanas);  
}

const cohorts = ['kenny', 'supreme','ola1', 'ola','mm', 'Rocco','Nas']
    for( cohort of cohorts) {
        console.log(`Hello Mr ${cohort}`);
        if (cohort === "ola"){
            console.log('in the list');
        }
    }
  