export default () => {
  const navElement = document.querySelector(".page-header__nav");
  const hamburgerElement = navElement.querySelector(".page-header__link--hamburger");

  hamburgerElement.addEventListener("click", () => {
    const expanded = hamburgerElement.getAttribute("aria-expanded");
    hamburgerElement.setAttribute("aria-expanded", expanded === "true" ? "false" : "true");
  });

  navElement.classList.remove("page-header__nav--initial");
};
