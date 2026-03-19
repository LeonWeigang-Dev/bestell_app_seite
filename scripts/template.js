
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

function getDishesTitle(categoryObj, dishIndex) {
    return `
            <div class="sectionTitle">
                <h2 id="${categoryObj.category}Id" class="title">${categoryObj.category}</h2>
            </div>
            <section id="category_section_${dishIndex}" class="dishesSections">
                </section>
        `
}

function getBasketTemplate() {
 return   `
                <div class="filledBasket">
                    <div onclick="toggleBasket()" class="closeIcons"><img role="button" tabindex="0" class="closingButton"
                            src="./assets/icons/dialog_close_icon.png" alt="Schließen Icon"></div>
                    <h2 class="basketTitle">Your Order</h2>
                    <div id="basket_content" class="basketOrders">
                        <div class="addedOrder">
                            <div>
                                <h4>Veggie Burger</h4>
                            </div>
                            <div class="basketIcons">
                                <img class="basketIcon" role="button" tabindex="0" src="./assets/icons/minus_icon.svg"
                                    alt="minus Icon">
                                <p>1x</p>
                                <img class="basketIcon" role="button" tabindex="0" src="./assets/icons/plus_icon.svg"
                                    alt="plus Icon">
                                <p>16,90€</p>
                                <img class="basketIcon" role="button" tabindex="0" src="./assets/icons/delete_icon.png"
                                    alt="Mülltonnen Icon">
                            </div>
                        </div>
                    </div>
                    <section class="costs">
                        <table class="costList">
                            <tr>
                                <td>Zwischensumme</td>
                                <td>16,90€</td>
                            </tr>
                            <tr>
                                <td>Lieferkosten</td>
                                <td>3,49€</td>
                            </tr>
                            <hr>
                            <tr>
                                <td>Gesamt</td>
                                <td>20,39€</td>
                            </tr>
                        </table>
                        <button class="buyButton">
                            <p>Buy Now (20,39€)</p>
                        </button>
                    </section>
                </div>
           `
}

function getEmptyBasketTemplate() {
    return `<div class="filledBasket" >
                <h3>Your Order</h3>
                <p>Noting here yet. <br> Go ahead and choose something delicious!</p>
                <img class="basketIcon" src="./assets/icons/shopping_cart.png" alt="Icon von Einkaufswagen">
                </div>`
}