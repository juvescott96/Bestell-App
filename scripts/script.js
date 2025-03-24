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

let cartItems = {};

function addDishToCart(dishName, dishPrice) {
    let cart = document.getElementById('basket');

    if (cartItems[dishName]) {
        cartItems[dishName].quantity++;
    } else {
        cartItems[dishName] = {
            price: dishPrice,
            quantity: 1
        };
    }

    updateCart();
}


function updateCart() {
    let cart = document.getElementById('basket');
    cart.innerHTML = ''; 

    Object.keys(cartItems).forEach(dishName => {
        let item = cartItems[dishName];

        let newCartItem = document.createElement('div');
        newCartItem.classList.add('cart-item');

        newCartItem.innerHTML = `
            <p>${dishName}</p>
            <div class="cart-item-price">
                <button onclick="changeQuantity('${dishName}', -1)">
                    <img class="plus" src="./assets/icons/minus.png" alt="- click">
                </button>
                <p>${item.quantity}</p>
                <button onclick="changeQuantity('${dishName}', 1)">
                    <img class="plus" src="./assets/icons/plus.png" alt="+ click">
                </button>
                <p>${(item.price * item.quantity).toFixed(2).replace('.', ',')}€</p>
                <button class="remove-item" onclick="removeItem('${dishName}')">
                    <img class="plus" src="./assets/icons/trash.png" alt="delete">
                </button>
            </div>
        `;

        cart.appendChild(newCartItem);
    });
}

function changeQuantity(dishName, change) {
    if (cartItems[dishName]) {
        let newQuantity = cartItems[dishName].quantity + change;

        if (newQuantity >= 1 && newQuantity <= 20) {
            cartItems[dishName].quantity = newQuantity;
        }
    }

    updateCart();
}

function removeItem(dishName) {
    delete cartItems[dishName];
    updateCart();
}
    