import { urlRoute } from "./router.js";
export const RENDER = {
  root: document.getElementById("index"),
  navBar: getNavBar(),
  header: getHeader(),
  home: getHome(),
  rotiseriaHome: getRotiseriaHome(),
  pasteleriaHome: getPasteleriaHome(),
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
  setHeaderListeners: () => {
    /* function changeBgColors(event, rotiseriaIcon, pasteleriaIcon) {
      let iconID = event.target.id;
      if (iconID == "/rotiseria") {
        if (!rotiseriaIcon.classList.contains("bg-secondary-R")) {
          rotiseriaIcon.classList.add("bg-secondary-R");
          pasteleriaIcon.classList.remove("bg-secondary-P");
        }
      } else {
        if (!pasteleriaIcon.classList.contains("bg-secondary-P")) {
          pasteleriaIcon.classList.add("bg-secondary-P");
          rotiseriaIcon.classList.remove("bg-secondary-R");
        }
      }
    } */
    function setListeners() {
      let rotiseriaIcon = document.getElementById("/pasteleria");
      let pasteleriaIcon = document.getElementById("/rotiseria");
      let logo = document.getElementById("/");
      logo.addEventListener("click", (event) => {
        urlRoute(event);
      });
      if (window.location.pathname.includes("/rotiseria")) {
        document
          .getElementsByClassName("slideSwitchR")[0]
          .classList.remove("hidden");
        document
          .getElementsByClassName("slideSwitchP")[0]
          .classList.add("hidden");
      } else {
        document
          .getElementsByClassName("slideSwitchR")[0]
          .classList.add("hidden");
        document
          .getElementsByClassName("slideSwitchP")[0]
          .classList.remove("hidden");
      }
      rotiseriaIcon.addEventListener("click", (event) => {
        urlRoute(event);
        document
          .getElementsByClassName("slideSwitchP")[0]
          .classList.remove("hidden");
        document
          .getElementsByClassName("slideSwitchR")[0]
          .classList.add("hidden");
      });
      pasteleriaIcon.addEventListener("click", (event) => {
        urlRoute(event);
        document
          .getElementsByClassName("slideSwitchR")[0]
          .classList.remove("hidden");
        document
          .getElementsByClassName("slideSwitchP")[0]
          .classList.add("hidden");
      });
    }
    setListeners();
  },
  setNavBtnsListeners: () => {
    function setNavBtnsBgColor(btnTriggerEvent, btnsDivs) {
      btnsDivs.forEach((cadaBtnDiv) => {
        cadaBtnDiv.classList.remove("bg-secondary-R");
        cadaBtnDiv.firstElementChild.firstElementChild.classList.remove(
          "animate-bounce"
        );
      });
      btnTriggerEvent.target.parentNode.parentNode.classList.add(
        "bg-secondary-R"
      );
      btnTriggerEvent.target.parentNode.parentNode.firstElementChild.firstElementChild.classList.add(
        "animate-bounce"
      );
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
    setNavBtnsListeners();
  },
};

function getHome() {
  let home = document.createElement("main");
  home.classList.add("home");
  home.innerHTML = `
    <button
      id="/rotiseria"
      class="mx-4 mb-4 border-2 border-solid border-black bg-black font-semibold text-white"
    >
      Rotiseria
    </button>
    <button
      id="/pasteleria"
      class="mx-4 border-2 border-solid border-pink-700 bg-pink-500 font-semibold text-white"
    >
      Pasteleria
    </button>
  `;
  return home;
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
function getHeader() {
  let header = document.createElement("header");
  /* header.innerHTML = `  <div
  class=""
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
</div>`; */
  header.innerHTML = `<div class="headerRotiseria">
  <div class="flex items-center justify-center">
    <img
      id="/"
      class="w-40"
      src="./assets/icons/header/logo.png"
      alt=""
    />
  </div>
  <div class="flex grow justify-center" id="switchContainer">
      <div
    class="slideSwitchR"
    
  >
    <div
      class="flex w-12 justify-center rounded-full border-2 border-solid"
    >
      <img
      id="/pasteleria"
        class="w-8"
        src="./assets/icons/header/rotiseria.svg"
        alt=""
      />
    </div>
    <p class="block text-white">Rotiseria</p>
  </div>
    <div
      class="slideSwitchP"
      
    >
      <div
        class="flex w-12 justify-center rounded-full border-2 border-solid border-pink-900"
      >
        <img
         id="/rotiseria"
          class="w-8"
          src="./assets/icons/header/pasteleria.svg"
          alt=""
        />
      </div>

      <p class="text-pink-200">Pasteleria</p>
    </div>
  </div>
</div>`;
  return header;
}
function getError404() {
  let main = document.createElement("main");
  main.innerHTML = "404 not found";
  return main;
}
