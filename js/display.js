import { getMenu } from "./menu.js";
import { getBurguerExtras } from "./menu.js";
import { getNavBar } from "./navBar.js";
import { setBtnsListeners } from "./navBar.js";
import { urlRoute } from "./router.js";
import { ROUTES } from "./routes.js";

export function displayPage(location) {
  ROUTES[location].display(location);
}

export function displayRotiseria(path) {
  if (path === "/rotiseria") {
    let main = document.createElement("main");
    if (document.getElementById("/") == null) {
      displayHeader();
    }
    main.classList.add("rotiseriaHome");
    main.innerHTML = `Bienvenido a nuestra rotiseria! <br> 
    debajo tenes los botones para navegar por nuestro menu <br> 
    esperamos que te de hambre :D!`;
    document.getElementsByTagName("main")[0].replaceWith(main);
    if (document.getElementById("nav") == null) {
      displayNavBar();
    }
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

export function displayHome(_ignore) {
  let main = document.getElementsByTagName("main")[0];
  console.log(main.remove());
  main.remove();
  console.log(main.remove());
  let home = document.createElement("main");
  home.classList.add("home");
  home.innerHTML = `
  <button
    id="rotiseria"
    class="mx-4 mb-4 border-2 border-solid border-black bg-black font-semibold text-white"
  >
    Rotiseria
  </button>
  <button
    id="pasteleria"
    class="mx-4 border-2 border-solid border-pink-700 bg-pink-500 font-semibold text-white"
  >
    Pasteleria
  </button>
`;
  document.getElementById("index").appendChild(home);
  document.getElementById("rotiseria").addEventListener("click", (event) => {
    urlRoute(event);
  });

  if (document.getElementById("nav") != null) {
    document
      .getElementById("index")
      .removeChild(document.getElementById("nav"));
  }
  if (
    document.getElementById("index").getElementsByTagName("header")[0] != null
  ) {
    document
      .getElementById("index")
      .removeChild(
        document.getElementById("index").getElementsByTagName("header")[0]
      );
  }
}
export function displayNavBar() {
  let index = document.getElementById("index");
  index.appendChild(getNavBar());
  setBtnsListeners();
}
export function displayHeader() {
  let header = document.createElement("header");
  header.innerHTML = `<div class="fixed top-0 flex w-full justify-center z-50">
    <img id="/" class="w-40" src="./assets/logo.png" alt="" />
  </div>`;
  document.getElementById("index").appendChild(header);
  document.getElementById("/").addEventListener("click", (event) => {
    urlRoute(event);
  });
}
