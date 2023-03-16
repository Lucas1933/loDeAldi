import { RENDER } from "./render.js";
import { ELEMENT } from "./elements.js";
export function displayRoute(location) {
  window.scrollTo(0, 0);
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
  "/pasteleria/tortas": {
    display: () => {
      displayPasteleria();
    },
  },
  "/pasteleria/muffins": {
    display: () => {
      displayPasteleria();
    },
  },
  "/pasteleria/tartas": {
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
  if (window.location.pathname === "/rotiseria") {
    RENDER.currentMain().replaceWith(ELEMENT.rotiseriaHome);
  } else {
    RENDER.currentMain().replaceWith(RENDER.getMenu(window.location.pathname));
    RENDER.setFoodCardsWiggleAnimation();
  }
  displayHeader();
  displayNavBar();
}
function displayPasteleria() {
  if (window.location.pathname === "/pasteleria") {
    RENDER.currentMain().replaceWith(ELEMENT.pasteleriaHome);
    RENDER.currentMain().appendChild(ELEMENT.navBarPasteleria);
    RENDER.setPasteleriaHomeListeners();
  } else {
    RENDER.currentMain().replaceWith(
      ELEMENT.pasteleria[window.location.pathname]
    );
    RENDER.setGaleria();
  }
  displayHeader();
  displayNavBar();
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
  let navs = Array.from(document.getElementsByTagName("nav"));
  if (navs.length != 0) {
    navs.forEach((cadaNav) => {
      cadaNav.remove();
    });
  }

  if (window.location.pathname.includes("/pasteleria")) {
    ELEMENT.root.appendChild(ELEMENT.navBarPasteleria);
    RENDER.setNavPasteleriaListeners();
  } else {
    ELEMENT.root.appendChild(ELEMENT.navBar);
    RENDER.setNavBtnsListeners();
  }
}
