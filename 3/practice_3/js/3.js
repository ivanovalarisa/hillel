// 3) Вывести таблицу умножения на 7
for (let i = 1; i < 11; i++) {
    let x = 7 * i;
    if (i < 10) {
        document.write('7 * ' + i + ' = ' + x + '; <br \\/> ');
    } else {
        document.write('7 * ' + i + ' = ' + x);
    }
}