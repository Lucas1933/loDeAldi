export function getHeader() {
  let header = document.createElement("header");
  header.innerHTML = `<div class="fixed top-0 flex w-full justify-center z-50">
    <img class="w-40" src="./assets/logo.png" alt="" />
  </div>`;
  return header;
}
{
  /* <aside class="fixed right-0 flex translate-y-60">
        <div class="mb-4">
          <button
            class="text-md inline-block h-32 w-10 rounded-t-lg rounded-b-lg border-2 border-solid border-black bg-red-500 font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg"
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
        </div>
      </aside> */
}
