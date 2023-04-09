import { initImages } from "./init_images";
import { initDots } from "./init_dots";
import { initAutoplay } from "./init_autoplay";

export function initSlider() {
  const images = [
    { url: "./images/banner1.jpg" },
    { url: "./images/banner2.jpg" },
    { url: "./images/banner3.jpg" },
  ];
  const sliderImages = document.querySelector(".j-banner");
  const sliderDots = document.querySelector(".j-dots");

  initImages(images, sliderImages);
  initDots(images, sliderImages, sliderDots);
  initAutoplay(images, sliderImages, sliderDots);
}
