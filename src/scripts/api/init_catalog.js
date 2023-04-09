import { createApiUrl } from "./init_request";

const namesCategories = [
  {
    name: "Architecture",
    apiName: "Architecture",
  },
  {
    name: "Art & Fashion",
    apiName: "Art",
  },
  {
    name: "Biography",
    apiName: "Biography & Autobiography",
  },
  {
    name: "Business",
    apiName: "Business",
  },
  {
    name: "Crafts & Hobbies",
    apiName: "Crafts & Hobbies",
  },
  {
    name: "Drama",
    apiName: "Drama",
  },
  {
    name: "Fiction",
    apiName: "Fiction",
  },
  {
    name: "Food & Drink",
    apiName: "Cooking",
  },
  {
    name: "Health & Wellbeing",
    apiName: "Health & Fitness",
  },
  {
    name: "History & Politics",
    apiName: "History",
  },
  {
    name: "Humor",
    apiName: "Humor",
  },
  {
    name: "Poetry",
    apiName: "Poetry",
  },
  {
    name: "Psychology",
    apiName: "Psychology",
  },
  {
    name: "Science",
    apiName: "Science",
  },
  {
    name: "Technology",
    apiName: "Technology",
  },
  {
    name: "Travel & Maps",
    apiName: "Travel",
  },
];

const categories = document.querySelector(".j-categories");
const cards = document.querySelector(".j-cards");
const moreBtn = document.querySelector(".j-moreBtn");

let startIndex = 0;
let categoriesList;
let nameCategoryApi;

export const initCatalog = () => {
  namesCategories.forEach((item) => {
    categories.innerHTML += `<li class="categories__item">${item.name}</li>`;
  });
  categoriesList = document.querySelectorAll(".categories__item");
  categoriesList[0].classList.add("categories__item_active");

  nameCategoryApi = namesCategories[0].apiName;
  createApiUrl(nameCategoryApi, startIndex);

  categoriesList.forEach((item) => {
    item.addEventListener("click", changeCategory);
  });
  moreBtn.addEventListener("click", loadMore);
};

const changeCategory = (event) => {
  categoriesList.forEach((item) => {
    if (item.classList.contains("categories__item_active"))
      item.classList.remove("categories__item_active");
  });
  event.target.classList.add("categories__item_active");

  const nameCategory = event.target.textContent;
  namesCategories.forEach((item) => {
    if (item.name == nameCategory) nameCategoryApi = item.apiName;
  });
  startIndex = 0;
  cards.innerHTML = "";

  createApiUrl(nameCategoryApi, startIndex);
};

const loadMore = () => {
  startIndex += 6;
  createApiUrl(nameCategoryApi, startIndex);
};
