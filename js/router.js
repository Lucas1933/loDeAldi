import { displayRoute } from "./routes.js";
/* updates the current url */
export function urlRoute(event) {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.id);
  urlLocationHandler();
}

/* passes the current url to be displayed */
async function urlLocationHandler() {
  const location = window.location.pathname;
  if (location.length == 0) {
    location = "/";
  }
  displayRoute(location);
}
export function routerInit() {
  window.onpopstate = urlLocationHandler;
  window.route = urlRoute;
  urlLocationHandler();
}
