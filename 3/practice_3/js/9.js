/*9) Дано натуральное число. Найти и вывести на страницу все его делители.
    a.Определить количество его четных делителей /
    b.Найти сумму его четных делителей*/

let number = '';

do {
    number = prompt("Enter a number!");
} while (number === '');

document.write('All the divisors of the number ' + number + '<br \\/> ');

let z = 0;
let y = 0;
for (let i = 2; i <= number/2; i++) {
    let x = '';
    if (number % i === 0) {
        x = i + '<br \\/> ';

        if (i % 2 === 0) {
            for (let j = 1; j <= (i % 2 === 0); j++) {
                z += j;
            }
            y += i;
        }
    }
    document.write(x);
}
document.write('The amount of even divisors: ' + z + '<br \\/> ');
document.write('The sum of even divisors: ' + y);


