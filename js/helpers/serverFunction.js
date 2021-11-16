import { moveToDetailsEventListener } from './moveToDetailsEventListener.js';
import { heartsEventListener } from './heartsEventListener.js';
import { cartEventListener } from './cartEventListener.js';

export let currentMinPrice;
export let currentMaxPrice;

export function sortProducts(arr, sortParametr) {
  switch (sortParametr) {
    case 'priceLowHight':
      const productsSortedByPriceLowHigh = arr.slice();
      productsSortedByPriceLowHigh.sort((a, b) => a.price - b.price);
      return (productsSortedByPriceLowHigh);
    case 'priceHightLow':
      const productsSortedByPriceHighLow = arr.slice();
      productsSortedByPriceHighLow.sort((a, b) => b.price - a.price);
      return productsSortedByPriceHighLow;
    case 'alphabet':
      const productsSortedAlphabet = arr.slice();
      productsSortedAlphabet.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        return 1;
      });
      return productsSortedAlphabet;
    default:
      return arr;
  }
}

export function renderProductsArr(arr) {
  let template = '';
  arr.forEach((elem) => {
    let saleClass = '';
    if (elem.isForSale) {
      saleClass = 'product-card--discounted--green';
    }
    template += `
          <li class="product-card ${saleClass}">
                  <div class="product-card__sale">Sale</div>
                  <img src="img/shop/${elem.img}" alt="${elem.img}" class="product-card__img" id="productImg${elem.id}">
                  <h2 class="product-card__title" id="productTitle${elem.id}">${elem.name}</h2>
                  <div class="product-card__price">$${elem.price}</div>
                  <div class="product-card__heart">
                      <div class="heart-icon"></div>
                  </div>
                  <div class="product-card__cart">
                      <div class="cart-icon"></div>
                  </div>
              </li>
          `;
  });
  const container = document.getElementById('products');
  container.innerHTML = template;
  moveToDetailsEventListener();
  heartsEventListener();
  cartEventListener();
}

export function priceRange(arr, minPrice, maxPrice) {
  return arr.filter((elem) => (elem.price >= minPrice && elem.price <= maxPrice));
}
