import { urlRoute } from "./router.js";
export const get = {
  root: document.getElementById("index"),
  navBar: getNavBar(),
  header: getHeader(),
  home: getHome(),

  currentNavBar: () => {
    return document.getElementById("index").getElementsByTagName("nav")[0];
  },
  currentMain: () => {
    return document.getElementById("index").getElementsByTagName("main")[0];
  },
  currentHeader: () => {
    return document.getElementById("index").getElementsByTagName("header")[0];
  },
  currentHeaderLogo: () => {
    return document.getElementById("index").getElementsByTagName("img")[0];
  },
  setNavBtnsListeners: setNavBtnsListeners,
};

function setNavBtnsListeners() {
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
function getNavBar() {
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
function setNavBtnsBgColor(btnTriggerEvent, btnsDivs) {
  btnsDivs.forEach((cadaBtnDiv) => {
    cadaBtnDiv.classList.remove("bg-primary");
  });
  btnTriggerEvent.target.parentNode.parentNode.classList.add("bg-primary");
}
function getHome() {
  let home = document.createElement("main");
  home.classList.add("home");
  home.innerHTML = `
    <button
      id="rotiseria"
      class="mx-4 mb-4 border-2 border-solid border-black bg-black font-semibold text-white"
    >
      Rotiseria
    </button>
    <button
      id="pasteleria"
      class="mx-4 border-2 border-solid border-pink-700 bg-pink-500 font-semibold text-white"
    >
      Pasteleria
    </button>
  `;
  return home;
}
function getHeader() {
  let header = document.createElement("header");
  header.innerHTML = `<div class="fixed top-0 flex w-full justify-center z-50">
    <img id="/" class="w-40" src="./assets/logo.png" alt="" />
  </div>`;
  return header;
}
