import { navBar } from "./components/navBar/navBar.js";
import { setBtnsListeners as navBarListeners } from "./components/navBar/btnInteraction.js";
let index = document.getElementById("index");
index.innerHTML = await navBar();
navBarListeners();
