export function heartsEventListener() {
  const hearts = document.querySelectorAll('.product-card__heart');
  hearts.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      e.target.classList.toggle('product-card__heart--filled');
    });
  });

  const heartIcons = document.querySelectorAll('.heart-icon');
  heartIcons.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      e.target.classList.toggle('heart-icon--filled');
    });
  });
}
