import {
  heartsEventListener, cartEventListener, slideShow, validateForm,
} from './helpers/index.js';

window.addEventListener('DOMContentLoaded', () => {
  heartsEventListener();
  cartEventListener();
  validateForm();
  slideShow();
  document
    .getElementById('shopNowBtn')
    .addEventListener('click', () => {
      document.location = 'shop.html';
    });
  document
    .getElementById('getInTouchBtn')
    .addEventListener('click', () => {
      const { offsetTop } = document.querySelector('.contacts');
      scroll({
        top: offsetTop,
        behavior: 'smooth',
      });
    });
});
