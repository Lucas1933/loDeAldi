import { createMenu, displayMenu } from "../menu/menu.js";
export function setBtnsListeners() {
  let btnsDivs = Array.from(document.getElementsByClassName("sideBarIcons"));
  let btns = [];
  btnsDivs.forEach((cadaDiv) => {
    btns.push(cadaDiv.firstElementChild);
  });

  btns.forEach((cadaBtn) => {
    cadaBtn.addEventListener("click", (btnTriggerEvent) => {
      changeBgColor(btnTriggerEvent, btnsDivs);
      changeMenu(btnTriggerEvent);
    });
  });
}

function changeBgColor(btnTriggerEvent, btnsDivs) {
  btnsDivs.forEach((cadaBtnDiv) => {
    cadaBtnDiv.classList.remove("bg-yellow-300");
  });
  btnTriggerEvent.target.parentNode.parentNode.classList.add("bg-yellow-300");
}

function changeMenu(btnTriggerEvent) {
  let menu = createMenu();
  let main = document.getElementsByTagName("main")[0];
  let btnPressed = btnTriggerEvent.target.id;
  if (btnPressed == "pizzaBtn") {
    main.replaceWith(displayMenu(menu.getPizzas()));
  } else if (btnPressed == "hambBtn") {
    main.replaceWith(displayMenu(menu.getHamburguesas()));
  } else {
    main.replaceWith(displayMenu(menu.getFritas()));
  }
}
