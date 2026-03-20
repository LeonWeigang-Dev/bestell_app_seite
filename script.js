function init() {
    loadCart();
    renderDishes();
    renderBasket();
}

function renderDishes() {
    let content = document.getElementById('main_content');
    if (!content) return;
    content.innerHTML = "";

    for (let dishIndex = 0; dishIndex < dishesDb.length; dishIndex++) {
        let categoryObj = dishesDb[dishIndex];

        content.innerHTML += getDishesTitle(categoryObj, dishIndex);

        let categorySection = document.getElementById(`category_section_${dishIndex}`);

        for (let titleIndex = 0; titleIndex < categoryObj.dishes.length; titleIndex++) {
            let dish = categoryObj.dishes[titleIndex];
            categorySection.innerHTML += getDishesTemplate(dish, dishIndex, titleIndex);
        }
    }
}

function renderBasket() {
    let basketRef = document.getElementById('basket');
    if (!basketRef) return;

    if (cartShopping.length > 0) {
        basketRef.innerHTML = getBasketTemplate();

        let basketContent = document.getElementById('basket_content');
        let subtotal = 0;

        for (let i = 0; i < cartShopping.length; i++) {
            let item = cartShopping[i];
            subtotal += item.price * item.amount;
            basketContent.innerHTML += getBasketItemTemplate(item, i);
        }

        renderTotals(subtotal);
    } else {
        basketRef.innerHTML = getEmptyBasketTemplate();
    }
    updateBadge();
}

function chooseBasketTemplate() {
    let basketRef = document.getElementById('basket');
    if (!basketRef) return;

    if (cartShopping.length > 0) {
        basketRef.innerHTML = getBasketTemplate();
    } else {
        basketRef.innerHTML = getEmptyBasketTemplate();
    }
}

function toggleBasket() {
    let element = document.getElementById('basket')
    element.style.display = element.style.display === "flex" ? "none" : "flex";
}

function addToBasket(categoryIndex, dishIndex) {
    let selectedDish = dishesDb[categoryIndex].dishes[dishIndex];

    let findDish = cartShopping.find(item => item.name === selectedDish.name);

    if (findDish) {
        findDish.amount++;
    } else {
        cartShopping.push({
            name: selectedDish.name,
            price: selectedDish.price,
            amount: 1
        });
    }
    saveCart();
    renderBasket();
}

function changeAmount(i, change) {
    cartShopping[i].amount += change;

    if (cartShopping[i].amount <= 0) {
        deleteFromBasket(i);
    } else {
        renderBasket();
    }
    saveCart();
}

function deleteFromBasket(i) {
    cartShopping.splice(i, 1);
    saveCart();
    renderBasket();
}

function renderTotals(subtotal) {
    const delivery = subtotal > 0 ? 3.49 : 0;
    const total = subtotal + delivery;

    let subtotalRef = document.getElementById('subtotal');
    let deliveryRef = document.getElementById('delivery_costs');
    let totalRef = document.getElementById('total_sum');
    let buyButtonRef = document.getElementById('buy_button_text');

    if (subtotalRef) subtotalRef.innerHTML = `${subtotal.toFixed(2).replace('.', ',')}€`;
    if (deliveryRef) deliveryRef.innerHTML = `${delivery.toFixed(2).replace('.', ',')}€`;
    if (totalRef) totalRef.innerHTML = `${total.toFixed(2).replace('.', ',')}€`;
    if (buyButtonRef) buyButtonRef.innerHTML = `Buy Now (${total.toFixed(2).replace('.', ',')}€)`;
}

function buyButton() {
    if (cartShopping.length === 0) return;

    document.body.innerHTML += getDialogTemplate();

    const dialog = document.querySelector('.dialog');
    if (dialog) {
        dialog.showModal();
    }

    cartShopping = [];
    saveCart();
    renderBasket();
}

function openDialog() {
    const dialog = document.querySelector('.dialog');
    if (dialog) {
        dialog.close();
        dialog.remove();
    }
}

function saveCart() {
    let cartAsText = JSON.stringify(cartShopping);
    localStorage.setItem('cart', cartAsText);
}

function loadCart() {
    let cartAsText = localStorage.getItem('cart');
    if (cartAsText) {
        cartShopping = JSON.parse(cartAsText);
    }
}

function updateBadge() {
    let badge = document.getElementById('basket_badge');
    if (!badge) return;

    let totalAmount = 0;
    for (let i = 0; i < cartShopping.length; i++) {
        totalAmount += cartShopping[i].amount;
    }

    if (totalAmount > 0) {
        badge.style.display = "flex";
        badge.innerHTML = totalAmount;
    } else {
        badge.style.display = "none";
    }
}