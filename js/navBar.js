import { displayMenu } from "./display.js";
import { urlRoute } from "./router.js";
export function getNavBar() {
  let navBar = document.createElement("nav");
  navBar.classList.add("navBar");
  navBar.id = "nav";
  navBar.innerHTML = ` 
    <div class="navBarIcons">
      <button>
        <img
          id="/rotiseria/burger"
          class="h-12 w-12"
          src="../../assets/icons/navBarIcons/burgerIcon.svg"
          alt=""
        />
      </button>
    </div>
    <div class="navBarIcons">
      <button>
        <img
          id="/rotiseria/pizza"
          class="h-12 w-12"
          src="../../assets/icons/navBarIcons/pizzaIcon.svg"
          alt=""
        />
      </button>
    </div>
    <div class="navBarIcons">
      <button>
        <img
          id="/rotiseria/frita"
          class="h-12 w-12"
          src="../../assets/icons/navBarIcons/fritaIcon.svg"
          alt=""
        />
      </button>
    </div>
  `;
  return navBar;
}
export function setBtnsListeners() {
  let btnsDivs = Array.from(document.getElementsByClassName("navBarIcons"));
  let btns = [];
  btnsDivs.forEach((cadaDiv) => {
    btns.push(cadaDiv.firstElementChild);
  });

  btns.forEach((cadaBtn) => {
    cadaBtn.addEventListener("click", (btnTriggerEvent) => {
      setNavBtnsBgColor(btnTriggerEvent, btnsDivs);
      urlRoute(btnTriggerEvent);
    });
  });
}

function setNavBtnsBgColor(btnTriggerEvent, btnsDivs) {
  btnsDivs.forEach((cadaBtnDiv) => {
    cadaBtnDiv.classList.remove("bg-primary");
  });
  btnTriggerEvent.target.parentNode.parentNode.classList.add("bg-primary");
}
