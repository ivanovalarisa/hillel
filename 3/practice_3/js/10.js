// 10) Напечатать полную таблицу умножения от 1 до 10
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        let x = j * i;
        if (j === 10) {
            document.write(i + ' * ' + j + ' = ' + x + '<br \\/> <br \\/>');
        } else {
            document.write(i + ' * ' + j + ' = ' + x + '<br \\/> ');
        }
    }

}