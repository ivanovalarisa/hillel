// 1) Даны два различных числа. Определить какое из них больше, а какое меньше.

let firstValue = parseInt(prompt("Enter the number!"));
let secondValue = parseInt(prompt("Enter the number yet!"));

if (firstValue > secondValue) {
    console.log ("firstValue is more than secondValue");
} else if (firstValue < secondValue) {
    console.log ("secondValue is more than firstValue");
} else {
    console.log ("They are equal");
}
