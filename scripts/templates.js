
function getAppetizerContent(indexAppetizer) {
    let appetizer =  myAppetizers[indexAppetizer];
    let appetizerContent = `
        <div class="card">
            <div class="card-body">
                <h4>${appetizer.name}</h4>
                <p>mit ${appetizer.description}</p>
                <p class="card-text">${(appetizer.price).toFixed(2).replace('.', ',')}€</p>
            </div>
            <button type="button" onclick="addDishToBasket('${appetizer.name}', ${appetizer.price})">
             <img class="icon" src="./assets/icons/plus.png" alt="+ click">
             </button>
        </div>
    `;
    return appetizerContent;
}


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
            <button type="button" onclick="addDishToBasket('${dessert.name}', ${dessert.price})">
             <img class="icon" src="./assets/icons/plus.png" alt="+ click">
             </button>
        </div>
    `;
    return dessertContent;
}

function renderBasketItem(dish) {
    return `
        <div class="basket-card">
            <p>${dish.name}</p>
            <div class="basket-card-body-row">
               <div class="basket-card-body">
                 <button onclick="changeQuantity('${dish.name}', -1)">
                     <img class="icon" src="./assets/icons/minus.png" alt="- button">
                 </button>
                 <p>${dish.quantity}</p>
                 <button onclick="changeQuantity('${dish.name}', 1)">
                     <img class="icon" src="./assets/icons/plus.png" alt="+ button">
                 </button>
               </div>
               <p>${(dish.price * dish.quantity).toFixed(2).replace('.', ',')}€</p>
               <button onclick="deleteDishBasket('${dish.name}')">
                    <img class="icon" src="./assets/icons/trash.png" alt="trash">
               </button>
            </div>
        </div>
    `;
}

function renderBasketSummary(subtotal, deliveryCost, total) {
    return `
        <div class="basket-summary">
            <p>Zwischensumme: <span>${subtotal.toFixed(2).replace('.', ',')}€</span></p>
            <p>Lieferkosten: <span>${deliveryCost.toFixed(2).replace('.', ',')}€</span></p>
            <p><strong>Gesamt: <span>${total.toFixed(2).replace('.', ',')}€</span></strong></p>
        </div>
    `;
}

function renderOrderButton() {
    return `
        <div class="order-container">
            <button class="order-button" onclick="placeOrder()">Bezahlen</button>
        </div>
    `;
}

function placeOrder() {
    const basketDesktopRef = document.getElementById('basketDesktop');
    const basketMobileRef = document.getElementById('basketMobile');
    basket = [];
    basketDesktopRef.innerHTML = `
                                    <p class='ordered'>Vielen Dank!</p>
                                    <p class='ordered'>Die Seite lädt in 3 Sekunden neu!</p>`;
    basketMobileRef.innerHTML = `
                                    <p class='ordered'>Vielen Dank!</p>
                                    <p class='ordered'>Die Seite lädt in 3 Sekunden neu!</p>`;
    setTimeout(function() {
        location.reload();
      }, 3000);
}