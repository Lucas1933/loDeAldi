export function getHeader() {
  let header = document.createElement("header");
  header.innerHTML = `<div class="fixed top-0 flex w-full justify-center">
    <img class="w-36" src="./assets/logo.png" alt="" />
  </div>`;
  return header;
}
