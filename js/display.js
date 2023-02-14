import { getMenu } from "./menu.js";
import { getBurguerExtras } from "./menu.js";
import { getNavBar } from "./navBar.js";
import { setBtnsListeners } from "./navBar.js";
export function displayMenu(btnPressedId) {
  let menu = getMenu();
  let main = document.getElementsByTagName("main")[0];
  let btnPressed = btnPressedId;
  if (btnPressed == "/pizza") {
    main.replaceWith(getMain(menu.getPizzas()));
  } else if (btnPressed == "/burger") {
    main.replaceWith(getMain(menu.getHamburguesas()));
  } else if (btnPressed == "/frita") {
    main.replaceWith(getMain(menu.getFritas()));
  } else {
    displayInicio();
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

export function display404() {
  let currentMain = document.getElementsByTagName("main")[0];
  let newMain = document.createElement("main");
  newMain.innerHTML = "<h1>404 not found</h1>";
  currentMain.replaceWith(newMain);
}
export function displayInicio() {
  let main = document.createElement("main");
  main.innerHTML = "<h1>INICIO</h1>";
  document.getElementById("index").appendChild(main);
}
