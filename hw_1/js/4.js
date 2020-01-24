/*4. Получить от пользователя 3 строки и вывести их в произвольном порядке одной командой (конкатенация)*/
let firstVal = prompt("Введите данные!");
let secondVal = prompt("Введите еще раз данные!");
let thirdVal = prompt("Ну и в последний раз введите данные!");

let str = firstVal + secondVal + thirdVal;

console.log ("str: ", str);