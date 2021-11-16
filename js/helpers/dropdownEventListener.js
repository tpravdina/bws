/* eslint-disable import/prefer-default-export */
import { renderProductsArr, sortProducts } from './index.js';
import { priceRange } from './serverFunction.js';
import {
  productArr, currentSortParam, changeSortParam, currentMinPrice, currentMaxPrice,
} from '../shop.js';

export function dropdownEventListener(arr) {
  const sortParamWrapper = document.querySelectorAll('.sort-param__wrapper');
  sortParamWrapper.forEach((elem) => {
    elem.addEventListener('click', function () {
      this.querySelector('.sort-param__select').classList.toggle('open');
    });
  });

  const sortParamOption = document.querySelectorAll('.sort-param__option');
  sortParamOption.forEach((elem) => {
    elem.addEventListener('click', function () {
      changeSortParam(this.getAttribute('data-value'));
      renderProductsArr(sortProducts(priceRange(productArr, currentMinPrice, currentMaxPrice), this.getAttribute('data-value')));
      if (!this.classList.contains('selected')) {
        this.parentNode.querySelector('.sort-param__option.selected').classList.remove('selected');
        this.classList.add('selected');
        this.closest('.sort-param__select').querySelector('.sort-param__select__trigger span').textContent = this.textContent;
      }
    });
  });

  const sortParamSelect = document.querySelectorAll('.sort-param__select');
  window.addEventListener('click', (e) => {
    sortParamSelect.forEach((elem) => {
      if (!elem.contains(e.target)) {
        elem.classList.remove('open');
      }
    });
  });
}
