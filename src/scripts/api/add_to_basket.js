let count = localStorage.getItem("basket");
const counter = document.querySelector(".j-counter");

export const addToBasket = (event) => {
  if (event.target.classList.contains("card__btn_pressed")) {
    event.target.classList.remove("card__btn_pressed");
    event.target.innerHTML = "buy now";
    count--;
    delete localStorage[`${event.target.getAttribute("data-identifier")}`];
  } else {
    event.target.classList.add("card__btn_pressed");
    event.target.innerHTML = "in the cart";
    count++;
    localStorage.setItem(
      event.target.getAttribute("data-identifier"),
      "in the cart"
    );
  }

  if (count == 0) {
    counter.style.display = "none";
  } else {
    counter.style.display = "block";
    counter.innerHTML = count;
  }

  localStorage.setItem("basket", count);
};
