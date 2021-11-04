const results = document.getElementById("results");


const insertMovies = (data) => {
  // console.log(data.Search);
  data.Search.forEach((movie) => {
    const newMovie = `<li class="mx-3">
    <img src="${movie.Poster}">
    <p>${movie.Title}</p>
    </li>`
    results.insertAdjacentHTML('beforeend', newMovie);
  });
};

const fetchMovies = (keyword) => {
  const url = `http://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`;
  fetch(url).then(response => response.json()).then(insertMovies);
};

const fillList = (event) => {
  results.innerHTML = "";
  event.preventDefault();
  const keyword = document.getElementById("keyword");
  // console.log(keyword.value);
  fetchMovies(keyword.value);
};

export { fetchMovies, fillList };


// BUTTON RECAP
// const button = document.querySelector("#click-me");

// button.addEventListener('click', (event) => {
//   // console.log(event.currentTarget.innerText);
//   event.currentTarget.innerText = "Please wait.."
//   event.currentTarget.disabled = true
// })
