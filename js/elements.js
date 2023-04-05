import { getMenu as get_Menu } from "./menu.js";
import { RENDER } from "./render.js";
/* import { PASTELERIA_URLS } from "./pasteleriaUrls.js"; */
const MENU = get_Menu();

export const ELEMENT = {
  root: document.getElementById("index"),
  navBar: getNavBar(),
  navBarPasteleria: getNavBarPasteleria(),
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
    "/pasteleria/cosas-dulces": await getGaleria("cosas-dulces"),
  },
};

function getHome() {
  let home = document.createElement("main");
  home.classList.add("home");
  home.innerHTML = `
  <div class="flex justify-center">
  <img src="./assets/icons/header/logo.png" alt="" />
</div>
<div
  class="flex h-[50%] w-full items-center justify-evenly lg:justify-center"
>
  <a href="/rotiseria" class="rotiseriaBtn">
    <img src="./assets/icons/header/rotiseria.svg" alt="" />
    <p>Rotiseria</p>
  </a>
  <a href="/pasteleria" class="pasteleriaBtn">
    <img src="./assets/icons/header/pasteleria.svg" alt="" />
    <p>Pasteleria</p>
  </a>
</div>
<div class="flex justify-center">
  <a
    class="w-72 lg:w-32"
    target="_blank"
    href="https://www.facebook.com/profile.php?id=100064257603226"
    ><img src="./assets/homeLogos/facebook-svgrepo-com.svg" alt="" /></a
  ><a
    class="w-72 lg:w-32"
    target="_blank"
    href="https://www.instagram.com/lodealdi_/"
    ><img src="./assets/homeLogos/instagram-1-svgrepo-com.svg" alt="" /></a
  ><a
    class="w-72 lg:w-32"
    target="_blank"
    href="https://wa.me/+541168963001"
    ><img src="./assets/homeLogos/whatsapp-color-svgrepo-com.svg" alt=""
  /></a>
</div>
    `;
  return home;
}
function getRotiseriaHome() {
  let rotiseriaHome = document.createElement("main");
  rotiseriaHome.classList.add("rotiseriaHome");
  rotiseriaHome.innerHTML = ` 
<div class="lg:mt-10 lg:flex lg:justify-evenly">
  <div
    class="flex flex-col items-center justify-evenly lg:mr-20 lg:w-[30%]"
  >
    
    <div class="lg:flex-row"></div>
    <div class="mb-4 flex">
      <img
        class="w-10 pr-2"
        src="./assets/rotiseria/homeIcons/calendar-svgrepo-com.svg"
      />
      <p class="text-xl">Jueves a domingo</p>
    </div>
    <div class="mb-4 flex">
      <img
        class="w-10 pr-2"
        src="./assets/rotiseria/homeIcons/clock-svgrepo-com.svg"
      />
      <p class="text-xl">19:00hs - 00:00hs</p>
    </div>
    <div class="mb-4 flex items-center justify-center">
      <img
        class="w-16 pr-2"
        src="./assets/rotiseria/homeIcons/gps-location-map-svgrepo-com.svg"
      />
      <p class="text-xl">
        Hipolito Yirigoyen <br />
        y <br />
        San Juan
      </p>
    </div>

    <div>
      <iframe
        class="w-52 border-2 border-solid border-secondary-R"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.2502027044397!2d-58.815310822261345!3d-34.67363422657602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc951f43a6974d%3A0x6e91e3e3d0438454!2sLoDeAldi!5e0!3m2!1ses!2sar!4v1678540267066!5m2!1ses!2sar"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>

  <div class="my-8 flex flex-col items-center justify-center">
    <div class="flex flex-row-reverse items-center justify-center">
      <a
        class="z-10 w-20 pl-4"
        target="_blank"
        href="https://wa.me/+541168963001"
      >
        <img
          src="./assets/homeLogos/whatsapp-color-svgrepo-com.svg"
          alt=""
        />
      </a>
      <img
        id="delivery"
        class="mr-4 w-28"
        src="./assets/rotiseria/homeIcons/delivery.webp"
        alt=""
      />
    </div>

    <p class="text-xl">Contamos con delivery segun la zona, consultanos!</p>
  </div>
</div>
`;

  return rotiseriaHome;
}

function getPasteleriaHome() {
  let pasteleriaHome = document.createElement("main");
  pasteleriaHome.classList.add("pasteleriaHome");
  pasteleriaHome.innerHTML = ` <a
  href="/pasteleria/tortas"
  class="pasteleriaHomeDivs flex flex-col justify-end"
>
<div class= "w-full h-full flex flex-col justify-center items-center"><img class="animate-spin w-28" src="./assets/pasteleria/loading-svgrepo-com.svg" alt=""></div>
  <div><p>Tortas</p></div>
</a>
<a
  href="/pasteleria/muffins"
  class="pasteleriaHomeDivs  flex flex-col justify-end"
  
>
<div class= "w-full h-full flex flex-col justify-center items-center"><img class="animate-spin w-28" src="./assets/pasteleria/loading-svgrepo-com.svg" alt=""></div>
  <div><p>Muffins</p></div>
</a>
<a
  href="/pasteleria/tartas"
  class="pasteleriaHomeDivs flex flex-col justify-end"

>
<div class= "w-full h-full flex flex-col justify-center items-center"><img class="animate-spin w-28" src="./assets/pasteleria/loading-svgrepo-com.svg" alt=""></div>
<div><p>Tartas</p></div>
</a>
<a
  href="/pasteleria/cosas-dulces"
  class="pasteleriaHomeDivs flex flex-col justify-end"
 
>
<div class= "w-full h-full flex flex-col justify-center items-center"><img class="animate-spin w-28" src="./assets/pasteleria/loading-svgrepo-com.svg" alt=""></div>
<div><p>Postres, alfajores y mas!</p></div>
</a>
<a class="w-16  mb-10 animate-bounce fixed bottom-0 left-0" target="_blank" href="https://wa.me/+541168963001"
><img src="./assets/homeLogos/whatsapp-color-svgrepo-com.svg" alt=""
/></a>
`;

  return pasteleriaHome;
}
async function getGaleria(elemento) {
  let main = document.createElement("main");
  let modal = document.createElement("div");
  let respuesta = await fetch("../pasteleria_urls.json").then((res) =>
    res.json()
  );
  let pasteleria = respuesta.pasteleria;

  main.classList.add("pasteleriaGaleriaGrid");

  for (let i = 0; i < pasteleria[elemento].length; i++) {
    main.innerHTML += `  <div
    class="pasteleriaGaleriaDivs  flex flex-col justify-center items-center" data-firstload="true"
  ><img class="animate-spin w-8" src="./assets/pasteleria/loading-svgrepo-com.svg" alt=""></div>`;
  }
  modal.id = "modalCarousel";
  modal.classList.add("pasteleriaGaleriaModal", "hidden");
  modal.innerHTML = `
  <div class="flex justify-end w-full"><img id="closeButton" class="w-10 mr-10 z-20" src="./assets/pasteleria/close-circle-svgrepo-com.svg" alt=""></div>
<div class="pasteleriaGaleriaCarousel flex justify-end items-start">


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
  navBar.classList.add("flex", "justify-center");
  navBar.id = "navRotiseria";
  navBar.innerHTML = ` 
  <div class="navBar flex-row-reverse">
  <div class="flex grow justify-center">
    <a class="navBarIcons" href="/rotiseria/burger">
    
      <img
      class=""
        
        src="../../assets/icons/navBarIcons/burgerIcon.svg"
        alt=""
      />
    </a>
    <a class="navBarIcons" href="/rotiseria/pizza" >
      <img
      class=""
        
        src="../../assets/icons/navBarIcons/pizzaIcon.svg"
        alt=""
      />
    </a>
    <a class="navBarIcons" href="/rotiseria/frita">
      <img
      class=""
        
        src="../../assets/icons/navBarIcons/fritaIcon.svg"
        alt=""
      />
    </a>
    <a class="navBarIcons" href="/rotiseria">
    <img class="" src="../../assets/icons/navBarIcons/home-svgrepo-com.svg" alt="" />
    </a>
  </div>
</div>
      `;
  return navBar;
}
function getNavBarPasteleria() {
  let nav = document.createElement("nav");
  nav.id = "navPasteleria";
  nav.innerHTML = `<div class="fixed-bottom flex w-full justify-end">
  <a
    class="mr-6 rounded-lg  rounded-b-none border-x-2 border-t-4 border-[#FA7268] bg-[#001220]"
    href="/pasteleria"
    ><img
      class="w-14"
      src="./assets/pasteleria/home-svgrepo-com.svg"
      alt=""
  /></a>
  </div>`;
  return nav;
}
function getHeader() {
  let header = document.createElement("header");
  header.innerHTML = `<div class="headerRotiseria">
    <a class="flex items-center justify-center" href="/">
      <img
        class="w-36"
        src="./assets/icons/header/logo.png"
        alt=""
      />
    </a>
    <div class="flex grow justify-evenly items-center py-1" id="switchContainer">
         <a
         href="/pasteleria"
      class="slideSwitchR"
      
    >
      <div
        class="flex w-12 bg-black animate-slideR justify-center rounded-full border-4 border-solid border-[#1776a6]"
      >
        <img
        
          class="w-8 py-1 "
          src="./assets/icons/header/rotiseria.svg"
          alt=""
        />
      </div>
      <p class="block text-white px-3">Rotiseria</p>
    </a>

      <a
      href="/rotiseria"
        class="slideSwitchP"
        
      >
        <div
          class="  animate-slide flex w-12 justify-center rounded-full border-2 border-solid border-[#FA7268] bg-[#001220]"
        >
          <img
           
            class="w-8 h-11 py-1"
            src="./assets/icons/header/pasteleria.svg"
            alt=""
          />
        </div>
  
        <p class="text-pink-200 px-2">Pasteleria</p>
      </a>
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
  function loadDivsBg(foodDiv, foodSrc) {
    let srcFood = foodSrc;
    let auxImg = new Image();
    auxImg.addEventListener("load", () => {
      foodDiv.setAttribute("style", `background-image: url(${auxImg.src});`);
      foodDiv.firstElementChild.remove();
    });
    auxImg.src = srcFood;
  }

  function getNewMain(comidaArray) {
    let main = document.createElement("main");
    let foodDivs;
    main.classList.add("foodGrid");

    if (comidaArray[0].type == "hamburguesa") {
      main.appendChild(MENU.getBurguerExtras);
    }
    comidaArray.forEach((cadaComida) => {
      if (cadaComida.type != "hamburguesa") {
        main.innerHTML += `<div class="foodDivs">
        <div class= "w-full h-full flex flex-col justify-center items-center"><img class="animate-spin w-28" src="./assets/rotiseria/homeIcons/loading-svgrepo-com.svg" alt=""></div>
          <div class="bg-secondary-R text-center shrink  text-black h-fit">
            <h1 class="font-extrabold">${cadaComida.nombre}</h1>
            <p class="font-semibold text-lg">$${cadaComida.precio}</p>
            <p>${cadaComida.descripcion}</p>
          </div>
        </div>`;
      } else {
        main.innerHTML += `<div class="foodDivs">
        <div class= "w-full h-full flex flex-col justify-center items-center"><img class="animate-spin w-28" src="./assets/rotiseria/homeIcons/loading-svgrepo-com.svg" alt=""></div>
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

    foodDivs = Array.from(main.getElementsByClassName("foodDivs"));

    for (let i = 0; i < foodDivs.length; i++) {
      loadDivsBg(foodDivs[i], comidaArray[i].src);
    }
    return main;
  }
  return getNewMain(comidaArray);
}
