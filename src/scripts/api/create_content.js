export const createAuthors = (data) => {
  let authors = "";
  if (data.volumeInfo.hasOwnProperty("authors")) {
    authors = data.volumeInfo.authors;
    if (data.volumeInfo.authors.length > 1) {
      authors = `${data.volumeInfo.authors[0]}, ${data.volumeInfo.authors[1]}`;
    }
  }
  return `<span class="desc__author">${authors}</span>`;
};

export const createBookCover = (data) => {
  let imgLink = "./images/placeholder.png";
  if (data.volumeInfo.hasOwnProperty("imageLinks"))
    imgLink = data.volumeInfo.imageLinks.thumbnail;
  return `<img class="card__img" src="${imgLink}" alt="book cover">`;
};

export const createDesc = (data) => {
  let desc = "";
  if (data.volumeInfo.hasOwnProperty("description"))
    desc = data.volumeInfo.description;
  return `<span class="desc__text">${desc}</span>`;
};

export const createRatingStars = (data) => {
  let ratingStars = "";
  let countStars;
  if (data.volumeInfo.hasOwnProperty("averageRating")) {
    countStars = data.volumeInfo.averageRating;
    for (let i = 0; i < countStars; i++) {
      ratingStars += `<img src="./images/star.svg" alt="star">`;
    }
    for (let i = 0; i < 5 - countStars; i++) {
      ratingStars += `<img src="./images/star_empty.svg" alt="empty star">`;
    }
  }
  return ratingStars;
};

export const createRatingReviews = (data) => {
  let ratingReviews = "";
  if (data.volumeInfo.hasOwnProperty("ratingsCount")) {
    ratingReviews = `${data.volumeInfo.averageRating} review`;
  }
  return `<span class="rating__reviews">${ratingReviews}</span>`;
};

export const createPrice = (data) => {
  let price = "";
  let currency = "";
  if (data.saleInfo.hasOwnProperty("retailPrice")) {
    price = data.saleInfo.retailPrice.amount;
    currency = data.saleInfo.retailPrice.currencyCode;
  }
  return `<span class="desc__price">${price} ${currency}</span>`;
};
