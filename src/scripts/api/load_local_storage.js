const counter = document.querySelector(".j-counter");

export const loadLocalStorage = (buyBtn) => {
  buyBtn.forEach((item) => {
    if (
      localStorage.getItem(`${item.getAttribute("data-identifier")}`) ==
      "in the cart"
    ) {
      item.classList.add("card__btn_pressed");
      item.innerHTML = "in the cart";
    }
  });

  if (
    localStorage.getItem("basket") == null ||
    localStorage.getItem("basket") == 0
  ) {
    counter.style.display = "none";
  } else {
    counter.style.display = "block";
    counter.innerHTML = localStorage.getItem("basket");
  }
};
