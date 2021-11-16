import { changeCurrentMinPrice, changeCurrentMaxPrice } from '../shop.js';
import { greenColor, grayColor } from './constant.js';

function fillColor() {
  const sliderOne = document.getElementById('slider-1');
  const sliderTwo = document.getElementById('slider-2');

  const sliderTrack = document.getElementById('slider-track');
  const sliderMinValue = document.getElementById('slider-1').min;
  const sliderMaxValue = document.getElementById('slider-1').max;

  const percent1 = ((sliderOne.value - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100;
  const percent2 = ((sliderTwo.value - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100;
  sliderTrack.style.background = `linear-gradient(to right, ${grayColor} ${percent1}% , ${greenColor} ${percent1}% , ${greenColor} ${percent2}%, ${grayColor} ${percent2}%)`;
}

export function slideOne() {
  const sliderOne = document.getElementById('slider-1');
  const sliderTwo = document.getElementById('slider-2');
  const displayValOne = document.getElementById('range1');
  const minGap = 0;

  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValOne.textContent = `$${sliderOne.value}`;
  fillColor();
  changeCurrentMinPrice(sliderOne.value);
}

export function slideTwo() {
  const sliderOne = document.getElementById('slider-1');
  const sliderTwo = document.getElementById('slider-2');
  const displayValTwo = document.getElementById('range2');
  const minGap = 0;

  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  displayValTwo.textContent = `$${sliderTwo.value}`;
  fillColor();
  changeCurrentMaxPrice(sliderTwo.value);
}
