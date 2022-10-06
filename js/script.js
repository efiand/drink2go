const hamburgerElement = document.querySelector(".page-header__hamburger");

hamburgerElement.addEventListener("click", () => {
  const expanded = hamburgerElement.getAttribute("aria-expanded");
  hamburgerElement.setAttribute("aria-expanded", expanded === "true" ? "false" : "true");
});
