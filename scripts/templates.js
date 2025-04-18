
function getDishCard(item) {
    return `
        <div class="card" onclick="addDishToBasket('${item.name}', ${item.price})">
            <div class="card-body">
                <h4>${item.name}</h4>
                <p>mit ${item.description}</p>
                <p class="card-text">${item.price.toFixed(2).replace('.', ',')}€</p>
            </div>
            <button type="button">
                <img class="icon" src="./assets/icons/plus.png" alt="+ click">
            </button>
        </div>
    `;
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
    basketDesktopRef.innerHTML = `<p class='ordered'>Vielen Dank!</p>`;
    basketMobileRef.innerHTML = `<p class='ordered'>Vielen Dank!</p>`;
     setTimeout(function() {
     basketDesktopRef.innerHTML = '';
     basketMobileRef.innerHTML = '';
     }, 3000);
}