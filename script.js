function init() {
    renderDishes();
    renderBasket();
}

const deliveryFee = 3.49;

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

    renderBasket();
}

function changeAmount(i, change) {
    cartShopping[i].amount += change;

    if (cartShopping[i].amount <= 0) {
        deleteFromBasket(i);
    } else {
        renderBasket();
    }
}

function deleteFromBasket(i) {
    cartShopping.splice(i, 1);
    renderBasket();
}