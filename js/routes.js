import { RENDER } from "./render.js";
import { ELEMENT } from "./elements.js";
export function displayRoute(location) {
  ROUTES[location].display();
}
const ROUTES = {
  "/": {
    display: () => {
      displayHome();
    },
  },
  "/rotiseria": {
    display: () => {
      displayRotiseria();
    },
  },
  "/rotiseria/pizza": {
    display: () => {
      displayRotiseria();
    },
  },
  "/rotiseria/frita": {
    display: () => {
      displayRotiseria();
    },
  },
  "/rotiseria/burger": {
    display: () => {
      displayRotiseria();
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
function displayHome() {
  RENDER.currentMain().replaceWith(ELEMENT.home);
  RENDER.setHomeListeners();
  if (RENDER.currentNavBar() != null) {
    RENDER.currentNavBar().remove();
  }
  if (RENDER.currentHeader() != null) {
    RENDER.currentHeader().remove();
  }
}
function displayRotiseria() {
  if (RENDER.currentNavBar() == null) {
    displayNavBar();
  }
  if (window.location.pathname === "/rotiseria") {
    RENDER.currentMain().replaceWith(ELEMENT.rotiseriaHome);
  } else {
    RENDER.currentMain().replaceWith(RENDER.getMenu(window.location.pathname));
    RENDER.setFoodCardsWiggleAnimation();
  }
  displayHeader();
}
function displayPasteleria() {
  if (RENDER.currentNavBar() != null) {
    RENDER.currentNavBar().remove();
  }
  if (window.location.pathname === "/pasteleria") {
    RENDER.currentMain().replaceWith(ELEMENT.pasteleriaHome);
  } else {
    /* displayMenuPasteleria(window.location.pathname); "/pasteleria/tortas etc"*/
  }
  displayHeader();
}
function displayHeader() {
  if (window.location.pathname.includes("/pasteleria")) {
    if (RENDER.currentHeader() != null) {
      RENDER.currentHeader().firstElementChild.className = "headerPasteleria";
    } else {
      ELEMENT.root.appendChild(ELEMENT.header);
      RENDER.currentHeader().firstElementChild.className = "headerPasteleria";
      RENDER.setHeaderListeners();
    }
  } else if (window.location.pathname.includes("/rotiseria")) {
    if (RENDER.currentHeader() != null) {
      RENDER.currentHeader().firstElementChild.className = "headerRotiseria";
    } else {
      ELEMENT.root.appendChild(ELEMENT.header);
      RENDER.currentHeader().firstElementChild.className = "headerRotiseria";
      RENDER.setHeaderListeners();
    }
  }
}
function displayNavBar() {
  ELEMENT.root.appendChild(ELEMENT.navBar);
  RENDER.setNavBtnsListeners();
}
