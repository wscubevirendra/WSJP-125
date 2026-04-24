var TOPMOVIESAPIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
var SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
var movies_container = document.querySelector(".movies-container")


async function getMovies(API) {
    var response = await fetch(API);
    var data = await response.json();
    showMovies(data.results);
}

getMovies(TOPMOVIESAPIURL);


function showMovies(movies) {
    movies_container.innerHTML = "";
    for (let data of movies) {
        var poster = "https://image.tmdb.org/t/p/w1280" + data.poster_path
        var box = document.createElement("div");
        box.classList.add("card");
        box.innerHTML = ` <img src=${poster} alt="">
            <div class="overlay">
                <h2>${data.original_title}</h2>
                <p>
                    <b>Overview:</b>
                   ${data.overview}
                </p>

            </div>`

        movies_container.appendChild(box)
    }
}


document.querySelector("input").addEventListener(
    "keyup",
    function (event) {
        if (event.target.value === "") {
            getMovies(TOPMOVIESAPIURL)
        } else {
            getMovies(SEARCHAPI + event.target.value)
        }
    }
)