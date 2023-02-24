import { urlRoute } from "./router.js";
import { getMenu as getMenuClass, getBurguerExtras } from "./menu.js";
export const RENDER = {
  root: document.getElementById("index"),
  navBar: getNavBar(),
  header: getHeader(),
  home: getHome(),
  rotiseriaHome: getRotiseriaHome(),
  pasteleriaHome: getPasteleriaHome(),
  getMenu: (path) => {
    getMenu(path);
  },
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
    function setListeners() {
      let rotiseriaIcon = document.getElementById("/pasteleria");
      let pasteleriaIcon = document.getElementById("/rotiseria");
      let logo = document.getElementById("/");
      let switchR = document.getElementsByClassName("slideSwitchR")[0];
      let switchP = document.getElementsByClassName("slideSwitchP")[0];
      logo.addEventListener("click", (event) => {
        urlRoute(event);
      });
      if (window.location.pathname.includes("/rotiseria")) {
        switchR.classList.remove("hidden");
        switchR.addEventListener("click", (event) => {
          urlRoute(event);
          switchR.classList.add("hidden");
          switchP.classList.remove("hidden");
        });
        switchP.addEventListener("click", (event) => {
          urlRoute(event);
          switchR.classList.remove("hidden");
          switchP.classList.add("hidden");
          RENDER.resetNavBar();
        });
        switchP.classList.add("hidden");
      } else {
        switchR.addEventListener("click", (event) => {
          urlRoute(event);
          switchR.classList.add("hidden");
          switchP.classList.remove("hidden");
        });
        switchR.classList.add("hidden");
        switchP.classList.remove("hidden");
        switchP.addEventListener("click", (event) => {
          urlRoute(event);
          switchR.classList.remove("hidden");
          switchP.classList.add("hidden");
        });
      }
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
    window.onpopstate = () => {
      document
        .getElementById("/rotiseria/pizza")
        .classList.remove("animate-bounce");
    };
    setNavBtnsListeners();
  },
  resetNavBar: () => {
    let icons = [];
    icons.push(document.getElementById("/rotiseria/pizza"));
    icons.push(document.getElementById("/rotiseria/burger"));
    icons.push(document.getElementById("/rotiseria/frita"));
    icons.forEach((cadaIcono) => {
      cadaIcono.classList.remove("animate-bounce");
      cadaIcono.parentElement.parentElement.classList.remove("bg-secondary-R");
    });
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
  rotiseriaHome.innerHTML = `
  <div class="border-solid border-2 w-[70%] border-secondary-R" >Estamos abiertos!</div>
  
  De jueves a domingo a partir de las 19:00hs hasta las 00:00hs`;
  return rotiseriaHome;
}
function getPasteleriaHome() {
  let pasteleriaHome = document.createElement("main");
  pasteleriaHome.classList.add("pasteleriaGrid");
  pasteleriaHome.innerHTML = `        <div class="pasteleriaDivsHome">
  <div class="flex h-full w-full">
    <div
      class="pasteleriaDivs"
      style="background-image: url('./assets/pasteleria/2.png')"
    ></div>
    <div
      class="pasteleriaDivs"
      style="background-image: url('./assets/pasteleria/3.png')"
    ></div>
  </div>

  <p class="text-center text-xl">Tortas</p>
</div>
<div class="pasteleriaDivsHome">
  <div class="flex h-full w-full">
    <div
      class="pasteleriaDivs"
      style="background-image: url('./assets/pasteleria/2.png')"
    ></div>
    <div
      class="pasteleriaDivs"
      style="background-image: url('./assets/pasteleria/3.png')"
    ></div>
  </div>

  <p class="text-center text-xl">Tortas</p>
</div>`;
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
            class="h-12 w-12 "
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
  header.innerHTML = `<div class="headerRotiseria">
  <div class="flex items-center justify-center">
    <img
      id="/"
      class="w-40"
      src="./assets/icons/header/logo.png"
      alt=""
    />
  </div>
  <div class="flex grow justify-center py-1" id="switchContainer">
       <div
       id="/pasteleria"
    class="slideSwitchR"
    
  >
    <div
      class="flex w-12 bg-primary-R animate-slideR justify-center rounded-full border-4 border-solid border-secondary-R"
    >
      <img
      
        class="w-8 py-1 "
        src="./assets/icons/header/rotiseria.svg"
        alt=""
      />
    </div>
    <p class="block text-white pl-1 pr-2">Rotiseria</p>
  </div>
    <div
      class="slideSwitchP"
      id="/rotiseria"
    >
      <div
        class="  animate-slide flex w-12 justify-center rounded-full border-2 border-solid border-pink-900 bg-primary-P"
      >
        <img
         
          class="w-8 h-11 py-1"
          src="./assets/icons/header/pasteleria.svg"
          alt=""
        />
      </div>

      <p class="text-pink-200 px-1">Pasteleria</p>
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

function getMenu(path) {
  let menu = getMenuClass();
  if (path == "/rotiseria/pizza") {
    RENDER.currentMain().replaceWith(getNewMain(menu.getPizzas()));
  } else if (path == "/rotiseria/burger") {
    RENDER.currentMain().replaceWith(getNewMain(menu.getHamburguesas()));
  } else if (path == "/rotiseria/frita") {
    RENDER.currentMain().replaceWith(getNewMain(menu.getFritas()));
  } else {
    RENDER.root.innerHTML = " ";
    RENDER.root.appendChild(get.error404);
  }
}
function getNewMain(comida) {
  let comidaArray = comida;
  let main = document.createElement("main");
  main.classList.add("foodGrid");
  if (comidaArray[0].type == "hamburguesa") {
    main.appendChild(getBurguerExtras());
  }
  comidaArray.forEach((cadaComida) => {
    if (cadaComida.type != "hamburguesa") {
      main.innerHTML += `<div
      style="background-image: url('${cadaComida.src}')"
      class="foodDivs"
    >
      <div class="bg-secondary-R text-center  text-black">
        <h1 class="font-extrabold">${cadaComida.nombre}</h1>
        <p class="font-semibold text-lg">$${cadaComida.precio}</p>
        <p>${cadaComida.descripcion}</p>
      </div>
    </div>`;
    } else {
      main.innerHTML += `<div
          style="background-image: url('${cadaComida.src}')"
          class="foodDivs"
        >
        <div class="grow">
        <p class="font-extrabold rounded-r-lg rounded-b-lg bg-secondary-R text-center inline-block w-16 ">Incluye fritas!</p></div>

          <div class="bg-secondary-R text-center text-black">
            <h1 class="font-extrabold">${cadaComida.nombre}</h1>
            <p class="text-lg font-semibold">$${cadaComida.precio}</p>
            <p>${cadaComida.descripcion}</p>
          </div>
        </div>`;
    }
  });

  return main;
}
