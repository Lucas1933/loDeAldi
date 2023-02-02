let header = document.getElementsByTagName("header")[0];
let headerFirstChild = header.firstElementChild;
function close() {
  headerFirstChild.innerHTML = "CERRADO";
  headerFirstChild.classList.remove("bg-green-300");
  headerFirstChild.classList.add("bg-red-600");
}
function open() {
  headerFirstChild.innerHTML = "ABIERTO";
  headerFirstChild.classList.remove("bg-red-600");
  headerFirstChild.classList.add("bg-green-300");
}
close();
let booleano = false;
console.log(new Date().getMinutes());
async function funcion() {
  while (booleano) {
    console.log("ejecucion en: " + new Date().getSeconds());
    if (new Date().getMinutes() == 9) {
      open();
    }
  }
}
await funcion();
