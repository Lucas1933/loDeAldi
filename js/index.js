/* import "tw-elements"; */
import { displayHeader, displayNavBar } from "./display.js";
import { routerInit } from "./route.js";
document.getElementById("index").appendChild(document.createElement("main"));
displayHeader();
displayNavBar();
routerInit();
