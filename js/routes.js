import { get } from "./variables.js";
import { urlRoute } from "./router.js";
import { getMenu } from "./menu.js";
import { getBurguerExtras } from "./menu.js";
export function displayRoute(location) {
  ROUTES[location].display(location);
}
const ROUTES = {
  "/": {
    display: () => {
      displayHome();
    },
  },
  "/rotiseria": {
    display: () => {
      displayRotiseria("home");
    },
  },
  "/rotiseria/pizza": {
    display: () => {
      displayRotiseria("/rotiseria/pizza");
    },
  },
  "/rotiseria/frita": {
    display: () => {
      displayRotiseria("/rotiseria/frita");
    },
  },
  "/rotiseria/burger": {
    display: () => {
      displayRotiseria("/rotiseria/burger");
    },
  },
  "/pasteleria": {
    display: () => {
      displayPasteleria();
    },
  },
  404: {
    display: () => {
      get.currentMain().replaceWith(get.error404);
    },
  },
};
function displayHeader() {
  get.root.appendChild(get.header);
  get.currentHeaderLogo().addEventListener("click", (event) => {
    urlRoute(event);
  });
}
function displayNavBar() {
  get.root.appendChild(get.navBar);
  get.setNavBtnsListeners();
}
function displayHome(_ignore) {
  get.currentMain().replaceWith(get.home);
  document.getElementById("rotiseria").addEventListener("click", (event) => {
    urlRoute(event);
  });

  if (get.currentNavBar() != null) {
    get.currentNavBar().remove();
  }
  if (get.currentHeader() != null) {
    get.currentHeader().remove();
  }
}
function displayRotiseria() {
  if (window.location.pathname === "/rotiseria") {
    get.currentMain().replaceWith(get.rotiseriaHome);

    if (get.currentHeaderLogo() == null) {
      displayHeader();
    }

    if (get.currentNavBar() == null) {
      displayNavBar();
    }
  } else {
    displayMenu(window.location.pathname);
  }
}
function displayMenu(btnPressedId) {
  let menu = getMenu();
  let btnPressed = btnPressedId;
  if (btnPressed == "/rotiseria/pizza") {
    get.currentMain().replaceWith(getNewMain(menu.getPizzas()));
  } else if (btnPressed == "/rotiseria/burger") {
    get.currentMain().replaceWith(getNewMain(menu.getHamburguesas()));
  } else if (btnPressed == "/rotiseria/frita") {
    get.currentMain().replaceWith(getNewMain(menu.getFritas()));
  } else {
    get.root.innerHTML = " ";
    get.root.appendChild(get.error404);
  }
}
function getNewMain(comida) {
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
