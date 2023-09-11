const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2");
console.log(view2);

const view = document.getElementsByClassName('view')
console.log(view);
const views = document.querySelector('.view')

const div = view1.querySelectorAll('div')

const sameDiv = document.querySelectorAll('div')

const evenDiv = view1.querySelectorAll('div:nth-of-type(2n)')
console.log(evenDiv);

for(let i = 0; i< evenDiv.length; i++){
    evenDiv[i].style.backgroundColor = 'brown'
    evenDiv[i].style.width = '200px'
    evenDiv[i].style.height = '200px'

}

view1.style.display = "flex";
// view1.style.fontSize= "5rem";
view2.style.display = "none";


// 
