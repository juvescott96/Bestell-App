
function getDishesContent(indexDishes, type) {
    let dish = type === 'main' ? myDishes[indexDishes] : myDesserts[indexDishes];
    let dishContent = `
        <div class="card">
            <div class="card-body">
                <h5>${dish.name}</h5>
                <p>${dish.description}</p>
                <p class="card-text">${dish.price}€</p>
            </div>
        </div>
    `;
    return dishContent;
}