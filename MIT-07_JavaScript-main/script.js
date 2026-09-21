//42; Number
//4.5; Number

// 'use Str';

// true;
// 1
//
// false;
// 0
// NaN
// null
// undefined

// x = y + 10;

// var a;
// a = 10;
//
// console.log(a);
// var b = 24;
// var c, d = 69;
// let aNew = '32';
//
// a = 13;
// var a;
// console.log(a);

// const a = 4;

// let a = 24, b = 42;
// console.log(a + b);
// console.log(b - a);
// console.log(a ^ b);
// console.log(b / b);
// console.log(a % a);
//
// a = a + 1;
// a++;
// a--;

// let a = 2, b;
// b = a++; // sufix form
// console.log(b); //b = a = 2
//
// b = ++a; // prefix form
// console.log(b); //b = a++ = 3

// let a = '4';
// let b = 2;
// console.log(a - b);
// console.log(a + b);
// console.log((a - 0) + b);
//
// a = Number(a)
// console.log(b + a)

//
// /// Інтерполяція - формат рядкового значення, ф-строка
// let name = 'Ivan'
// let age = 6;
// console.log('Привіт' + name + '!' + " Тобі" + age);
//
// console.log(`Привіт + ${name} + ! + Тобі + ${age}`);
//
// console.info("wwassup world");
// console.warn("something bad is coming");
// console.error("you made a grave mistake");

// alert("AYOO");
// let name = prompt("WHAT'S YA NAME BROTHAAAA???")
// alert(`WAAZUUUP " ${name} " ???`);
//
// let a = Number(prompt("what's ya fav number?"))
// let b = +prompt("what's ya second fav number?")
// console.log(a + b)









// if(umova){
//     diya
// }
// else if (){
//
// }


///LESSON 2

//true
//1

//false
//0
//0n
//"" ''
//null
//undefined
//NaN

// let a = 10, b = "10"
// // console.log(a==b);
// //console.log(a === b);
// //console.log(a != b);
// //console.log(a !== b);
// // > < >= <=
//
// let a = +prompt("Enter a number")
// let b: = +prompt("Enter a number")
// let c;
//
// if(a>b){
//     c  = 'a > b'
// }
// else if(a<b){
//     c = 'a<b'
// }
// else if(a==b){
//     c = 'a == b'
// }
// alert(c)
//
//
// if (a > b) c = 'a > b';
// else if (a < b) c = 'a < b';
// else c = 'a = c';
// alert(c);

//
// let course = prompt("Name?"), title;
// switch (course) {
//     case 'figma':
//         title = "Figma";
//         break;
//     case 'WEB':
//         title = "Web";
//         break;
// //  ...
//     default:
//         title = "huh"
// }
// alert(title);

// //============================================================================
// vartist
// kilkist
// tovar
//
// суму
// якзо більше 5 тісяч то знижка 10 відстокві
//
// let total = 0;
// let a = prompt("Nazva tovaru?: ")
// let price = +prompt("Kilkist tovaru?: ") * +prompt("Vartist odynytsi tovaru?: ")
// total += price
//
// if (total >= 5000){
//     total = total/100*90
// }
// alert(`Total = ${Total}`)
//
//
//
// //=================================
// vartist kur = 200
// poshtat = 100
// samo = 0
//
// let variant = prompt("Yakui, sposib dostavky?: "), price;
// switch (variant) {
//     case 'courir':
//         price = 200;
//         break;
//     case 'potal':
//         price = 100;
//         break;
//     case 'takeut':
//         price = 0;
//         break;
// }
// alert(`Price: ${price}`);
//




///LESSON 3

// const log = "login";
// const pas = "password";
//
// let prompt_log = prompt("Enter your login");
// let prompt_password = prompt("Enter your password");
// if (prompt_log == log){
//     if (prompt_password == pas){
//         alert("Login successfull!");
//     }
//     else{
//         alert("Incorrect password!");
//     }
// }
// else{
//     alert("Incorrect username or password!");
// }


// let num = +prompt('Enter day');
// if (!(num < 1 && num > 7)) {
//     switch (num){
//         case 1: console.log('Monday'); break;
//         case 2: console.log('Tuesday'); break;
//         case 3: console.log('Wednesday'); break;
//         case 4: console.log('Thursday'); break;
//         case 5: console.log('Friday'); break;
//         case 6: console.log('Saturday'); break;
//         case 7: console.log('Sunday'); break;
//         default: console.log('Decebruary'); break;
//     }
// }
// else{
//     console.log('Augtember');
// }

//====================================

// let name = prompt("Product name?");
// let price = +prompt("Product price?");
// let count = +prompt("Product count?");
// let card = confirm("Got a discount card?");
// let delivery = prompt("Delivery option (courier, post, pickup)?");
//
// let totalPrice = price*count;
// //<2000 -> 0%
// //>2000 -> 5%
// //>5000 -> 10%
// //>10000 -> 15%
// let shopDiscount = 0;
// if(totalPrice >= 10000){
//     shopDiscount = 15;
// }
// else if(totalPrice >= 5000){
//     shopDiscount = 10;
// }
// else if(totalPrice >= 2000){
//     shopDiscount = 5;
// }
// if(card){
//     shopDiscount += 10;
// }
// let deliveryCost = 0;
// switch(delivery){
//     case "courier":
//         deliveryCost = 200;
//         case
// }
// totalPrice = totalPrice/100*(100-shopDiscount);
//
// console.log(`Total price: ${totalPrice}`);

//========================= lesson 4 ============================================

// for (let i = 10; i >= 1; i--) {
//     console.log(`Number №${11-i} = ${i}`)
// }

// sum = 0;
// for (let i = 0; i <= 100; i++){
//     sum += i;
// }
// console.log(sum);

// for (let i = 1; i <= 100; i++) {
//     if (i > 20 && i % 3 === 0 && i % 6 === 0) {
//         console.log(i)
//         break;
//     }
// }

// for (let i = 0; i <= 100; i++) {
//     if(i % 5 === 0) {
//         continue;
//     }
//     console.log(i);
// }

let n = +prompt("Number of students?: ");
let a = 0, sum = 0; high = 0; medium = 0; low = 0; min = 0; max = 0;
for (i = 0; i <= n-1;) {
    a = +prompt("Grade?: ");
    if (a <= 12 && a >= 1){
        if (a >= 10) { high++ }
        if (a >= 6) { medium++ }
        else { low++ }

        if (a < min) { min = a }
        if (a > max) { max = a }

        sum += a;
        a = 0;
        i++
    }
    else{
        alert("Invalid grade!")
        continue;
    }
}
console.log(`The average grade is ${sum/n} with ${high} high-level marks, ${medium} medium-level marks, and ${low} low-level marks, and the lowest mark being ${min} and the highest one being ${max}.`);