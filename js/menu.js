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
      1100,
      "",
      1,
      "./assets/rotiseria/pizzas/1.jpeg",
      "pizza"
    )
  );
  MENU.pizzas.push(
    new Comida(
      "Jamon y Morron",
      1400,
      "",
      2,
      "./assets/rotiseria/pizzas/2.jpeg",
      "pizza"
    )
  );
  MENU.pizzas.push(
    new Comida(
      "Calabresa",
      1400,
      "",
      3,
      "./assets/rotiseria/pizzas/404.png",
      "pizza"
    )
  );
  MENU.pizzas.push(
    new Comida(
      "Choclo",
      1400,
      "",
      4,
      "./assets/rotiseria/pizzas/4.jpeg",
      "pizza"
    )
  );

  MENU.pizzas.push(
    new Comida(
      "Huevo Duro",
      1400,
      "",
      5,
      "./assets/rotiseria/pizzas/5.jpeg",
      "pizza"
    )
  );
  MENU.pizzas.push(
    new Comida(
      "Huevo Frito",
      1400,
      "",
      6,
      "./assets/rotiseria/pizzas/6.jpeg",
      "pizza"
    )
  );

  MENU.pizzas.push(
    new Comida(
      "Napolitana",
      1400,
      "",
      7,
      "./assets/rotiseria/pizzas/7.jpeg",
      "pizza"
    )
  );

  MENU.hamburguesas.push(
    new Comida(
      "Simple",
      750,
      "(1 Medallon de carne de 150g en pan de papa)",
      1,
      "./assets/rotiseria/hamburguesas/404.png",
      "hamburguesa"
    )
  );
  MENU.hamburguesas.push(
    new Comida(
      "Cuarto de Libra",
      950,
      "(Salsa de ketchup y cebolla, queso cheddar, 1 medallon de carne 150g en pan de papa)",
      2,
      "./assets/rotiseria/hamburguesas/404.png",
      "hamburguesa"
    )
  );
  MENU.hamburguesas.push(
    new Comida(
      "Completa Clasica",
      950,
      "(Lechuga, tomate, jamon,queso muzzarella, 1 medallon de carne de 150g en pan de papa)",
      3,
      "./assets/rotiseria/hamburguesas/3.jpeg",
      "hamburguesa"
    )
  );
  MENU.hamburguesas.push(
    new Comida(
      "Cheddar y Panceta",
      950,
      "(Panceta crocante, cebolla caramelizada, queso cheddar, 1 medallon de carne de 150g en pan de papa)",
      4,
      "./assets/rotiseria/hamburguesas/4.png",
      "hamburguesa"
    )
  );
  MENU.hamburguesas.push(
    new Comida(
      "Cebolla y Morron asado",
      950,
      "(Morron asado, cebolla caramelizada, queso muzzarella, 1 medallon de carne de 150g en pan de papa)",
      5,
      "./assets/rotiseria/hamburguesas/5.jpeg",
      "hamburguesa"
    )
  );

  MENU.fritas.push(
    new Comida(
      "Fritas",
      700,
      " ",
      1,
      "./assets/rotiseria/fritas/404.png",
      "frita"
    )
  );
  MENU.fritas.push(
    new Comida(
      "Panceta, cheddar y verdeo",
      850,
      " ",
      2,
      "./assets/rotiseria/fritas/2.jpeg",
      "frita"
    )
  );
  MENU.fritas.push(
    new Comida(
      "Salsa Picante",
      850,
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
