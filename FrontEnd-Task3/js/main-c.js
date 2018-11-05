// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array: 
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/

fetch('images.json')
.then((response) => {
  return response.json()})
.then((data)=>{
  for(let i = 0;i<data.length;i++){
    const li = document.createElement('li');
    const figure = document.createElement('figure');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const figcaption = document.createElement('figcaption');
    const h3 = document.createElement('h3');

    a.setAttribute('href',`img/original/${data[i].mediaUrl}"`);
    img.setAttribute('src',`img/thumbs/${data[i].mediaThumb}`);
    a.appendChild(img);
    figure.appendChild(a);

    h3.innerHTML = data[i].mediaTitle;
    figcaption.appendChild(h3);
    figure.appendChild(figcaption);

    li.appendChild(figure);
    document.querySelector('ul').appendChild(li);
  }
});
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element
