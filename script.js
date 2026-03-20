function init() {
    loadCart();
    renderDishes();
    renderBasket();
}

function renderDishes() {
    let content = document.getElementById('main_content');
    if (!content) return;
    content.innerHTML = "";

    for (let i = 0; i < dishesDb.length; i++) {
        let categoryObj = dishesDb[i];
        content.innerHTML += getDishesTitle(categoryObj, i);

        let section = document.getElementById('category_section_' + i);
        for (let j = 0; j < categoryObj.dishes.length; j++) {
            let dish = categoryObj.dishes[j];
            section.innerHTML += getDishesTemplate(dish, i, j);
        }
    }
}
function renderBasket() {
    let basketRef = document.getElementById('basket');
    if (!basketRef) return;

    if (cartShopping.length > 0) {
        basketRef.innerHTML = getBasketTemplate();
        fillBasket();
    } else {
        basketRef.innerHTML = getEmptyBasketTemplate();
    }
    updateBadge();
}

function fillBasket() {
    let basketContent = document.getElementById('basket_content');
    let subtotal = 0;

    for (let i = 0; i < cartShopping.length; i++) {
        let item = cartShopping[i];
        subtotal = subtotal + (item.price * item.amount);
        basketContent.innerHTML += getBasketItemTemplate(item, i);
    }
    renderTotals(subtotal);
}

function addToBasket(categoryIndex, dishIndex) {
    let dish = dishesDb[categoryIndex].dishes[dishIndex];
    let foundIndex = -1;

    for (let i = 0; i < cartShopping.length; i++) {
        if (cartShopping[i].name === dish.name) {
            foundIndex = i;
        }
    }

    if (foundIndex > -1) {
        cartShopping[foundIndex].amount++;
    } else {
        let newItem = { name: dish.name, price: dish.price, amount: 1 };
        cartShopping.push(newItem);
    }
    updateUI();
}

function changeAmount(i, change) {
    cartShopping[i].amount = cartShopping[i].amount + change;
    if (cartShopping[i].amount <= 0) {
        cartShopping.splice(i, 1);
    }
    updateUI();
}

function deleteFromBasket(i) {
    cartShopping.splice(i, 1);
    updateUI();
}

function updateUI() {
    saveCart();
    renderBasket();
}

function renderTotals(subtotal) {
    let delivery = 3.49;
    if (subtotal === 0) { delivery = 0; }
    let total = subtotal + delivery;

    document.getElementById('subtotal').innerHTML = formatPrice(subtotal);
    document.getElementById('delivery_costs').innerHTML = formatPrice(delivery);
    document.getElementById('total_sum').innerHTML = formatPrice(total);

    let buttonText = document.getElementById('buy_button_text');
    buttonText.innerHTML = "Buy Now (" + formatPrice(total) + ")";
}

function formatPrice(price) {
    let formatted = price.toFixed(2).replace('.', ',');
    return formatted + "€";
}

function buyButton() {
    if (cartShopping.length > 0) {
        cartShopping = [];
        updateUI();

        document.body.innerHTML += getDialogTemplate();
        let dialog = document.querySelector('.dialog');

        if (dialog) {
            dialog.showModal();
            setTimeout(function () {
                dialog.close();
                dialog.remove();
            }, 4000);
        }
    }
}

function toggleBasket() {
    let element = document.getElementById('basket');
    if (element.style.display === "flex") {
        element.style.display = "none";
    } else {
        element.style.display = "flex";
    }
}

function saveCart() {
    let text = JSON.stringify(cartShopping);
    localStorage.setItem('cart', text);
}

function loadCart() {
    let text = localStorage.getItem('cart');
    if (text) {
        cartShopping = JSON.parse(text);
    }
}
function updateBadge() {
    let badge = document.getElementById('basket_badge');
    if (!badge) return;

    let total = 0;
    for (let i = 0; i < cartShopping.length; i++) {
        total = total + cartShopping[i].amount;
    }

    if (total > 0) {
        badge.style.display = "flex";
        badge.innerHTML = total;
    } else {
        badge.style.display = "none";
    }
}