import { displayHeader, displayNavBar } from "./display.js";
import { displayMenu } from "./display.js";
let index = document.getElementById("index");
index.appendChild(document.createElement("main"));
displayHeader();
displayMenu("pizza");
displayNavBar();
