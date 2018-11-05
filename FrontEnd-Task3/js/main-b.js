// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array:
/*
<li>

      </li>
*/

fetch('images.json')
  .then((response) => {
    return response.json()})
  .then((data)=>{
      for(let i = 0;i<data.length;i++){
        console.log(data[i]);
        document.querySelector('ul').innerHTML += `<li><figure>
              <a href="img/original/${data[i].mediaUrl}"><img src="img/thumbs/${data[i].mediaThumb}"></a>
              <figcaption>
                 <h3>${data[i].mediaTitle}</h3>
              </figcaption>
       </figure></li>`
      }
    });
// After the loop print the HTML into <ul> element using innerHTML.
