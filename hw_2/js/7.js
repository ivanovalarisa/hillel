/*7) Дано трехзначное число.
    a) Верно ли, что все его цифры одинаковые?
    b) Есть ли среди его цифр одинаковые?*/

let number = prompt("Enter a three-digit number!");
let numberN = parseInt(number);

if (number.length > 3 || number.length < 3) {
    console.log('Enter only a three-digit number!');
} else {
    let firstDigits = Math.floor (numberN / 100);
    let secondDigits = Math.floor((numberN % 100) / 10);
    let thirdDigits = Math.floor(numberN % 10);

    console.log(firstDigits === secondDigits && secondDigits === thirdDigits ? 'All digits of the number are the same.' : 'Digits of the number are NOT the same.');

    console.log(firstDigits === secondDigits || secondDigits === thirdDigits || firstDigits === thirdDigits ? 'Yes, there are identical numbers between the digits' : 'No, there are no identical numbers between the digits');
}