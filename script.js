function init() {
    renderDishes();
}

const deliveryFee = 3.49;

function renderDishes() {
    let content = document.getElementById('main_content');
    if (!content) return; // Securitycheck
    content.innerHTML = "";

    for (let dishIndex = 0; dishIndex < dishesDb.length; dishIndex++) {
        let categoryObj = dishesDb[dishIndex];

        content.innerHTML += `
            <div class="sectionTitle">
                <h2 id="${categoryObj.category}Id" class="title">${categoryObj.category}</h2>
            </div>
            <section id="category_section_${dishIndex}" class="dishesSections">
                </section>
        `;

        let categorySection = document.getElementById(`category_section_${dishIndex}`);

        for (let titleIndex = 0; titleIndex < categoryObj.dishes.length; titleIndex++) {
            let dish = categoryObj.dishes[titleIndex];
            categorySection.innerHTML += getDishesTemplate(dish, dishIndex, titleIndex);
        }
    }
}