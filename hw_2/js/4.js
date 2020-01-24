// 4) Дано число. Определить, заканчивается оно четной цифрой или нечетной? Вывести последнюю цифру.
let num = parseInt(prompt("Enter any number!"));

if (num % 2 === 0 ) {
    console.log('You entered an even number. Last digit: ', num % 10);
} else {
    console.log('You entered an odd number');
}