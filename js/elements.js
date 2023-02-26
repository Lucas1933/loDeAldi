import { getMenu as MENU } from "./menu.js";
import { RENDER } from "./render.js";
export const ELEMENT = {
  root: document.getElementById("index"),
  navBar: getNavBar(),
  header: getHeader(),
  home: getHome(),
  rotiseriaHome: getRotiseriaHome(),
  pasteleriaHome: getPasteleriaHome(),
  error404: getError404(),
  getMenu: (path) => {
    getMenu(path);
  },
};

function getHome() {
  let home = document.createElement("main");
  home.classList.add("home");
  home.innerHTML = `
    <div class="flex h-[50%] w-full items-center justify-evenly">
    <button
      id="/rotiseria"
      class="mr-8 rounded-lg border-4 border-solid border-secondary-R bg-black py-1 px-1 w-20 font-semibold text-white "
    >
      <div class="">
        <img src="./assets/icons/header/rotiseria.svg" alt="" />
      </div>
      <p>Rotiseria</p>
    </button>
    <button
      id="/pasteleria"
      class="rounded-lg  w-20  border-4 border-solid border-secondary-P bg-primary-P font-semibold text-white"
    >
      <div><img src="./assets/icons/header/pasteleria.svg" alt="" /></div>
      <p>Pasteleria</p>
    </button>
  </div>
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
        class="w-36"
        src="./assets/icons/header/logo.png"
        alt=""
      />
    </div>
    <div class="flex grow justify-center items-center py-1" id="switchContainer">
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
      <p class="block text-white pl-1 pr-4">Rotiseria</p>
    </div>
      <div
        class="slideSwitchP"
        id="/rotiseria"
      >
        <div
          class="  animate-slide flex w-12 justify-center rounded-full border-2 border-solid border-pink-900 bg-[#5a1760]"
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
  function getNewMain(comida) {
    let comidaArray = comida;
    let main = document.createElement("main");
    main.classList.add("foodGrid");
    if (comidaArray[0].type == "hamburguesa") {
      main.appendChild(menu.getBurguerExtras);
    }
    comidaArray.forEach((cadaComida) => {
      if (cadaComida.type != "hamburguesa") {
        main.innerHTML += `<div
          style="background-image: url('${cadaComida.src}')"
          class="foodDivs"
        >
          <div class="bg-secondary-R text-center shrink  text-black h-fit">
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
          <div class="flex flex-col justify-end">
            <div class="bg-secondary-R text-center shrink  text-black h-fit">
              <h1 class="font-bold">${cadaComida.nombre}</h1>
              <p class="text-lg font-extrabold">$${cadaComida.precio}</p>
              <p class="font-semibold text-sm">${cadaComida.descripcion}</p>
            </div>
          </div>
    
            </div>`;
      }
    });

    return main;
  }
  function addWiggle() {
    for (let i = 0; i < RENDER.currentMain().children.length; i++) {
      RENDER.currentMain().children[i].addEventListener("animationend", () => {
        RENDER.currentMain().children[i].classList.add("animate-wiggle");
      });
    }
  }
  let menu = MENU();
  if (path == "/rotiseria/pizza") {
    RENDER.currentMain().replaceWith(getNewMain(menu.pizzas));
  } else if (path == "/rotiseria/burger") {
    RENDER.currentMain().replaceWith(getNewMain(menu.hamburguesas));
  } else if (path == "/rotiseria/frita") {
    RENDER.currentMain().replaceWith(getNewMain(menu.fritas));
  }
  addWiggle();
}
