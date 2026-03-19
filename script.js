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
    let content = document.getElementById('basket');
    /* if (!content) return; */
    content.innerHTML = "";

    content.innerHTML += getBasketTemplate();
}

function chooseBasketTemplate() {
    content.innerHTML = "";

}

function toggleBasket() {
  let element = document.getElementById('basket')
    element.style.display = element.style.display === "flex" ? "none" : "flex";
}