import { RENDER } from "./render.js";
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
      RENDER.currentMain().replaceWith(RENDER.error404);
    },
  },
};
function displayHeader() {
  RENDER.root.appendChild(RENDER.header);
  RENDER.currentHeaderLogo().addEventListener("click", (event) => {
    urlRoute(event);
  });
}
function displayNavBar() {
  RENDER.root.appendChild(RENDER.navBar);
  RENDER.setNavBtnsListeners();
}
function displayHome() {
  RENDER.currentMain().replaceWith(RENDER.home);
  document.getElementById("rotiseria").addEventListener("click", (event) => {
    urlRoute(event);
  });

  if (RENDER.currentNavBar() != null) {
    RENDER.currentNavBar().remove();
  }
  if (RENDER.currentHeader() != null) {
    RENDER.currentHeader().remove();
  }
}
function displayRotiseria() {
  if (window.location.pathname === "/rotiseria") {
    RENDER.currentMain().replaceWith(RENDER.rotiseriaHome);

    if (RENDER.currentHeaderLogo() == null) {
      displayHeader();
    }

    if (RENDER.currentNavBar() == null) {
      displayNavBar();
    }
  } else {
    displayMenu(window.location.pathname);
  }
}
function displayMenu(path) {
  let menu = getMenu();
  if (path == "/rotiseria/pizza") {
    RENDER.currentMain().replaceWith(getNewMain(menu.getPizzas()));
  } else if (path == "/rotiseria/burger") {
    RENDER.currentMain().replaceWith(getNewMain(menu.getHamburguesas()));
  } else if (path == "/rotiseria/frita") {
    RENDER.currentMain().replaceWith(getNewMain(menu.getFritas()));
  } else {
    RENDER.root.innerHTML = " ";
    RENDER.root.appendChild(get.error404);
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
