function load(){

    let mainCoursesRef = document.getElementById('main-courses');
    let dessertRef = document.getElementById('dessert');

    mainCoursesRef.innerHTML = "";
    dessertRef.innerHTML = "";

    let mainCoursesContent = '';
    for (let indexDishes = 0; indexDishes < myDishes.length; indexDishes++) {
        mainCoursesContent += getDishesContent(indexDishes);
    }
    mainCoursesRef.innerHTML = mainCoursesContent;

    let dessertsContent = '';
    for (let indexDessert = 0; indexDessert < myDesserts.length; indexDessert++) {
        dessertsContent += getDessertContent(indexDessert);
    }
    dessertRef.innerHTML = dessertsContent;
}

let basket = [];

function addDishToBasket(name, price) {
    let existingDish = basket.find(dish => dish.name === name);

    if (existingDish) {
        if (existingDish.quantity < 20) { 
            existingDish.quantity += 1;
        }
    } else {
        basket.push({ name, price, quantity: 1 }); 
    }

    renderBasket();
}

function renderBasket() {
    let basketRef = document.getElementById('basket');
    basketRef.innerHTML = "";

    if (basket.length === 0) {
        basketRef.innerHTML = "";
        return;
    }

    let subtotal = 0;
    const deliveryCost = 5.00;

    basket.forEach(dish => {
        let itemTotal = dish.price * dish.quantity;
        subtotal += itemTotal;

        let basketContent = `
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
        basketRef.innerHTML += basketContent;
    });

let total = subtotal + deliveryCost;

let summaryContent = `
<div class="basket-summary">
    <p>Zwischensumme: <span>${subtotal.toFixed(2).replace('.', ',')}€</span></p>
    <p>Lieferkosten: <span>${deliveryCost.toFixed(2).replace('.', ',')}€</span></p>
    <p><strong>Gesamt: <span>${total.toFixed(2).replace('.', ',')}€</span></strong></p>
</div>
`;
basketRef.innerHTML += summaryContent;

let orderButton = `
<div class="order-container">
    <button class="order-button" onclick="placeOrder()">Bezahlen</button>
</div>
`;
basketRef.innerHTML += orderButton;
}

function changeQuantity(name, amount) {
    let dish = basket.find(dish => dish.name === name);
    if (!dish) return;

    if (amount > 0 && dish.quantity >= 20) return;
    dish.quantity += amount;

    if (dish.quantity <= 0) {
        basket = basket.filter(d => d.name !== name); 
    }

    renderBasket();
}

function deleteDishBasket(name) {
    basket = basket.filter(dish => dish.name !== name);
    renderBasket();
}

function placeOrder() {
    let basketRef = document.getElementById('basket');
    basket = [];
    basketRef.innerHTML = "<p class='ordered' >Vielen Dank! Test!</p>";
}