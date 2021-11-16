export function cartEventListener() {
    const cart = document.querySelectorAll('.product-card__cart');
    cart.forEach((elem) => {
      elem.addEventListener('click', (e) => {
        e.target.classList.toggle('product-card__cart--filled');
      });
    });
  
    const cartIcons = document.querySelectorAll('.cart-icon');
    cartIcons.forEach((elem) => {
      elem.addEventListener('click', (e) => {
        e.target.classList.toggle('cart-icon--filled');
      });
    });
  }