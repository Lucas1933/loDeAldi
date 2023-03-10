import { getMenu as get_Menu } from "./menu.js";
/* import { PASTELERIA_URLS } from "./pasteleriaUrls.js"; */
const MENU = get_Menu();

export const ELEMENT = {
  root: document.getElementById("index"),
  navBar: getNavBar(),
  header: getHeader(),
  home: getHome(),
  rotiseriaHome: getRotiseriaHome(),
  pasteleriaHome: getPasteleriaHome(),
  error404: getError404(),
  menu: {
    "/rotiseria/pizza": getMenu(MENU.pizzas),
    "/rotiseria/burger": getMenu(MENU.hamburguesas),
    "/rotiseria/frita": getMenu(MENU.fritas),
  },
  pasteleria: {
    "/pasteleria/tortas": await getGaleria("tortas"),
    "/pasteleria/muffins": await getGaleria("muffins"),
    "/pasteleria/tartas": await getGaleria("tartas"),
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
  <div class="flex">
  <a class="w-72" target="_blank" href="https://www.facebook.com/profile.php?id=100064257603226"
    ><img src="./assets/logos/facebook-svgrepo-com.svg" alt="" /></a
  ><a class="w-72" target="_blank" href="https://www.instagram.com/lodealdi_/"
    ><img src="./assets/logos/instagram-1-svgrepo-com.svg" alt="" /></a
  ><a class="w-72" target="_blank" href="https://wa.me/1168963001"
    ><img src="./assets/logos/whatsapp-color-svgrepo-com.svg" alt=""
  /></a>
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
  pasteleriaHome.classList.add("pasteleriaHome");
  pasteleriaHome.innerHTML = ` <div
  id="/pasteleria/tortas"
  class="pasteleriaHomeDivs flex flex-col justify-end"
  style="background-image: url('./assets/pasteleria/2.png')"
>
  <div><p>Tortas</p></div>
</div>
<div
  id="/pasteleria/muffins"
  class="pasteleriaHomeDivs flex flex-col justify-end"
  style="background-image: url('./assets/pasteleria/1.png')"
>
  <div><p>Muffins</p></div>
</div>
<div
  id="/pasteleria/tartas"
  class="pasteleriaHomeDivs flex flex-col justify-end"
  style="background-image: url('./assets/pasteleria/tortas/1.jpg')"
><div><p>Tartas</p></div></div>`;
  return pasteleriaHome;
}
async function getGaleria(elemento) {
  let main = document.createElement("main");
  let modal = document.createElement("div");
  let divs;
  let respuesta = await fetch("../pasteleria_urls.json").then((res) =>
    res.json()
  );
  let pasteleria = respuesta.pasteleria;
  main.classList.add("pasteleriaGaleriaGrid");
  async function loadingDivs() {
    for (let i = 0; i < pasteleria[elemento].length; i++) {
      main.innerHTML += `  <div
    class="pasteleriaGaleriaDivs flex flex-col justify-center items-center"
  ><img class="animate-spin w-8" src="./assets/pasteleria/loading-svgrepo-com.svg" alt=""></div>`;
    }
  }
  await loadingDivs();
  divs = await Array.from(main.getElementsByClassName("pasteleriaGaleriaDivs"));
  async function insertBg(bgSrc, div) {
    let src = bgSrc;
    let image = new Image();
    image.addEventListener("load", () => {
      div.setAttribute("style", `background-image: url(${src});`);
      div.firstChild.remove();
    });
    image.src = src;
  }
  for (let i = 0; i < pasteleria[elemento].length; i++) {
    await insertBg(pasteleria[elemento][i], divs[i]);
  }
  modal.id = "modalCarousel";
  modal.classList.add("pasteleriaGaleriaModal", "hidden");
  modal.innerHTML = `
<div class="pasteleriaGaleriaCarousel">
</div>
<button id="next" class="absolute right-0 bottom-0 z-10 h-full w-10">
<img
src="./assets/pasteleria/arrow-right-svgrepo-com.svg"
alt=""
/></button
><button
id="prev"
class="absolute left-0 bottom-0 z-10 h-full w-10  rotate-180"
>
<img src="./assets/pasteleria/arrow-right-svgrepo-com.svg" alt="" />
</button>
`;
  main.appendChild(modal);
  return main;
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
    <div class="flex grow justify-evenly items-center py-1" id="switchContainer">
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
      <p class="block text-white px-3">Rotiseria</p>
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
  
        <p class="text-pink-200 px-2">Pasteleria</p>
      </div>
    </div>
    <div 
    class= "homeIcon flex flex-col items-center justify-center">
    <img     
    class="w-12"
    src="./assets/icons/header/home-svgrepo-com.svg"
    alt=""
    />
  </div>
  </div>`;
  return header;
}
function getError404() {
  let main = document.createElement("main");
  main.innerHTML = "404 not found";
  return main;
}
function getMenu(comidaArray) {
  function getNewMain(comidaArray) {
    let main = document.createElement("main");
    main.classList.add("foodGrid");
    if (comidaArray[0].type == "hamburguesa") {
      main.appendChild(MENU.getBurguerExtras);
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
  return getNewMain(comidaArray);
}
