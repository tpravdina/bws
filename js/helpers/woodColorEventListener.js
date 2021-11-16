export function woodColorEventListener() {
  const woods = document.querySelectorAll('.color-panel__img-list-item');
  woods.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      e.target.classList.toggle('color-panel__img-list-item--selected');
    });
  });
}
