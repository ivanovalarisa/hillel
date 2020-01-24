/*1. Создать скрипт для сложения, вычитания, умножения и деления двух чисел и вывода результатов*/
let firstValue = Number(prompt("Введите число!"));
let secondValue = Number(prompt("Введите еще одно число!"));

let sum = firstValue + secondValue;
let subtraction = firstValue - secondValue;
let multiplication = firstValue * secondValue;
let division = firstValue / secondValue;

console.log("sum: ", sum);
console.log("subtraction: ", subtraction);
console.log("multiplication: ", multiplication);
console.log("division: ", Math.floor(division * 100) / 100);