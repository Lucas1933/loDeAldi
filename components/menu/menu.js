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
  constructor(nombre, precio, descripcion, id, src) {
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
    this.id = id;
    this.src = src;
  }
}
export function createMenu() {
  let menu = new Menu();
  menu.addPizza(
    new Comida("Muzzarella", 1100, "", 1, "./assets/pizzas/1.jpeg")
  );

  menu.addPizza(
    new Comida("Jamon y Morron", 1400, "", 2, "./assets/pizzas/2.jpeg")
  );
  menu.addPizza(new Comida("Calabresa", 1400, "", 3, "./assets/pizzas/3.jpeg"));
  menu.addPizza(new Comida("Choclo", 1400, "", 4, "./assets/pizzas/4.jpeg"));
  menu.addPizza(
    new Comida("Huevo Duro", 1400, "", 5, "./assets/pizzas/5.jpeg")
  );
  menu.addPizza(
    new Comida("Huevo Frito", 1400, "", 6, "./assets/pizzas/6.jpeg")
  );
  menu.addPizza(
    new Comida("Napolitana", 1400, "", 7, "./assets/pizzas/7.jpeg")
  );

  menu.addHamburguesa(
    new Comida(
      "Simple",
      750,
      "(1 Medallon de carne de 150g en pan de papa)",
      1,
      "./assets/hamburguesas/1.jpeg"
    )
  );
  menu.addHamburguesa(
    new Comida(
      "Cuarto de Libra",
      950,
      "(Salsa de ketchup y cebolla, queso cheddar, 1 medallon de carne 150g en pan de papa)",
      2,
      "./assets/hamburguesas/2.jpeg"
    )
  );
  menu.addHamburguesa(
    new Comida(
      "Completa Clasica",
      950,
      "(Lechuga, tomate, jamon,queso muzzarella, 1 medallon de carne de 150g en pan de papa)",
      3,
      "./assets/hamburguesas/3.jpeg"
    )
  );
  menu.addHamburguesa(
    new Comida(
      "Cheddar y Panceta",
      950,
      "(Panceta crocante, cebolla caramelizada, queso cheddar, 1 medallon de carne de 150g en pan de papa)",
      4,
      "./assets/hamburguesas/4.png"
    )
  );
  menu.addHamburguesa(
    new Comida(
      "Cebolla y Morron asado",
      950,
      "(Morron asado, cebolla caramelizada, queso muzzarella, 1 medallon de carne de 150g en pan de papa)",
      5,
      "./assets/hamburguesas/5.jpeg"
    )
  );
  return menu;
}
export function displayMenu(comida) {
  let comidaArray = comida;
  let main = document.createElement("main");
  main.classList.add("foodGrid");
  comidaArray.forEach((cadaComida) => {
    main.innerHTML += `<div
      style="background-image: url('${cadaComida.src}')"
      class="foodDivs"
    >
      <div class="bg-yellow-300 text-center  text-black">
        <h1 class="font-extrabold">${cadaComida.nombre}</h1>
        <p class="font-semibold text-lg">$${cadaComida.precio}</p>
        <p>${cadaComida.descripcion}</p>
      </div>
    </div>`;
  });

  return main;
}
