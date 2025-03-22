
function getDishesContent(indexDishes) {
    let dish =  myDishes[indexDishes];
    let dishContent = `
        <div class="card">
            <div class="card-body">
                <h4>${dish.name}</h4>
                <p>mit ${dish.description}</p>
                <p class="card-text">${(dish.price).toFixed(2).replace('.', ',')}€</p>
            </div>
            <button type="button"> <img class="plus" src="./assets/icons/plus.png" alt="+ click"></button>
        </div>
    `;
    return dishContent;
}

function getDessertContent(indexDessert) {
    let dessert =  myDesserts[indexDessert];
    let dessertContent = `
        <div class="card">
            <div class="card-body">
                <h4>${dessert.name}</h4>
                <p>mit ${dessert.description}</p>
                <p class="card-text">${(dessert.price).toFixed(2).replace('.', ',')}€</p>
            </div>
            <button type="button"> <img class="plus" src="./assets/icons/plus.png" alt="+ click"></button>

            
        </div>
    `;
    return dessertContent;
}