'use strict';

const frm = document.querySelector('#mediaform');
const img = document.querySelector('#image');
const aud = document.querySelector('#aud');
const vid = document.querySelector('#vid');

fetch('/node/grabpic/')
.then((res)=>{return res.json();})
.then(json => {
  console.log(json);
  const main = document.querySelector('main');
  for (let i = 0; i<json.length;i++){
    const div = document.createElement('div');
    const img = document.createElement('img')
    img.setAttribute('src',`./img/original/${json[i].original}`);
    div.appendChild(img);
    main.appendChild(div);
  }
});

const sendForm = (evt) => {

  evt.preventDefault();
  const fd = new FormData(frm);
  const settings = {
    method: 'post',
    body: fd,
  };

  fetch('/node/upload/', settings).then((response) => {
    console.log(response);
    return response.json();
  }).then((json) => {
    console.log(json);
  //  if (json.mimeType.includes('image')) {
  //    img.src = json.url;
  //  } else if (json.mimeType.includes('audio')) {
  //    aud.src = json.url;
  //  } else {
  //    vid.src = json.url;
    }
  );
  };

frm.addEventListener('submit', sendForm);
