import { displayHome } from "./display.js";
import { displayRotiseria } from "./display.js";
import { displayPasteleria } from "./display.js";
import { display404 } from "./display.js";
export const ROUTES = {
  "/": {
    display: displayHome,
  },
  "/rotiseria": {
    display: displayRotiseria,
  },
  "/rotiseria/pizza": {
    display: displayRotiseria,
  },
  "/rotiseria/frita": {
    display: displayRotiseria,
  },
  "/rotiseria/burger": {
    display: displayRotiseria,
  },
  "/pasteleria": {
    display: displayPasteleria,
  },
  404: {
    display: display404,
  },
};
