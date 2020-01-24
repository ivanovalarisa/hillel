/*6) Дано трехзначное число.
    a) Определить является ли четной сумма его цифр.
    b) Определить, кратна ли сумма его цифр пяти.
    c) Определить является ли произведение его цифр больше 100.*/

let number = prompt("Enter a three-digit number!");
let numberN = parseInt(number);

if (number.length > 3 || number.length < 3) {
    console.log('Enter only a three-digit number!');
} else {
    let sumDigits = Math.floor (numberN / 100) + Math.floor((numberN % 100) / 10) + Math.floor(numberN % 10);
    console.log(sumDigits % 2 === 0 ? 'The sum of the digits is even.' : 'The sum of the digits is odd.');

    console.log(sumDigits % 5 === 0 ? 'The sum of the digits is a multiple of five.' : 'The sum of the digits is not a multiple of five.');

    let multipleDigits = Math.floor (numberN / 100) * Math.floor((numberN % 100) / 10) * Math.floor(numberN % 10);
    console.log(multipleDigits > 100 ? 'The product of the digits greater than 100' : 'The product of the digits no more than 100');
}


