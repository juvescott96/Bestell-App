let basket = [];

function load(){
    let appetizerRef = document.getElementById('appetizer');
    let mainCoursesRef = document.getElementById('main-courses');
    let dessertRef = document.getElementById('dessert');
    appetizerRef.innerHTML = "";
    mainCoursesRef.innerHTML = "";
    dessertRef.innerHTML = "";
    let appetizersContent = '';
    for (let indexAppetizer = 0; indexAppetizer < myAppetizers.length; indexAppetizer++) {
        appetizersContent += getAppetizerContent(indexAppetizer);
    }
    appetizerRef.innerHTML = appetizersContent;
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
    const basketDesktopRef = document.getElementById('basketDesktop');
    const basketMobileRef = document.getElementById('basketMobile');
    basketDesktopRef.innerHTML = "";
    basketMobileRef.innerHTML = "";
    if (basket.length === 0) {
        return;}
    let subtotal = 0;
    const deliveryCost = 5.00;
    let basketContent = basket.map(dish => {
        let itemTotal = dish.price * dish.quantity;
        subtotal += itemTotal;
        return renderBasketItem(dish);
    }).join('');
    const total = subtotal + deliveryCost;
    const summaryContent = renderBasketSummary(subtotal, deliveryCost, total);
    const orderButton = renderOrderButton();
    const finalContent = basketContent + summaryContent + orderButton;
    basketDesktopRef.innerHTML = finalContent;
    basketMobileRef.innerHTML = finalContent;
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
function toggleMobileBasket() {
    const basket = document.getElementById("mobileBasketContent");
    basket.classList.toggle("open");
  }