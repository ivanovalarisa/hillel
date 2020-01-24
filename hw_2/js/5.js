// 5) Дано двузначное число. Определить, какая из его цифр больше: первая или вторая?
let number = prompt("Enter a two-digit number!");

if (number.length > 2 || number.length < 2) {
    console.log('Enter only a two-digit number!');
} else if (number.length === 2) {
    let firstDigitOfNumber = Math.floor (number / 10);
    let secondDigitOfNumber = number % 10;

    if (firstDigitOfNumber > secondDigitOfNumber) {
        console.log('The first digit of the number is greater');
    } else if (firstDigitOfNumber < secondDigitOfNumber) {
        console.log('The second digit of the number is greater');
    } else {
        console.log('They are equal');
    }
}