/*15) Дано некоторое число. Определить, можно ли получить это число путем возведения числа 3 в некоторую степень.
(Например, числа 9, 81 можно получить, а 13 - нельзя)*/
let number = '';

do {
    number = prompt("Enter a number!");
} while (number === '');
const parseNum = parseInt(number, 10);

document.write('The entered number ' + number +'<br \\/> ' + '<br \\/> ');

const FIXED_NUMBER = 3;
let startNumber;
let pow = 1;
do {
    startNumber = FIXED_NUMBER ** pow;
    if (startNumber === parseNum) {
        break;
    }
    pow++;
} while (startNumber <= parseNum);
if (startNumber === parseNum) {
    alert('YOU CAN! POW IS: ' + pow);
} else {
    alert('SORRY, BAD LUCK.');
}


// let k = Math.floor(Math.sqrt(parseNum));
// if(k === 3) {
//     document.write('You can get this number by raising the number 3 to some extent');
// } else {
//     document.write('This number cannot be obtained by raising the number 3 to some extent.');
// }
// let h = Math.floor(Math.sqrt(k));
// if (h === 3) {
//     document.write('You can get this number by raising the number 3 to some extent');
// } else {
//     document.write('This number cannot be obtained by raising the number 3 to some extent.');
// }