const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const notifies = document.querySelectorAll('.notify');
console.log(notifies);
let pass = true;

//border: rgba(255, 250, 250, 0.2) solid 1px;
form.addEventListener("submit", x=>{
  pass = true;
  const firstName = x.target[0];
  const lastName = x.target[1];
  const password = x.target[2];
  const email = x.target[3];
  const phoneNumber = x.target[4];
  const address = x.target[5];
  const postal = x.target[6];

  if(firstName.value == ''){
    firstName.setAttribute('style','border: rgba(255, 0, 0, 0.2) solid 1px;');
    notifies[0].setAttribute('style','color:red');
    if(pass){
      firstName.focus();
    }
    pass = false;
  }

  if(lastName.value == ''){
    lastName.setAttribute('style','border: rgba(255, 0, 0, 0.2) solid 1px;');
    notifies[1].setAttribute('style','color:red');
    if(pass){
      lastName.focus();
    }
    pass = false;
  }

  if(password.value == ''){
    password.setAttribute('style','border: rgba(255, 0, 0, 0.2) solid 1px;');
    if(pass){
      password.focus();
    }
    pass = false;
    notifies[2].setAttribute('style','color:red');
  }

  if(email.value == ''){
    email.setAttribute('style','border: rgba(255, 0, 0, 0.2) solid 1px;');
    if(pass){
      email.focus();
    }
    pass = false;
    notifies[3].setAttribute('style','color:red');
  }else{
    if(email.value[0]=='@' || email.value[email.value.length-1]=='@'  ||
       email.value[0]=='.' || email.value[email.value.length-1]== '.' ||
       !RegExp('@').test(email.value) || RegExp(' ').test(email.value)){
      if(pass){
        email.focus();
      }
      pass = false;
    }
  }

  if(postal.value!=''){
    if(postal.value.length != 5 || (postal.value).match(/[^0-9]/g)){
      postal.setAttribute('style','border: rgba(255, 0, 0, 0.2) solid 1px;');
      if(pass)
      {
        postal.focus();
      }
      pass = false;
    }
  }

  if(phoneNumber.value!=''){
    if(!phoneNumber.value.match(/^\+358[0-9]{9}$/)){
      if(pass)
      {
        phoneNumber.focus();
      }
      pass = false;
    }
  }

  if(!pass){
    x.preventDefault()  ;
  }

});



