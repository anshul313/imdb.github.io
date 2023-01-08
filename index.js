const apikey = "643fcbba";
const button = document.querySelector("#info");
var favourite_movie = [];
var favouritedata;
var flag = false;
$(document).ready(function () {
  $("#movieform").submit(function (e) {
    e.preventDefault();
    var movie = $("#movie").val();
    var url = "https://www.omdbapi.com/?apikey=" + apikey + "&t=" + movie;
    // console.log(url);
    // calling api and append result
    $.ajax({
      method: "GET",
      url: url,
      success: function (data) {
        console.log("response",data);

        var result = `
                <img  style="float:left;" class="img-thumnail" width="100%" height="400" src="${data.Poster}">
                `;
        var info = `<button class="btn btn-success  align-content-center text-canter" id="add">Add to favourite</button>
                <h2>${"MovieName   ---" + data.Title}</h2>
                <h2>${"released date   ---" + data.Released}</h2>
                <h2>${"Gener  ---" + data.Genre}</h2>
                <h2>${"Time   ---" + data.Runtime}</h2>
                <h2>${"Director   ---" + data.Director}</h2>
                <h2>${"Actors  ---" + data.Actors}</h2>
                <h2>${
                  "Rating   --- &#9734; &#11088;" + data.imdbRating}</h2>`;
        $("#result").html(result);
        $("#info").html(info);
        favouritedata = {
        ImageUrl:data.Poster,
          Title: data.Title,
          Released: data.Released,
          Gener: data.Gener,
          Runtime: data.Runtime,
          Director: data.Director,
          Actors: data.Actors,
          Rating: data.imdbRating,
        };
        flag = true;
      },
    });

    
  });
});

document.querySelector('#info').addEventListener('click',function(e){
    // alert('button clicked');
    favourite_movie.push(favouritedata);
    sessionStorage.setItem('movies',JSON.stringify(favourite_movie));
    console.log(favourite_movie);
})



