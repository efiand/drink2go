import initForm from "./modules/form.js";
import initMap from "./modules/map.js";
import initMenu from "./modules/menu.js";
import initRange from "./modules/range.js";
import initSlider from "./modules/slider.js";
import initSorting from "./modules/sorting.js";

initMenu();

initSlider(document.querySelector(".slider"));

initForm(document.querySelector(".catalog"), initRange(document.querySelector(".range")));

initSorting(document.querySelector(".sorting"));

initMap(document.querySelector(".map"));
