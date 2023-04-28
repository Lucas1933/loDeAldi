const MENU = {
  pizzas: [],
  hamburguesas: [],
  fritas: [],
  getBurguerExtras: getBurguerExtras(),
};

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
  MENU.pizzas.push(
    new Comida(
      "Muzzarella",
      1400,
      "",
      1,
      "./assets/rotiseria/pizzas/1.jpeg",
      "pizza"
    )
  );
  MENU.pizzas.push(
    new Comida(
      "Jamon y Morron",
      1600,
      "",
      2,
      "./assets/rotiseria/pizzas/2.jpeg",
      "pizza"
    )
  );
  MENU.pizzas.push(
    new Comida(
      "Calabresa",
      1600,
      "",
      3,
      "./assets/rotiseria/pizzas/404.png",
      "pizza"
    )
  );
  MENU.pizzas.push(
    new Comida(
      "Salchicha",
      1600,
      "",
      4,
      "./assets/rotiseria/pizzas/404.png",
      "pizza"
    )
  );
  MENU.pizzas.push(
    new Comida(
      "Choclo",
      1600,
      "",
      5,
      "./assets/rotiseria/pizzas/5.jpeg",
      "pizza"
    )
  );

  MENU.pizzas.push(
    new Comida(
      "Huevo Duro",
      1600,
      "",
      6,
      "./assets/rotiseria/pizzas/6.jpeg",
      "pizza"
    )
  );
  MENU.pizzas.push(
    new Comida(
      "Huevo Frito",
      1700,
      "",
      7,
      "./assets/rotiseria/pizzas/7.jpeg",
      "pizza"
    )
  );

  MENU.pizzas.push(
    new Comida(
      "Napolitana",
      1600,
      "",
      8,
      "./assets/rotiseria/pizzas/8.jpeg",
      "pizza"
    )
  );

  MENU.hamburguesas.push(
    new Comida(
      "Simple",
      1100,
      "(1 Medallon de carne de 150g en pan de papa)",
      1,
      "./assets/rotiseria/hamburguesas/404.png",
      "hamburguesa"
    )
  );
  MENU.hamburguesas.push(
    new Comida(
      "Cuarto de Libra",
      1500,
      "(Salsa de ketchup y cebolla, queso cheddar, 1 medallon de carne 150g en pan de papa)",
      2,
      "./assets/rotiseria/hamburguesas/404.png",
      "hamburguesa"
    )
  );
  MENU.hamburguesas.push(
    new Comida(
      "Completa Clasica",
      1500,
      "(Lechuga, tomate, jamon,queso muzzarella, 1 medallon de carne de 150g en pan de papa)",
      3,
      "./assets/rotiseria/hamburguesas/3.jpeg",
      "hamburguesa"
    )
  );
  MENU.hamburguesas.push(
    new Comida(
      "Cheddar y Panceta",
      1500,
      "(Panceta crocante, cebolla caramelizada, queso cheddar, 1 medallon de carne de 150g en pan de papa)",
      4,
      "./assets/rotiseria/hamburguesas/4.png",
      "hamburguesa"
    )
  );
  MENU.hamburguesas.push(
    new Comida(
      "Cebolla y Morron asado",
      1500,
      "(Morron asado, cebolla caramelizada, queso muzzarella, 1 medallon de carne de 150g en pan de papa)",
      5,
      "./assets/rotiseria/hamburguesas/5.jpeg",
      "hamburguesa"
    )
  );

  MENU.fritas.push(
    new Comida(
      "Fritas",
      800,
      " ",
      1,
      "./assets/rotiseria/fritas/404.png",
      "frita"
    )
  );
  MENU.fritas.push(
    new Comida(
      "Panceta, cheddar y verdeo",
      1000,
      " ",
      2,
      "./assets/rotiseria/fritas/2.jpeg",
      "frita"
    )
  );
  MENU.fritas.push(
    new Comida(
      "Salsa Picante",
      1000,
      " ",
      3,
      "./assets/rotiseria/fritas/404.png",
      "frita"
    )
  );

  return MENU;
}
function getBurguerExtras() {
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
        class="text-xl inline-block h-40 w-10 rounded-t-lg rounded-b-lg border-2 border-solid border-black bg-red-700 font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg"
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
    <div class="flex items-center min-h-[125px]" >
      <div class="collapse-horizontal collapse max-w-sm" id="collapseWidthExample">
        <div
          class="block text-xl  rounded-lg bg-white p-6 shadow-lg"
          
        >
          Otro medallon = $300 <br />
          Papas con cheddar, panceta y verdeo = $250
        </div>
      </div>
    </div>`;

  return aside;
}
