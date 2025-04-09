let basket = [];

function load() {
    const categories = [
        { id: 'appetizer', items: myAppetizers },
        { id: 'main-courses', items: myDishes },
        { id: 'dessert', items: myDesserts }
    ];
    categories.forEach(category => {
        const container = document.getElementById(category.id);
        container.innerHTML = category.items.map(item => getDishCard(item)).join('');
    });
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
    let basketRefs = [document.getElementById('basketDesktop'), document.getElementById('basketMobile')];
    basketRefs.forEach(ref => ref.innerHTML = "");
    if (basket.length === 0) return;
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
    basketRefs.forEach(ref => ref.innerHTML = finalContent);
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
    const isOpen = basket.classList.contains('open');

    if (isOpen) {
      basket.classList.remove('open');
      document.body.style.overflow = ''; // Scroll wieder freigeben
    } else {
      basket.classList.add('open');
      document.body.style.overflow = 'hidden'; // Scroll sperren
    }
  }