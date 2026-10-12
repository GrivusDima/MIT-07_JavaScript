// function greetWorld(){
//     alert("Hello World!");
// }
//
// greetWorld();
// greetWorld();
// greetWorld();

// function displayProductName(name, price = "Out of Stock"){
//     console.log(`Product ${name}: ${price}`);
// }
// displayProductName("Milk", 69);
// displayProductName("Bread");

// function calculate(price, count) {
//     return price * count;
// }
//
// let total = calculate(420, 99);
// console.log(total);

// function discount(total){
//     if (total >= 5000){
//         return 10%;
//     }
//     else {
//         return 0;
//     }
// }
// let discount1 = +prompt("Please enter a number");
//
// console.log(discount(discount1))

// function getTotal(price, count) {
//     return price * count;
// }
//
// function getDiscount(total) {
//     if (total >= 10000) {
//         return 0.15;
//     }
//     else if (total >= 5000) {
//         return 0.1;
//     }
//     else if (total >= 2000) {
//         return 0.05;
//     }
//     else {
//         return 0;
//     }
// }
//
// function getDiscountValue(total, percent){
//     return total * percent;
// }
//
// function getFinalPrice(total, discount){
//     return total - discount;
// }
//
// let productName = prompt("Enter product name");
// let productPrice = +prompt("Enter price");
// let productCount = +prompt("Enter count");
//
// let productTotal = getTotal(productPrice, productCount);
// let discount = getDiscount(productTotal);
// let productDiscountValue = getDiscountValue(productTotal, discount);
// let productFinalPrice = getFinalPrice(productTotal, productDiscountValue);
//
// console.log(`Товар: ${productName}`);
// console.log(`Ціна: ${productPrice} грн.`);
// console.log(`Кількість: ${productCount}`);
// console.log(`Сума: ${productTotal} грн.`);
// console.log(`Знижка: ${discount * 100} %`);
// console.log(`Сума знижки: ${productDiscountValue} грн`);
// console.log(`До сплати: ${productFinalPrice} грн`);

//================================================= ===== === === == == == = = = = = = = = =

// Start - city
// Finih - city
// distance - km
// fuel spending - l/100km
// price - per liter
//
// total value of trip
// value of 1 kilometer


function calculateTotal(){
   return (dist/100) * fuelPer100Km * fuelPrice;
}
function calculateTotalPerKm(){
    return calculateTotal()/dist;
}

let start = prompt('Enter starting point');
let end = prompt('Enter end point');
let dist = +prompt('Enter distance between the two');
let fuelPer100Km = +prompt('Enter fuel per 100km spending');
let fuelPrice = +prompt('Enter fuel price per liter');

calculateTotal();
calculateTotalPerKm();
alert(`The trip from ${start} to ${end} will cost ${calculateTotal()}, ${calculateTotalPerKm()} per km.`);
