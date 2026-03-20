
function getDishesTemplate(dish, categoryIndex, dishIndex) {
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
                             onclick="addToBasket(${categoryIndex}, ${dishIndex})" 
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
    return `
        <div class="filledBasket">
            <div onclick="toggleBasket()" class="closeIcons">
                <img role="button" tabindex="0" class="closingButton" src="./assets/icons/dialog_close_icon.png" alt="Schließen Icon">
            </div>
            <h2 class="basketTitle">Your Order</h2>
            
            <div id="basket_content" class="basketOrders"></div>

            <section class="costs">
                <table class="costList">
                    <tr>
                        <td>Zwischensumme</td>
                        <td id="subtotal">0,00€</td>
                    </tr>
                    <tr>
                        <td>Lieferkosten</td>
                        <td id="delivery_costs">0,00€</td>
                    </tr>
                    <hr>
                    <tr>
                        <td>Gesamt</td>
                        <td id="total_sum">0,00€</td>
                    </tr>
                </table>
                <button onclick="buyButton()" class="buyButton">
                    <p id="buy_button_text">Buy Now (0,00€)</p>
                </button>
            </section>
        </div>
    `;
}

function getBasketItemTemplate(item, i) {
    return `
        <div class="addedOrder">
            <div class="basketItemInfo">
                <h4>${item.name}</h4>
            </div>
            <div class="basketIcons">
                <img class="basketIcon" onclick="changeAmount(${i}, -1)" src="./assets/icons/minus_icon.svg" alt="minus">
                <p>${item.amount}x</p>
                <img class="basketIcon" onclick="changeAmount(${i}, 1)" src="./assets/icons/plus_icon.svg" alt="plus">
                <p>${(item.price * item.amount).toFixed(2).replace('.', ',')}€</p>
                <img class="basketIcon" onclick="deleteFromBasket(${i})" src="./assets/icons/delete_icon.png" alt="löschen">
            </div>
        </div>
    `;
}

function getEmptyBasketTemplate() {
    return `<div class="filledBasket" >
                <div onclick="toggleBasket()" class="closeIcons">
                <img role="button" tabindex="0" class="closingButton" src="./assets/icons/dialog_close_icon.png" alt="Schließen Icon">
            </div>
                <h3>Your Order</h3>
                <p>Noting here yet. <br> Go ahead and choose something delicious!</p>
                <img class="basketIcon" src="./assets/icons/shopping_cart.png" alt="Icon von Einkaufswagen">
                </div>`
}

function getDialogTemplate() {
    return `<dialog class="dialog" onclick="openDialog()">
                <div class="dialogWindow">
                    <section class="orderConfirmedText">
                        <img src="./assets/icons/dialog_delivery_icon.png" alt="Lieferwagen Icon">
                        <img src="./assets/icons/ordered_text.png" alt="Order Confirmed Text">
                    </section>
                    <div class="progress-container">
                    <div class="progress-bar"></div>
                </div>
                </div>
            </dialog>`
}