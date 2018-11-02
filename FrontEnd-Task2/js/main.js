const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const notifies = document.querySelectorAll('.notify');
console.log(notifies);
let pass = true;

//border: rgba(255, 250, 250, 0.2) solid 1px;
form.addEventListener("submit", x=>{
  const firstName = x.target[0];
  const lastName = x.target[1];
  const password = x.target[2];
  const email = x.target[3];
  const phoneNumber = x.target[4];
  const address = x.target[5];
  const postal = x.target[6];

  if(firstName.value == ''){
    firstName.setAttribute('style','border: rgba(255, 0, 0, 0.2) solid 1px;');
    firstName.focus();
    notifies[0].setAttribute('style','color:red');
    pass = false;
  }

  if(lastName.value == ''){
    lastName.setAttribute('style','border: rgba(255, 0, 0, 0.2) solid 1px;');
    pass = false;
    firstName.focus();
  }

  if(password.value == ''){
    password.setAttribute('style','border: rgba(255, 0, 0, 0.2) solid 1px;');
    pass = false;
    firstName.focus();
  }

  if(email.value == ''){
    email.setAttribute('style','border: rgba(255, 0, 0, 0.2) solid 1px;');
    pass = false;
    firstName.focus();
  }else{

  }
  x.preventDefault()
});



