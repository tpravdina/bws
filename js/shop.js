import {
  dropdownEventListener, renderProductsArr, sortProducts, sliderInit, sliderEventListener, woodColorEventListener,
} from './helpers/index.js';
import { productDataPath } from './helpers/api.js';

export let minPrice;
export let maxPrice;
export let productArr;
export let currentMinPrice;
export let currentMaxPrice;

export let currentSortParam;
currentSortParam = 'priceLowHight';
export function changeSortParam(newSortParam) {
  currentSortParam = newSortParam;
}

export function changeCurrentMinPrice(newCurrentMinPrice) {
  currentMinPrice = newCurrentMinPrice;
}
export function changeCurrentMaxPrice(newCurrentMaxPrice) {
  currentMaxPrice = newCurrentMaxPrice;
}

window.addEventListener('DOMContentLoaded', () => {
  fetch(productDataPath)
    .then((response) => response.json())
    .then((data) => {
      minPrice = sortProducts(data.products, 'priceLowHight')[0].price;
      maxPrice = sortProducts(data.products, 'priceLowHight')[data.products.length - 1].price;
      sliderInit(minPrice, maxPrice);
      currentMinPrice = minPrice;
      currentMaxPrice = maxPrice;
      return data.products;
    })
    .then((data) => {
      productArr = data;
      renderProductsArr(sortProducts(data, currentSortParam));
      return data;
    })
    .then((data) => {
      woodColorEventListener();
      return data;
    })
    .then((data) => {
      dropdownEventListener(productArr);
      return data;
    })
    .then((data) => {
      sliderEventListener();
    })
    .then(() => {
      window.history.pushState(null, '', 'https://tpravdina-medium.herokuapp.com/shop.html');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});
