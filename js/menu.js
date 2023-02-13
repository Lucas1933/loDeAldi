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
export function getMenu() {
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

export function getBurguerExtras() {
  let aside = document.createElement("aside");
  aside.classList.add(
    "flex",
    "h-fit",
    "fixed",
    "right-0",
    "translate-y-60",
    "z-50"
  );
  aside.innerHTML = `<div class="mb-4">
      <button
        class="text-md inline-block h-32 w-10 rounded-t-lg rounded-b-lg border-2 border-solid border-black bg-red-700 font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseWidthExample"
        aria-expanded="false"
        aria-controls="collapseWidthExample"
      >
        E <br />
        x <br />
        t <br />
        r <br />
        a <br />
        s <br />
      </button>
    </div>
    <div style="min-height: 120px">
      <div class="collapse-horizontal collapse" id="collapseWidthExample">
        <div
          class="block max-w-sm rounded-lg bg-white p-6 shadow-lg"
          style="width: 300px"
        >
          Otro medallon = $250 <br />
          Papas con cheddar, panceta y verdeo = $200
        </div>
      </div>
    </div>`;

  return aside;
}
