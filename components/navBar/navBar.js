import { setBtnsListeners } from "./btnInteraction.js";

export function navBar() {
  return ` <nav id="navBarNode" class="fixed bottom-0 flex w-full justify-evenly">
  <div class="sideBarIcons">
    <button>
      <img
        class="h-12 w-12"
        src="../../assets/icons/navBarIcons/hamburger-part-2-svgrepo-com.svg"
        alt=""
      />
    </button>
  </div>
  <div class="sideBarIcons">
    <button>
      <img
        class="h-12 w-12"
        src="../../assets/icons/navBarIcons/pizza-svgrepo-com.svg"
        alt=""
      />
    </button>
  </div>
  <div class="sideBarIcons">
    <button>
      <img
        class="h-12 w-12"
        src="../../assets/icons/navBarIcons/french-fries-svgrepo-com.svg"
        alt=""
      />
    </button>
  </div>
</nav>`;
}
