 const display_card = document.querySelector('.display_card');
 console.log(display_card);
 var movies = sessionStorage.getItem('movies');
 movies = JSON.parse(movies);
 console.log(movies);

 for (var movie of movies) {
    // console.log(img);
  addcard(movie);
}

 function addcard(data) {
    const div = document.createElement("div");
    
    display_card.insertAdjacentHTML('beforebegin', `<div class="cards">
    <div class="image">
      <img src="${data.ImageUrl}" width="100%" height="50%" />
    </div>
    <div class="title">
      <h1>${data.Title}</h1>
    </div>
    <div class="des">
      <p>${data.Actors}</p>
      <h1>&#9734; &#11088;${data.Rating}</h1>
    </div>
  </div>`);
  }