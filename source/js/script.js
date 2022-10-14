import initCatalog from "./modules/catalog.js";
import initMenu from "./modules/menu.js";
import initRange from "./modules/range.js";
import initSlider from "./modules/slider.js";

initMenu();

initSlider(document.querySelector(".slider"));

initCatalog(document.querySelector(".catalog"), initRange(document.querySelector(".range")));
