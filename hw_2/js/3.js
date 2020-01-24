// 3) Определить, является ли число a делителем числа b ? И наоборот. (Дать два ответа)
let a = parseInt(prompt("Enter the number!"));
let b = parseInt(prompt("Enter the number yet!"));

if (a % b === 0) {
    console.log (b + ' is a divider ' + a);
} else if (b % a === 0) {
    console.log (a + ' is a divider ' + b);
} else {
    console.log ('Not one of the numbers is a divisor');
}