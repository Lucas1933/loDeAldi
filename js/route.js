import { displayMenu } from "./display";

export function urlRoute(event) {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.id);
  urlLocationHandler();
}

async function urlLocationHandler() {
  const location = window.location.pathname;
  if (location.length == 0) {
    location = "/";
  }
  displayMenu(location);
}
export function routerInit() {
  window.onpopstate = urlLocationHandler;
  window.route = urlRoute;
  urlLocationHandler();
}
