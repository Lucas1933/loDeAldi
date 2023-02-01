import { hamburguesas } from "../hamburgesas/hamburgesas.js";
import { pizzas } from "../pizzas/pizzas.js";
import { fritas } from "../fritas/fritas.js";
export function setBtnsListeners() {
  let btnsDivs = Array.from(document.getElementsByClassName("sideBarIcons"));
  let btns = [];
  btnsDivs.forEach((cadaDiv) => {
    btns.push(cadaDiv.firstElementChild);
  });

  btns.forEach((cadaBtn) => {
    cadaBtn.addEventListener("click", (btnTriggerEvent) => {
      changeBgColor(btnTriggerEvent, btnsDivs);
      changeSection(btnTriggerEvent);
    });
  });
}

function changeBgColor(btnTriggerEvent, btnsDivs) {
  btnsDivs.forEach((cadaBtnDiv) => {
    cadaBtnDiv.classList.remove("bg-fuchsia-300");
  });
  btnTriggerEvent.target.parentNode.parentNode.classList.add("bg-fuchsia-300");
}

function changeSection(btnTriggerEvent) {
  let section = document.getElementsByTagName("section")[0];
  let btnPressed = btnTriggerEvent.target.id;
  if (btnPressed == "pizzaBtn") {
    section.replaceWith(pizzas());
  } else if (btnPressed == "hambBtn") {
    section.replaceWith(hamburguesas());
  } else {
    section.replaceWith(fritas());
  }
}
