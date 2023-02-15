/* import "tw-elements"; */
import { displayHeader, displayNavBar } from "./display.js";
import { displayMenu } from "./display.js";
import { routerInit } from "./route.js";
document.getElementById("index").appendChild(document.createElement("main"));
displayHeader();
/* displayMenu("/pizza"); */
routerInit();
displayNavBar();
