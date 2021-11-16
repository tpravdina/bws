import { slideOne, slideTwo } from './slider.js';
import {
  productArr, currentSortParam, currentMinPrice, currentMaxPrice,
} from '../shop.js';
import { renderProductsArr, priceRange, sortProducts } from './serverFunction.js';

export function sliderInit(minPrice, maxPrice) {
  const sliderWrapperInnerHtml = `
    <div class="slider">
        <div class="slider__track" id="slider-track"></div>
        <input class="slider__input" type="range" min="${minPrice}" max="${maxPrice}" value="${minPrice}" id="slider-1">
        <input class="slider__input" type="range" min="${minPrice}" max="${maxPrice}" value="${maxPrice}" id="slider-2">
    </div>
    <div class="values">
        <span id="range1">
            $${minPrice}
        </span>
        <span id="range2">
            $${maxPrice}
        </span>
    </div>
    `;
  document.getElementById('sliderWrapper').innerHTML = sliderWrapperInnerHtml;
  const sliderTrack = document.getElementById('slider-track');
  sliderTrack.style.background = '#536758';
}

export function sliderEventListener() {
  document.getElementById('slider-1').addEventListener('input', () => {
    slideOne();
  });
  document.getElementById('slider-2').addEventListener('input', () => {
    slideTwo();
  });

  // sort button
  document.getElementById('priceFilter').addEventListener('click', () => {
    const sortedArr = sortProducts(productArr, currentSortParam);
    const priceCorrectArr = priceRange(sortedArr, currentMinPrice, currentMaxPrice);
    renderProductsArr(priceCorrectArr);
  });
}
