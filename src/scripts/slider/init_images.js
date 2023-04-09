export function initImages(images, sliderImages) {
  images.forEach((image, index) => {
    let imageDiv = `<div class="banner__item n${index} ${
      index === 0 ? "banner__item_active" : ""
    }" style="background-image:url(${
      images[index].url
    });" data-index="${index}"}"></div>`;
    sliderImages.innerHTML += imageDiv;
  });
}
