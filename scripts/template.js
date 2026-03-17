
function getDishesTemplate(dish, dishIndex, titleIndex) {
    return `
        <div class="dishes">
            <div class="dishesImgContainer">
                <img class="dishesImg" src="./assets/img/${dish.image}" alt="${dish.name}">
            </div>
            <div class="dishTitle">
                <h3>${dish.name}</h3>
                <p class="dishDescription">${dish.description}</p>
                <div class="dishesBottom">
                    <p class="dishPrice">${dish.price.toFixed(2).replace('.', ',')}€</p>
                    <div class="addBtnContainer">
                        <img class="addButton" 
                             role="button" 
                             onclick="addToBasket(${dishIndex}, ${titleIndex})" 
                             src="./assets/icons/button_add.png" 
                             alt="Hinzufügen">
                    </div>
                </div>
            </div>
        </div>
    `;
}