/* import "tw-elements"; */
import { displayHeader } from "./display.js";
import { routerInit } from "./route.js";
document.getElementById("index").appendChild(document.createElement("main"));
displayHeader();
routerInit();
