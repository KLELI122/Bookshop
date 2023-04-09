import "../scss/style.scss";
import { initSlider } from "./slider/main_slider.js";
import { initApi } from "./api/main_api.js";

document.addEventListener("DOMContentLoaded", function () {
  initSlider();
  initApi();
});
