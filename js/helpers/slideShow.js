// eslint-disable-next-line import/prefer-default-export
export function slideShow() {
  let current = 0;
  const slides = document.getElementsByClassName('rewiew__card');
  slides[0].style.opacity = 1;

  function nextSlide() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.opacity = 0;
    }
    current = (current != slides.length - 1) ? current + 1 : 0;
    slides[current].style.opacity = 1;
  }

  function previousSlide() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.opacity = 0;
    }
    current = (current != 0) ? current - 1 : slides.length - 1;
    slides[current].style.opacity = 1;
  }

  setInterval(() => {
    nextSlide();
  }, 4000);

  document
    .getElementById('rightArrow')
    .addEventListener('click', () => {
      nextSlide();
    });

  document
    .getElementById('leftArrow')
    .addEventListener('click', () => {
      previousSlide();
    });
}
