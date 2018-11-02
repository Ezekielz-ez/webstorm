document.querySelector('#test').innerHTML = 'I DID IT again';
for(let i=0; i<document.querySelectorAll('.example').length;i++){
  document.querySelectorAll('.example')[i].innerHTML = ':????'
}

for(let i of document.querySelectorAll('.example')){
  i.setAttribute('style','color:blue');
}
document.querySelector('p:nth-child(3)').setAttribute('title','8');

document.querySelectorAll('.example').forEach(element =>
{
  element.setAttribute('style','background-color: red');
  element.addEventListener('click',(evt)=>{evt.currentTarget.setAttribute('style','background-color:green');})
});

//const greenize = (input) => input.setAttribute('style','background-color:green');
