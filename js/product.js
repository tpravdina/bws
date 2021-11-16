import {
  accordionListener, heartsEventListener, cartEventListener, woodColorEventListener,
} from './helpers/index.js';
import { productDataPath } from './helpers/api.js';
import { renderProduct } from './helpers/renderProduct.js';

window.addEventListener('DOMContentLoaded', () => {
  const id = new URLSearchParams(window.location.search).get('id');
  fetch(productDataPath)
    .then((response) => response.json())
    .then((data) => {
      const elem = data.products.find((elem) => elem.id == id);
      return elem;
    })
    .then((elem) => {
      const container = document.getElementById('container');
      container.innerHTML = renderProduct(elem.img, elem.type, elem.name, elem.pricePerSqft, elem.description, elem.additionalInformation, elem.units);
      return elem;
    })
    .then(() => {
      accordionListener();
      heartsEventListener();
      cartEventListener();
      woodColorEventListener();
    });
});
