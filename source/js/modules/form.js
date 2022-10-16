export default (formElement, resetRange) => {
  if (!formElement) {
    return;
  }

  formElement.addEventListener("reset", resetRange);
};
