import loadPP from "pineglade-pp";

const Breakpoint = {
  MOBILE: 320,
  TABLET: 768,
  DESKTOP: 1440
};

export default () => {
  window.pinegladePP = {
    breakpoints: Object.values(Breakpoint)
  };

  loadPP();
};
