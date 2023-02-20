import { getNavBar } from "./navBar.js";

export const DOM = {
  root: document.getElementById("index"),
  navBar: getNavBar(),
  header: getHeader(),
};

function getHeader() {
  let header = document.createElement("header");
  header.innerHTML = `<div class="fixed top-0 flex w-full justify-center z-50">
    <img id="/" class="w-40" src="./assets/logo.png" alt="" />
  </div>`;
  return header;
}
