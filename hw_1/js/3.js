/*3. Определить среднее арифметическое трех чисел*/
let firstValue = Number(prompt("Введите число!"));
let secondValue = Number(prompt("Введите еще одно число!"));
let thirdValue = Number(prompt("Ну и последнее число!"));

let average = (firstValue + secondValue + thirdValue) / 3;
if (isNaN(average)) {
    alert("Попробуйте еще раз и вводите только числа!");
} else {
    console.log("average = ", Math.floor(average * 100) / 100);
}

