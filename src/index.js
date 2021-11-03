console.log("Hello from src/index.js!");

// BUTTON RECAP
// const button = document.querySelector("#click-me");

// button.addEventListener('click', (event) => {
//   // console.log(event.currentTarget.innerText);
//   event.currentTarget.innerText = "Please wait.."
//   event.currentTarget.disabled = true
// })

// MOVIE SEARCH
const results = document.getElementById("results");
const searchForm = document.getElementById("search-movies");

const searchMovies = (apple) => {
  const url = `http://www.omdbapi.com/?s=${apple}&apikey=adf1f2d7`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      // console.log(data.Search);
      data.Search.forEach((movie) => {
        const newMovie = `<li>
        <img src="${movie.Poster}">
        <p>${movie.Title}</p>
        </li>`
        results.insertAdjacentHTML('beforeend', newMovie)
      })
    });
};

searchForm.addEventListener("submit", (event) => {
  results.innerHTML = "";
  event.preventDefault();
  const keyword = document.getElementById("keyword");
  // console.log(keyword.value);
  searchMovies(keyword.value);
});

// searchMovies("Indiana Jones");

// ALGOLIA PLACES
// const searchAlgoliaPlaces = (event) => {
//   fetch("https://places-dsn.algolia.net/1/places/query", {
//     method: "POST",
//     body: JSON.stringify({ query: event.currentTarget.value })
//   })
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data.hits); // Look at local_names.default
//     });
// };

// const input = document.querySelector("#search");
// input.addEventListener("keyup", searchAlgoliaPlaces);
