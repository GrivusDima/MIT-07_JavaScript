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

// let n = +prompt("Number of students?: ");
// let a = 0, sum = 0; high = 0; medium = 0; low = 0; min = 0; max = 0;
// for (i = 0; i <= n-1;) {
//     a = +prompt("Grade?: ");
//     if (a <= 12 && a >= 1){
//         if (a >= 10) { high++ }
//         if (a >= 6) { medium++ }
//         else { low++ }
//
//         if (a < min) { min = a }
//         if (a > max) { max = a }
//
//         sum += a;
//         a = 0;
//         i++
//     }
//     else{
//         alert("Invalid grade!")
//     }
// }
// console.log(`The average grade is ${sum/n} with ${high} high-level marks, ${medium} medium-level marks, and ${low} low-level marks, and the lowest mark being ${min} and the highest one being ${max}.`);

//==========================Homework===============================

// let n = +prompt("Number of participants?: ");
// let a = 0, sum = 0; high = 0; medium = 0; low = 0; min = 100; max = 0; numOne = 0;
// for (i = 1; i <= n;) {
//     a = +prompt("Their result?: ");
//     if (a <= 100 && a >= 0){
//         if (a >= 90) { high++ }
//         if (a >= 60) { medium++ }
//         else { low++ }
//
//         if (a < min) { min = a }
//         if (a > max) { max = a }
//
//         if (a == 100) { numOne = i; }
//
//         sum += a;
//         a = 0;
//         i++
//     }
//     else{
//         alert("Invalid result!")
//     }
// }
// console.log(`The average result is ${sum/n} with ${high} high-level (90-100) score(s), ${medium} medium-level (60-89) score(s), and ${low} low-level (<60) score(s), the lowest score being ${min} and the highest one being ${max}; the first participant to get a score of 100 is participant №${numOne}.`);

//=====================================Lesson 5=================================

// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++
// }

// let age = +prompt('Enter your age');
// while (Number.isNan(age) || age <= 0 || age > 120) {
//     alert('Please enter a number');
//     age = +prompt('Enter your age correctly');
// }
// console.log(age);

// const correctPin = 1111;
// // let pin = +prompt("Enter a valid pin");
// let tries = 1;
// //
// // while (pin !== correctPin && tries <= 3 ) {
// //     pin = +prompt("Wrong pin. Enter a valid pin");
// //     tries++;
// // }
// // if (pin === correctPin) {
// //     alert("CORRET PIN!!! YAAAAAA UWUWUWUWUWUWUW!!!")
// // }
// // else{
// //     alert("wrong pin... i'm coming for you")
// // }
// while (tries <= 3){
//     let pin = +prompt('Enter pin');
//     if (pin === correctPin){
//         alert("Yes! You have succeeded!! Finally, you will have access to your bank account!")
//         break;
//     }
//     tries++;
//     alert("Be careful, user.. Thy number you have entered doethn't match thein real pin..")
// }

// let menuChoice;
// do{
//     menuChoice = +prompt("Choose action:\n" +
//         "1 - Open profile\n" +
//         "2 - Open profule settings\n" +
//         "0 - Open the exit door\n")
//     if(menuChoice === 1){
//         alert("Opening profile")
//     }
//     else if(menuChoice === 2){
//         alert("Opening profule settings")
//     }
//     else if(menuChoice === 0){
//         alert("Trying to open the exit door")
//     }
//     else{
//         alert("Unknown command")
//     }
// }while(menuChoice !== 0)

// let gradeSum = 0;
// let count = 0;
// while(count < 5){
//     let num;
//     num = +prompt("Enter the grade")
//     if (Number.isNan(num) || num <= 0 || num > 12){
//         alert("Invalid grade")
//         continue
//     }
//     gradeSum += num;
//     count++;
// }
// alert(`Average grade is ${gradeSum/5}`);
// // :DDDDD

//======================== h o m e w o r k ==================================== = = = = = = =  =   =     =        =

let correctPin = 4321;
let age;
while(true){
    age = +prompt("Enter your age");
    if(age >= 12 && age <= 90){ break }
    alert("Invalid age")
}
let i = 0;
while(i < 3){
    let pin = +prompt("Enter pin");
    if(pin == 4321){
        let action;
        do{
            action = prompt("Choose action:\n" +
                "1 - Open personal cabinet\n" +
                "2 - Open messages\n" +
                "3 - Open settings\n" +
                "0 - Open the exit door\n");
            switch(action){
                case 0: break;
                case 1: alert("Opening personal cabinet");
                case 2: alert("Opening messages");
                case 3: alert("Opening settings");
                default: alert("Invalid action");
            }
        }while(true)
        break;
    }
    alert("Invalid pin")
    i++
}