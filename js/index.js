/* import "tw-elements"; */
import { displayHeader, displayNavBar } from "./display.js";
import { displayMenu } from "./display.js";
document.getElementById("index").appendChild(document.createElement("main"));
displayHeader();
displayMenu("/pizza");
displayNavBar();
