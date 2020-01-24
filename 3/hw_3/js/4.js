// 14) Дано целое число. Выяснить, является ли оно простым (простым называется число, большее 1, не имеющих других делителей кроме 1 и самого себя).

let number = '';
do {
    number = prompt("Enter a number!");
} while (number === '');

document.write('The entered number ' + number +'<br \\/> ' + '<br \\/> ');

let parseNum = parseInt(number);
if ((parseNum % 2 === 0) && (parseNum !== 2)) {
    document.write("This number is a composite");
} else if (parseNum === 2) {
        document.write("This number is prime");
} else {
    let flag = false;
    for(let i = 2; i < parseNum; i++) {
        if(parseNum % i === 0) {
            document.write("This number is a composite");
            flag = true;
            break;
        }
    }
    if (flag === false) {
        document.write("This number is prime");
    }
}