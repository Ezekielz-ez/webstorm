// Create function 'showImages' which
// adds the loaded HTML content to <ul> element

const request = new XMLHttpRequest();
request.onreadystatechange = function() {
  const ul = document.querySelector("ul");
  if (this.readyState == this.DONE && this.status == 200) {
    ul.innerHTML = this.responseText;
  }
};
request.open('GET','images.html', true);
request.send();


