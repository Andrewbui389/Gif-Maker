const img = document.querySelector('.imageBox');  
let buttonClick = document.querySelector('#newGif')
buttonClick.addEventListener('click', () =>{
  let searchValue = document.querySelector('#searchResults').value
  fetch(``, {mode: 'cors'})
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    let ranInt = Math.floor(Math.random() * response.data.length)
    return(response.data[ranInt].images.original.url);
  })
  .then((response) => {
    img.src = response
  });
})
