// eslint-disable-next-line import/prefer-default-export
export function renderProduct(img, type, name, pricePerSqft, description, additionalInformation, units) {
  return `
    <img src="img/products/${img}" alt="${img}" class="main-img">
    <div class="details">
        <h2 class="details__up-title">${type}</h2>
        <h1 class="details__main-title">${name}</h1>
        <h3 class="details__price-title">$${pricePerSqft} per sqft</h3>
        <p class="details__text">${description}</p>
        
        <div class="details__choice-container">
            <div class="details__color-panel color-panel">
                <h3 class="color-panel__title">Colors</h3>
                <ul class="color-panel__img-list">
                    <li><img src="./img/wood-colors/type-1.png" alt="type-1" class="color-panel__img-list-item"></li>
                    <li><img src="./img/wood-colors/type-2.png" alt="type-2" class="color-panel__img-list-item"></li>
                    <li><img src="./img/wood-colors/type-3.png" alt="type-3" class="color-panel__img-list-item"></li>
                    <li><img src="./img/wood-colors/type-4.png" alt="type-4" class="color-panel__img-list-item"></li>
                    <li><img src="./img/wood-colors/type-5.png" alt="type-5" class="color-panel__img-list-item"></li>
                </ul>
            </div>
            <button class="border-shortways-button">
                <p>Border Shortways</p>
                <div class="border-shortways-button__down-icon"></div>
            </button>
        </div>
        
        <div class="details__button-container">
            <button class="details__add-button">Add to Cart</button>
            <button class="details__heart-button">
                <div class="heart-icon"></div>
            </button>
        </div>
        <hr class="details__line">
        <button class="accordion">
            <p class="accordion__title">Additional information</p>
            <div class="accordion__icon"></div>
        </button>
        <div class="accordion__panel">
        <p class="accordion__text">${additionalInformation}</p>
        </div>
        <hr class="details__line">
        <button class="accordion">
            <p class="accordion__title">Units</p>
            <div class="accordion__icon"></div>
        </button>
        <div class="accordion__panel">
        <p class="accordion__text">${units}</p>
        </div>
        <hr class="details__line">
    </div>
    `;
}
