export function setBtnsListeners() {
  let btnsDivs = Array.from(document.getElementsByClassName("sideBarIcons"));
  let btns = [];

  btnsDivs.forEach((cadaDiv) => {
    btns.push(cadaDiv.firstElementChild);
  });

  btns.forEach((cadaBtn) => {
    cadaBtn.addEventListener("click", (btnTriggerEvent) => {
      btnsDivs.forEach((cadaBtnDiv) => {
        cadaBtnDiv.classList.remove("bg-fuchsia-300");
      });
      btnTriggerEvent.target.parentNode.parentNode.classList.add(
        "bg-fuchsia-300"
      );
    });
  });
}
