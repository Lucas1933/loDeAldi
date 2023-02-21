import { urlRoute } from "./router.js";
export const RENDER = {
  root: document.getElementById("index"),
  navBar: getNavBar(),
  header: getHeader(),
  home: getHome(),
  rotiseriaHome: getRotiseriaHome(),
  pastileriaHome: getPasteleriaHome(),
  error404: getError404(),
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
  setHeaderListeners: setHeaderListeners,
  setNavBtnsListeners: setNavBtnsListeners,
};

function getError404() {
  let main = document.createElement("main");
  main.innerHTML = "404 not found";
  return main;
}
function getRotiseriaHome() {
  let rotiseriaHome = document.createElement("main");
  rotiseriaHome.classList.add("rotiseriaHome");
  rotiseriaHome.innerHTML = `Bienvenido a nuestra rotiseria! <br> 
    debajo tenes los botones para navegar por nuestro menu <br> 
    esperamos que te de hambre :D!`;
  return rotiseriaHome;
}
function getPasteleriaHome() {
  let pasteleriaHome = document.createElement("main");
  pasteleriaHome.classList.add("pasteleriaHome");
  pasteleriaHome.innerHTML = `Las cosas dulces mas ricas!`;
  return pasteleriaHome;
}
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
  header.innerHTML = `  <div
  class="fixed top-0 z-50 flex w-full justify-evenly rounded-xl bg-black shadow-xl"
>
  <div class="flex items-center justify-center">
    <img
      id="/"
      class="w-40"
      src="./assets/icons/header/logo.png"
      alt=""
    />
  </div>
  <div class="flex flex-col items-center justify-center">
    <img
      id="/rotiseria"
      class="w-12 rounded-lg border-2 border-solid border-white"
      src="./assets/icons/header/rotiseria.svg"
      alt=""
    />
  </div>
  <div class="flex flex-col items-center justify-center">
    <img
    id="/pasteleria"
      class="w-12 rounded-lg border-2 border-solid border-white"
      src="./assets/icons/header/pasteleria.svg"
      alt=""
    />
  </div>
</div>`;
  return header;
}

function setHeaderListeners() {
  let rotiseriaIcon = document.getElementById("/rotiseria");
  let pasteleriaIcon = document.getElementById("/pasteleria");
  let logo = document.getElementById("/");
  logo.addEventListener("click", (event) => {
    urlRoute(event);
  });
  rotiseriaIcon.addEventListener("click", (event) => {
    urlRoute(event);
    if (!rotiseriaIcon.classList.contains("bg-primary")) {
      rotiseriaIcon.classList.add("bg-primary");
      pasteleriaIcon.classList.remove("bg-pink-300");
    }
  });
  pasteleriaIcon.addEventListener("click", (event) => {
    urlRoute(event);
    if (!pasteleriaIcon.classList.contains("bg-pink-300")) {
      pasteleriaIcon.classList.add("bg-pink-300");
      rotiseriaIcon.classList.remove("bg-primary");
    }
  });
}
