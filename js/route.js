import { display404, displayInicio, displayMenu } from "./display.js";
const routes = {
  404: {
    template: display404,
    title: "",
    description: "",
  },
  "/": {
    template: displayInicio,
    title: "",
    description: "",
  },
  "/pizza": {
    template: displayMenu,
    title: "",
    description: "",
  },
  "/burger": {
    template: displayMenu,
    title: "",
    description: "",
  },
  "/frita": {
    template: displayMenu,
    title: "",
    description: "",
  },
};

export function route(event) {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.id);
  routeLocationHandler();
}

async function routeLocationHandler() {
  const location = window.location.pathname;
  if (location.length == 0) {
    location = "/";
  }

  displayMenu(location);
  /* const route = routes[location] || routes[404]; */
  /*  const html = await fetch(route.template).then((response) =>
    console.log(response.text())
  );
  document.getElementById("main").innerHTML = html; */
}
window.onpopstate = routeLocationHandler;
window.route = route;
routeLocationHandler();
