import { displayMenu } from "./display.js";

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
}

export function routingInit() {
  window.onpopstate = routeLocationHandler;
  window.route = route;
  routeLocationHandler();
}
