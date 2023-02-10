export function navBar() {
  let navBar = document.createElement("nav");
  navBar.classList.add("navBar");
  navBar.innerHTML = ` 
  <div class="navBarIcons">
    <button>
      <img
        id="hambBtn"
        class="h-12 w-12"
        src="../../assets/icons/navBarIcons/burgerIcon.svg"
        alt=""
      />
    </button>
  </div>
  <div class="navBarIcons">
    <button>
      <img
        id="pizzaBtn"
        class="h-12 w-12"
        src="../../assets/icons/navBarIcons/pizzaIcon.svg"
        alt=""
      />
    </button>
  </div>
  <div class="navBarIcons">
    <button>
      <img
        id="fritaBtn"
        class="h-12 w-12"
        src="../../assets/icons/navBarIcons/fritaIcon.svg"
        alt=""
      />
    </button>
  </div>
`;
  return navBar;
}
