const img = document.querySelector('.imageBox');  
let buttonClick = document.querySelector('#newGif')
buttonClick.addEventListener('click', () =>{
  let searchValue = document.querySelector('#searchResults').value
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=Hy82xEOEZLNT2Ky2z0S4X4Uy0cNjwMjs&q=${searchValue}&limit=&offset=&rating=r&lang=en`, {mode: 'cors'})
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