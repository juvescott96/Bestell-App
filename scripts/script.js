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
