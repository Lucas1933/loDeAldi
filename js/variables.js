import { getNavBar } from "./navBar.js";

export const get = {
  root: document.getElementById("index"),
  navBar: getNavBar(),
  header: getHeader(),
  home: getHome(),
};

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
