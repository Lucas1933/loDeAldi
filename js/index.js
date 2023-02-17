/* import "tw-elements"; */
import { displayHeader, displayNavBar } from "./display.js";
import { routerInit, urlRoute } from "./router.js";
let main = document.createElement("main");
let button = document.createElement("button");
let index = document.getElementById("index");
index.appendChild(main);
button.innerHTML = "rotiseria";
button.id = "rotiseria";

/* displayHeader(); */
displayNavBar();
main.appendChild(button);
button.addEventListener("click", (event) => {
  urlRoute(event);
});
routerInit();
