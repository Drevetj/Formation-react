const titles = [
  "Philosopher's Stone",
  "Chamber of Secrets",
  "Prisoner of Azkaban",
  "Goblet of Fire",
  "Order of the Phoenix"
];

const reduction = [0, 5, 10, 20, 25];

const basketPrice = basket => {
  let uniqBasket          = [...new Set(basket)];
  let uniqBasketLength    = uniqBasket.length;
  let nbOfDuplicatedBooks = basket.length - uniqBasketLength;

  console.log((nbOfDuplicatedBooks * 8) + (uniqBasketLength * 8 * (1 - reduction[uniqBasketLength - 1] / 100)));
}

export const result1 = basketPrice(["Philosopher's Stone", "Chamber of Secrets", "Chamber of Secrets", "Order of the Phoenix"]);
