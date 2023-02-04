export function navBar() {
  let navBar = document.createElement("nav");
  navBar.classList.add("navBar");
  navBar.innerHTML = ` 
  <div class="sideBarIcons">
    <button>
      <img
        id="hambBtn"
        class="h-12 w-12"
        src="../../assets/icons/navBarIcons/burgerIconB.svg"
        alt=""
      />
    </button>
  </div>
  <div class="sideBarIcons">
    <button>
      <img
        id="pizzaBtn"
        class="h-12 w-12"
        src="../../assets/icons/navBarIcons/pizzaIconB.svg"
        alt=""
      />
    </button>
  </div>
  <div class="sideBarIcons">
    <button>
      <img
        id="fritaBtn"
        class="h-12 w-12"
        src="../../assets/icons/navBarIcons/fritaIconB.svg"
        alt=""
      />
    </button>
  </div>
`;
  return navBar;
}
