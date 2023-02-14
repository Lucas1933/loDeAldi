import "tw-elements";
import { displayHeader, displayNavBar } from "./display.js";
import { displayMenu } from "./display.js";
import { routingInit } from "./route.js";
let index = document.getElementById("index");
routingInit();
displayHeader();
/* displayMenu("/pizza"); */
displayNavBar();
