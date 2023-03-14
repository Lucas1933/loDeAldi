import { urlRoute } from "./router.js";
import { ELEMENT } from "./elements.js";
export const RENDER = {
  getMenu: (path) => {
    return ELEMENT.menu[path];
  },

  currentNavBar: () => {
    return document.getElementById("index").getElementsByTagName("nav")[0];
  },
  currentMain: () => {
    return document.getElementById("index").getElementsByTagName("main")[0];
  },
  currentHeader: () => {
    return document.getElementById("index").getElementsByTagName("header")[0];
  },

  setHomeListeners: () => {
    const rotiseriaBtn = document.querySelector('[href="/rotiseria"]');
    const pasteleriaBtn = document.querySelector('[href="/pasteleria"]');

    rotiseriaBtn.addEventListener("click", (event) => {
      urlRoute(event);
    });
    pasteleriaBtn.addEventListener("click", (event) => {
      urlRoute(event);
    });
    rotiseriaBtn.addEventListener("animationend", () => {
      if (!rotiseriaBtn.classList.contains("animate-zoomInOutReverse")) {
        rotiseriaBtn.classList.remove("animate-zoomInOut");
        rotiseriaBtn.classList.add("animate-zoomInOutReverse");
      } else {
        rotiseriaBtn.classList.remove("animate-zoomInOutReverse");
        rotiseriaBtn.classList.add("animate-zoomInOut");
      }
    });

    pasteleriaBtn.addEventListener("animationend", () => {
      if (!pasteleriaBtn.classList.contains("animate-zoomInOutReverse")) {
        pasteleriaBtn.classList.remove("animate-zoomInOut");
        pasteleriaBtn.classList.add("animate-zoomInOutReverse");
      } else {
        pasteleriaBtn.classList.remove("animate-zoomInOutReverse");
        pasteleriaBtn.classList.add("animate-zoomInOut");
      }
    });
    rotiseriaBtn.classList.remove("animate-zoomInOutReverse");
    pasteleriaBtn.classList.remove("animate-zoomInOutReverse");
    rotiseriaBtn.classList.remove("animate-zoomInOut");
    pasteleriaBtn.classList.remove("animate-zoomInOut");
    rotiseriaBtn.classList.add("animate-zoomInOut");
    pasteleriaBtn.classList.add("animate-zoomInOut");
  },
  setPasteleriaHomeListeners: () => {
    let pasteleriaHomeDivs = Array.from(
      document.getElementsByClassName("pasteleriaHomeDivs")
    );
    pasteleriaHomeDivs.forEach((cadaDiv) => {
      cadaDiv.addEventListener("click", (event) => {
        urlRoute(event);
      });
    });
  },
  setHeaderListeners: () => {
    function setListeners() {
      let logo = document.querySelector('[href="/"]');
      let switchR = document.querySelector('[class="slideSwitchR"]');
      let switchP = document.querySelector('[class="slideSwitchP"]');
      let header = RENDER.currentHeader().firstElementChild;

      logo.addEventListener("click", (event) => {
        urlRoute(event);
      });
      switchR.addEventListener("click", (event) => {
        urlRoute(event);
        switchP.classList.remove("hidden");
        switchR.classList.add("hidden");
      });
      switchP.addEventListener("click", (event) => {
        urlRoute(event);
        switchR.classList.remove("hidden");
        switchP.classList.add("hidden");
      });
      switchP.classList.add("hidden");
      switchR.classList.add("hidden");
      if (header.classList.contains("headerRotiseria")) {
        switchR.classList.remove("hidden");
      } else {
        switchP.classList.remove("hidden");
      }
    }

    setListeners();
  },
  setNavBtnsListeners: () => {
    function setNavBtnsBgColor(btnTriggerEvent, btnsDivs) {
      btnsDivs.forEach((cadaBtnDiv) => {
        cadaBtnDiv.classList.remove("bg-secondary-R");
        cadaBtnDiv.classList.add("mt-2");
        cadaBtnDiv.firstElementChild.classList.remove("animate-bounce");
      });

      btnTriggerEvent.currentTarget.parentNode.classList.add("bg-secondary-R");
      btnTriggerEvent.currentTarget.parentNode.classList.remove("mt-2");
      btnTriggerEvent.currentTarget.classList.add("animate-bounce");
    }
    function setNavBtnsListeners() {
      let btnsDivs = Array.from(document.getElementsByClassName("navBarIcons"));
      let btns = [];
      btnsDivs[3].classList.add("bg-secondary-R");
      btnsDivs[3].firstElementChild.classList.add("animate-bounce");
      btnsDivs.forEach((cadaDiv) => {
        btns.push(cadaDiv.firstElementChild);
      });

      btns.forEach((cadaBtn) => {
        cadaBtn.addEventListener("click", (btnTriggerEvent) => {
          setNavBtnsBgColor(btnTriggerEvent, btnsDivs);
          urlRoute(btnTriggerEvent);
        });
      });
    }

    setNavBtnsListeners();
  },
  setFoodCardsWiggleAnimation: () => {
    for (let i = 0; i < RENDER.currentMain().children.length; i++) {
      RENDER.currentMain().children[i].addEventListener("animationend", () => {
        RENDER.currentMain().children[i].classList.add("animate-wiggle");
      });
    }
  },
  resetNavBar: () => {
    let icons = [];
    icons.push(document.getElementById("/rotiseria/pizza"));
    icons.push(document.getElementById("/rotiseria/burger"));
    icons.push(document.getElementById("/rotiseria/frita"));
    icons.forEach((cadaIcono) => {
      cadaIcono.classList.remove("animate-bounce");
      cadaIcono.parentElement.parentElement.classList.remove("bg-secondary-R");
    });
  },
  setGaleria: () => {
    let galeriaDivs = Array.from(
      document.getElementsByClassName("pasteleriaGaleriaDivs")
    );
    let carouselDiv = document.getElementsByClassName(
      "pasteleriaGaleriaCarousel"
    )[0];
    let modalCarousel = document.getElementById("modalCarousel");
    let urls = [];
    let nextBtn = document.getElementById("next");
    let prevBtn = document.getElementById("prev");
    let closeButton = document.getElementById("closeButton");
    for (let i = 0; i < galeriaDivs.length; i++) {
      galeriaDivs[i].addEventListener("click", (event) => {
        let index = galeriaDivs.indexOf(event.target);
        galeriaDivs.slice(index).forEach((cadaDiv) => {
          urls.push(cadaDiv.style.backgroundImage);
        });

        galeriaDivs.slice(0, index).forEach((cadaDiv) => {
          urls.push(cadaDiv.style.backgroundImage);
        });
        modalCarousel.classList.remove("hidden");
        carouselDiv.style = `background-image: ${urls[0]};`;
      });
    }

    nextBtn.addEventListener("click", () => {
      let currentIndex = urls.indexOf(carouselDiv.style.backgroundImage);
      let nextIndex = currentIndex + 1;
      if (nextIndex >= urls.length) {
        nextIndex = 0;
      }
      carouselDiv.style = `background-image: ${urls[nextIndex]};`;
    });
    prevBtn.addEventListener("click", () => {
      let currentIndex = urls.indexOf(carouselDiv.style.backgroundImage);
      let prevIndex = currentIndex - 1;
      if (prevIndex < 0) {
        prevIndex = urls.length - 1;
      }
      carouselDiv.style = `background-image: ${urls[prevIndex]};`;
    });

    modalCarousel.addEventListener("click", (event) => {
      if (event.target.id == "modalCarousel") {
        urls = [];
        modalCarousel.classList.add("hidden");
      }
    });
    closeButton.addEventListener("click", (event) => {
      urls = [];
      modalCarousel.classList.add("hidden");
    });
  },
};
