// let languages = ["Rust", "C#", "Basic"]
// console.log(languages);
// console.log(languages[1]);
// console.log(languages.length);
//
// for (let i = 0; i < languages.length; i++) {
//     console.log(languages[i]);
// }

// function getSum(array){
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// }
//
// let numbers = [69, 42]
// console.log(getSum(numbers));

// let name = [];
// name.push("Ivan");
// name.push("Ivan2");
// name.pop()
// name.unshift("Ivan2", "Ivan3");
// name.shift()
// console.log(name.slice(0,1))
// console.log(name)

// let color = ["red", "green", "blue", "magenta", "cyan", "hi"];
// let deleted = color.splice(4,2)
// color.splice(2,0, 'pink')
// console.log(color)

// function registerName(name){
//     if (name.trim() === ""){
//         alert("Please enter a name");
//         return;
//     }
//     let duplicate = false;
//     for (i = 0; i < evenNames.length; i++){
//         if(evenNames[i] === name){
//             duplicate = true;
//         }
//     }
//     if (duplicate){
//         alert("This participant is already registered");
//     }
// }
// function removeName(name){
//     let index = -1;
//     for (i = 0; i < evenNames.length; i++){
//         if(evenNames[i] === name){
//             index = i;
//             break;
//         }
//     }
//     if (index === -1){
//         alert("There is no such participant");
//     }else{
//         evenNames.splice(index, 1);
//     }
// }
// function printCount(){
//     alert($`Total of people is: ${evenNames.length}`);
// }
// let evenNames = ['Ivan', 'Olha', 'Maria', 'Stepan', 'Oleh']
//
// registerName('Viktor');
// removeName('Viktor');
// printCount();

let eventNames = ["Ivan", "Olha", "Mariia", "Stepan", "Oleh"]

eventNames.forEach(function (string, number){
    console.log(index)
    console.log(name)
})
