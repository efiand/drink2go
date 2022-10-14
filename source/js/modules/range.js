import noUiSlider from "nouislider";

export default (containerElement = null) => {
  if (!containerElement) {
    return;
  }

  const rangeElement = containerElement.querySelector(".range__target");
  const [fromFieldElement, toFieldElement] = containerElement.querySelectorAll("input");

  const min = parseInt(fromFieldElement.min, 10);
  const max = parseInt(fromFieldElement.max, 10);
  const step = parseInt(fromFieldElement.step, 10);
  const start = [fromFieldElement.value || min, toFieldElement.value || max];

  const handleChange = () => {
    rangeElement.noUiSlider.set([fromFieldElement.value, toFieldElement.value]);
  };

  noUiSlider.create(rangeElement, {
    connect: true,
    cssPrefix: "range__",
    handleAttributes: [
      {
        "aria-label": "Меньше."
      },
      {
        "aria-label": "Больше."
      }
    ],
    range: {
      min,
      max
    },
    start,
    step
  });

  rangeElement.noUiSlider.on("update", ([startValue, endValue]) => {
    fromFieldElement.value = parseInt(startValue, 10);
    toFieldElement.value = parseInt(endValue, 10);
  });
  fromFieldElement.addEventListener("change", handleChange);
  toFieldElement.addEventListener("change", handleChange);

  rangeElement.classList.remove("range__target--no-js");

  return () => rangeElement.noUiSlider.set(start);
};
