// PixelPerfect
const Breakpoint = {
  MOBILE: 320,
  TABLET: 768,
  DESKTOP: 1440
};

window.pinegladePP = {
  breakpoints: Object.values(Breakpoint)
};

// Делаем редактируемым контент по нажатию E
document.querySelectorAll("h1, h2, h3, p, b, a, button, label, legend").forEach((element) => {
  element.spellcheck = false;
});

document.addEventListener("keydown", (evt) => {
  if (evt.key.toLowerCase() === "e") {
    document.body.contentEditable = document.body.contentEditable !== "true";
  }
});
