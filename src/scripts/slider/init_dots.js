import { moveSlider } from "./init_move";

export function initDots(images, sliderImages, sliderDots) {
  images.forEach((image, index) => {
    let dot = `<div class="dots__item n${index} ${
      index === 0 ? "dots__item_active" : ""
    }" data-index="${index}"></div>`;
    sliderDots.innerHTML += dot;
  });
  sliderDots.querySelectorAll(".dots__item").forEach((dot) => {
    dot.addEventListener("click", function () {
      moveSlider(this.dataset.index, sliderImages, sliderDots);
    });
  });
}
