
function getDishesContent(indexDishes) {
    let dish =  myDishes[indexDishes];
    let dishContent = `
        <div class="card">
            <div class="card-body">
                <h5>${dish.name}</h5>
                <p>mit ${dish.description}</p>
                <p class="card-text">${dish.price}€</p>
            </div>
        </div>
    `;
    return dishContent;
}

function getDessertContent(indexDessert) {
    let dessert =  myDesserts[indexDessert];
    let dessertContent = `
        <div class="card">
            <div class="card-body">
                <h5>${dessert.name}</h5>
                <p>mit ${dessert.description}</p>
                <p class="card-text">${dessert.price}€</p>
            </div>
        </div>
    `;
    return dessertContent;
}