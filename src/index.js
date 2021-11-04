console.log("Hello from src/index.js!");

// Imports
import { fetchMovies, fillList } from "./movie";
import { initSortable } from "./plugins/init_sortablejs";
import { initSelect2 } from "./plugins/init_select2";
import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

// Stimulus setup
const application = Application.start();
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));

// Selections
const searchForm = document.getElementById("search-movies");

// Listeners
searchForm.addEventListener("submit", fillList);

// Api calls
fetchMovies("Indiana Jones");

// Plugins
initSortable();
initSelect2();
