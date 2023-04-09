import { moveSlider } from "./init_move";

export function initAutoplay(images, sliderImages, sliderDots) {
  setInterval(() => {
    let currentNumber = +sliderImages.querySelector(".banner__item_active")
      .dataset.index;
    let nextNumber =
      currentNumber === images.length - 1 ? 0 : currentNumber + 1;
    moveSlider(nextNumber, sliderImages, sliderDots);
  }, 5000);
}
