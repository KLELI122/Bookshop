export function moveSlider(num, sliderImages, sliderDots) {
  sliderImages
    .querySelector(".banner__item_active")
    .classList.remove("banner__item_active");
  sliderImages.querySelector(".n" + num).classList.add("banner__item_active");
  sliderDots
    .querySelector(".dots__item_active")
    .classList.remove("dots__item_active");
  sliderDots.querySelector(".n" + num).classList.add("dots__item_active");
}
