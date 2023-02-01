import { setBtnsListeners } from "./btnInteraction.js";

export function navBar() {
  let navBar = document.createElement("nav");
  navBar.classList.add("fixed", "bottom-0", "flex", "w-full", "justify-evenly");
  navBar.innerHTML = ` 
  <div class="sideBarIcons">
    <button>
      <img
        id="hambBtn"
        class="h-12 w-12"
        src="../../assets/icons/navBarIcons/hamburger-part-2-svgrepo-com.svg"
        alt=""
      />
    </button>
  </div>
  <div class="sideBarIcons">
    <button>
      <img
        id="pizzaBtn"
        class="h-12 w-12"
        src="../../assets/icons/navBarIcons/pizza-svgrepo-com.svg"
        alt=""
      />
    </button>
  </div>
  <div class="sideBarIcons">
    <button>
      <img
        id="fritaBtn"
        class="h-12 w-12"
        src="../../assets/icons/navBarIcons/french-fries-svgrepo-com.svg"
        alt=""
      />
    </button>
  </div>
`;
  return navBar;
}
