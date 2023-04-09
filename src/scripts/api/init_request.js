import { createAuthors } from "./create_content";
import { createBookCover } from "./create_content";
import { createDesc } from "./create_content";
import { createRatingStars } from "./create_content";
import { createRatingReviews } from "./create_content";
import { createPrice } from "./create_content";

import { addToBasket } from "./add_to_basket";
import { loadLocalStorage } from "./load_local_storage";

const apiKey = "AIzaSyCFDRm5eRPTtHblf-PTmRUQahWZ02drD3g";
const apiUrl = "https://www.googleapis.com/books/v1/volumes";

export const createApiUrl = (nameCategory, startIndex) => {
  const params = new URLSearchParams();
  params.append("q", `subject:${nameCategory}`);
  params.append("key", apiKey);
  params.append("printType", "books");
  params.append("startIndex", startIndex);
  params.append("maxResults", 6);
  params.append("langRestrict", "en");
  useRequest(`${apiUrl}?${params}`, displayResult);
};

const useRequest = async (url, displayResult) => {
  return await fetch(url)
    .then((response) => response.json())
    .then((result) => {
      displayResult(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

const displayResult = (apiData) => {
  const cards = document.querySelector(".j-cards");
  apiData.items.forEach((item) => {
    const card = `
      <div class="card">
        ${createBookCover(item)}
        <div class="desc">
          ${createAuthors(item)}
          <span class="desc__title">${item.volumeInfo.title}</span>
          <div class="rating">
            <div class="rating__stars">${createRatingStars(item)}</div>
            ${createRatingReviews(item)}
          </div>
          ${createDesc(item)}
          ${createPrice(item)}
          <button class="card__btn j-buyBtn" data-identifier=${
            item.id
          }>buy now</button>
        </div>
      </div>
    `;
    cards.innerHTML += card;
  });
  const buyBtn = document.querySelectorAll(".j-buyBtn");
  buyBtn.forEach((item) => {
    item.addEventListener("click", addToBasket);
  });
  loadLocalStorage(buyBtn);
};
