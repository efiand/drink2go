export default (sortingElement) => {
  const chosenElement = sortingElement.querySelector(".sorting__chosen");

  chosenElement.addEventListener("click", () => {
    chosenElement.classList.toggle("sorting__chosen--opened");
  });

  document.addEventListener("click", (evt) => {
    if (evt.target !== chosenElement) {
      chosenElement.classList.remove("sorting__chosen--opened");
    }
  });

  sortingElement.classList.remove("sorting--no-js");
};
