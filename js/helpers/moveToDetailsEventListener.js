// eslint-disable-next-line import/prefer-default-export
export function moveToDetailsEventListener() {
  const productImages = document.querySelectorAll('.product-card__img');
  productImages.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      const id = elem.id.slice('productImg'.length);
      window.location.replace(`/product.html?id=${id}`);
    });
  });

  const productTitles = document.querySelectorAll('.product-card__title');
  productTitles.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      console.log('ID', elem.id);
      const id = elem.id.slice('productTitle'.length);
      window.location.replace(`/product.html?id=${id}`);
    });
  });
}
