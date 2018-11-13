//-- 1st
const strawberry = document.getElementById("berry");
strawberry.style.backgroundColor='red';
console.log('I found the strawberry');
console.log(strawberry);
console.log(strawberry.innerHTML);

//--2nd
const orange = document.querySelector('li[data-foodtype="squishy"]');
orange.style.backgroundColor='orange';
console.log('I found the orange');
console.log(orange);

//--3rd.1
const fruits = document.getElementsByTagName('li');
console.log(fruits);

//--3rd.2
for(let i=0;i<fruits.length;i++){
  fruits[i].style.listStyleType = 'none';
  fruits[i].style.width = '100px';
  if(fruits[i].innerHTML == 'Pear'){
    fruits[i].style.backgroundColor = 'green';
  }
}

//--4th.1
const fruitList = document.querySelectorAll('li');
console.log(fruitList);

//--4th.2
fruitList.forEach((x)=>{
  x.style.border = '1px black solid';
});