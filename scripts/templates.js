
function getDishesContent(indexDishes) {
    let dish =  myDishes[indexDishes];
    let dishContent = `
        <div class="card">
            <div class="card-body">
                <h4>${dish.name}</h4>
                <p>mit ${dish.description}</p>
                <p class="card-text">${(dish.price).toFixed(2).replace('.', ',')}€</p>
            </div>
            <button type="button" onclick="addDishToBasket('${dish.name}', ${dish.price})">
             <img class="icon" src="./assets/icons/plus.png" alt="+ click">
             </button>
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
            <button type="button">
             <img class="icon" src="./assets/icons/plus.png" alt="+ click">
             </button>
        </div>
    `;
    return dessertContent;
}

function addDishToBasket(name, price) {
    let basketRef = document.getElementById('basket');
    let basketContent = `
        <div class="basket-card">
            <p>${name}</p>
            <div class="basket-card-body-row">
               <div class="basket-card-body">
                 <button><img class="icon" src="./assets/icons/minus.png" alt="- button"></button>
                 <p>Zahl</p>
                 <button><img class="icon" src="./assets/icons/plus.png" alt="+ button"></button>
               </div>
               <p>${(price).toFixed(2).replace('.', ',')}€</p>
               <button><img class="icon" src="./assets/icons/trash.png" alt="trash"></button>
            </div>
            `;
            
            
    basketRef.innerHTML = basketContent;
}