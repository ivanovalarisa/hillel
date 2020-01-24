// 13) Дано целое число. Вывести все целые числа от 1 до 100, квадрат которых не превышает числа N
let number = '';

do {
    number = prompt("Enter a number!");
} while (number === '');

document.write('Print all integers from 1 to 100 whose square does not exceed the entered number' + '<br \\/> ' + '<br \\/> ');
document.write('The entered number ' + number +'<br \\/> ' + '<br \\/> ');

let x = 0;
for (let i = 1; i <= 100; i++) {
    x = i * i;
    if (x < number) {
        document.write(i + '  ');
    }

}