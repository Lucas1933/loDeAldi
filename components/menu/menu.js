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
    new Comida(
      "Muzzarella",
      1000,
      "pizza de muzza capo media pila",
      1,
      "./assets/pizzas/1.jpeg"
    )
  );

  menu.addPizza(
    new Comida(
      "Calabresa",
      1500,
      "pizza de chorizo en tu culo de nuevo jaja",
      2,
      "./assets/pizzas/2.jpeg"
    )
  );
  menu.addPizza(
    new Comida("Anchoa", 1560, "pizza de mar", 3, "./assets/pizzas/3.jpeg")
  );
  menu.addPizza(
    new Comida(
      "Cochina",
      2000,
      "Como tu vieja oink oink",
      4,
      "./assets/pizzas/4.jpeg"
    )
  );
  menu.addPizza(
    new Comida("Example", 200000, "REDACTED", 5, "./assets/pizzas/5.jpeg")
  );

  menu.addHamburguesa(
    new Comida(
      "la ricarda",
      850,
      "paty con queso",
      1,
      "./assets/hamburguesas/1.jpeg"
    )
  );
  menu.addHamburguesa(
    new Comida(
      "burguen queen",
      900,
      "paty con queso feminista",
      2,
      "./assets/hamburguesas/2.jpeg"
    )
  );
  menu.addHamburguesa(
    new Comida(
      "cangreburger",
      1500,
      "la concha de tu madre bob sponja",
      3,
      "./assets/hamburguesas/3.jpeg"
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
        <p>(${cadaComida.descripcion})</p>
      </div>
    </div>`;
  });

  return main;
}
