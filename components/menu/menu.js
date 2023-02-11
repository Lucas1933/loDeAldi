import { getExtras } from "../hamburguesas/extras.js";
import "tw-elements";
class Menu {
  pizzas = [];
  hamburguesas = [];
  fritas = [];
  constructor() {}
  addPizza(pizza) {
    this.pizzas.push(pizza);
  }
  addHamburguesa(hamburguesa) {
    this.hamburguesas.push(hamburguesa);
  }
  addFrita(frita) {
    this.fritas.push(frita);
  }

  getPizzas() {
    return this.pizzas;
  }
  getHamburguesas() {
    return this.hamburguesas;
  }
  getFritas() {
    return this.fritas;
  }
}

class Comida {
  constructor(nombre, precio, descripcion, id, src, type) {
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
    this.id = id;
    this.src = src;
    this.type = type;
  }
}
export function createMenu() {
  let menu = new Menu();
  menu.addPizza(
    new Comida("Muzzarella", 1100, "", 1, "./assets/pizzas/1.jpeg", "pizza")
  );
  menu.addPizza(
    new Comida("Jamon y Morron", 1400, "", 2, "./assets/pizzas/2.jpeg", "pizza")
  );
  menu.addPizza(
    new Comida("Calabresa", 1400, "", 3, "./assets/pizzas/404.png", "pizza")
  );
  menu.addPizza(
    new Comida("Choclo", 1400, "", 4, "./assets/pizzas/4.jpeg", "pizza")
  );
  menu.addPizza(
    new Comida("Huevo Duro", 1400, "", 5, "./assets/pizzas/404.png", "pizza")
  );
  menu.addPizza(
    new Comida("Huevo Frito", 1400, "", 6, "./assets/pizzas/6.jpeg", "pizza")
  );
  menu.addPizza(
    new Comida("Napolitana", 1400, "", 7, "./assets/pizzas/7.jpeg", "pizza")
  );

  menu.addHamburguesa(
    new Comida(
      "Simple",
      750,
      "(1 Medallon de carne de 150g en pan de papa)",
      1,
      "./assets/hamburguesas/404.png",
      "hamburguesa"
    )
  );
  menu.addHamburguesa(
    new Comida(
      "Cuarto de Libra",
      950,
      "(Salsa de ketchup y cebolla, queso cheddar, 1 medallon de carne 150g en pan de papa)",
      2,
      "./assets/hamburguesas/404.png",
      "hamburguesa"
    )
  );
  menu.addHamburguesa(
    new Comida(
      "Completa Clasica",
      950,
      "(Lechuga, tomate, jamon,queso muzzarella, 1 medallon de carne de 150g en pan de papa)",
      3,
      "./assets/hamburguesas/3.jpeg",
      "hamburguesa"
    )
  );
  menu.addHamburguesa(
    new Comida(
      "Cheddar y Panceta",
      950,
      "(Panceta crocante, cebolla caramelizada, queso cheddar, 1 medallon de carne de 150g en pan de papa)",
      4,
      "./assets/hamburguesas/4.png",
      "hamburguesa"
    )
  );
  menu.addHamburguesa(
    new Comida(
      "Cebolla y Morron asado",
      950,
      "(Morron asado, cebolla caramelizada, queso muzzarella, 1 medallon de carne de 150g en pan de papa)",
      5,
      "./assets/hamburguesas/5.jpeg",
      "hamburguesa"
    )
  );

  menu.addFrita(
    new Comida("Fritas", 700, " ", 1, "./assets/fritas/404.png", "frita")
  );
  menu.addFrita(
    new Comida(
      "Panceta, cheddar y verdeo",
      850,
      " ",
      2,
      "./assets/fritas/2.jpeg",
      "frita"
    )
  );
  menu.addFrita(
    new Comida("Salsa Picante", 850, " ", 3, "./assets/fritas/404.png", "frita")
  );
  return menu;
}
export function displayMenu(comida) {
  let comidaArray = comida;
  let main = document.createElement("main");
  main.classList.add("foodGrid");
  if (comidaArray[0].type == "hamburguesa") {
    main.appendChild(getExtras());
  }
  comidaArray.forEach((cadaComida) => {
    if (cadaComida.type != "hamburguesa") {
      main.innerHTML += `<div
      style="background-image: url('${cadaComida.src}')"
      class="foodDivs"
    >
      <div class="bg-primary text-center  text-black">
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
        <div class="grow"><p class="font-extrabold rounded-r-lg rounded-b-lg bg-primary text-center inline-block w-16 ">Incluye fritas!</p></div>

          <div class="bg-primary text-center text-black">
            <h1 class="font-extrabold">${cadaComida.nombre}</h1>
            <p class="text-lg font-semibold">$${cadaComida.precio}</p>
            <p>${cadaComida.descripcion}</p>
          </div>
        </div>`;
    }
  });

  return main;
}
