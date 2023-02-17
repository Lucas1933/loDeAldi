import { getMenu } from "./menu.js";
import { getBurguerExtras } from "./menu.js";
import { getNavBar } from "./navBar.js";
import { setBtnsListeners } from "./navBar.js";
import { ROUTES } from "./routes.js";

export function displayPage(location) {
  ROUTES[location].display(location);
}

export function displayRotiseria(path) {
  console.log(path);
  if (path.length == 10) {
    let main = document.getElementsByTagName("main")[0];
    main.innerHTML = "Rotiseria Home";
  } else {
    displayMenu(path);
  }
}
export function display404(_ignore) {
  let main = document.getElementsByTagName("main")[0];
  main.innerHTML = "404 not found";
}
export function displayPasteleria() {}
export function displayMenu(btnPressedId) {
  let menu = getMenu();
  let main = document.getElementsByTagName("main")[0];
  let btnPressed = btnPressedId;
  if (btnPressed == "/rotiseria/pizza") {
    main.replaceWith(getMain(menu.getPizzas()));
  } else if (btnPressed == "/rotiseria/burger") {
    main.replaceWith(getMain(menu.getHamburguesas()));
  } else if (btnPressed == "/rotiseria/frita") {
    main.replaceWith(getMain(menu.getFritas()));
  } else {
    display404(" ");
  }
}
function getMain(comida) {
  let comidaArray = comida;
  let main = document.createElement("main");
  main.classList.add("foodGrid");
  if (comidaArray[0].type == "hamburguesa") {
    main.appendChild(getBurguerExtras());
  }
  comidaArray.forEach((cadaComida) => {
    if (cadaComida.type != "hamburguesa") {
      main.innerHTML += `<div
      style="background-image: url('${cadaComida.src}')"
      class="foodDivs"
    >
      <div class="bg-primary text-center  text-black">
        <h1 class="font-extrabold">${cadaComida.nombre}</h1>
        <p class="font-semibold text-lg">$${cadaComida.precio}</p>
        <p>${cadaComida.descripcion}</p>
      </div>
    </div>`;
    } else {
      main.innerHTML += `<div
          style="background-image: url('${cadaComida.src}')"
          class="foodDivs"
        >
        <div class="grow"><p class="font-extrabold rounded-r-lg rounded-b-lg bg-primary text-center inline-block w-16 ">Incluye fritas!</p></div>

          <div class="bg-primary text-center text-black">
            <h1 class="font-extrabold">${cadaComida.nombre}</h1>
            <p class="text-lg font-semibold">$${cadaComida.precio}</p>
            <p>${cadaComida.descripcion}</p>
          </div>
        </div>`;
    }
  });

  return main;
}

export function displayHome() {
  let home = document.createElement("main");
  home.innerHTML = "INICIO";
}
export function displayNavBar() {
  let index = document.getElementById("index");
  index.appendChild(getNavBar());
  setBtnsListeners();
}
export function displayHeader() {
  let header = document.createElement("header");
  header.innerHTML = `<div class="fixed top-0 flex w-full justify-center z-50">
    <img class="w-40" src="./assets/logo.png" alt="" />
  </div>`;
  document.getElementById("index").appendChild(header);
}
