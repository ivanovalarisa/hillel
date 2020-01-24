// 8) Вывести на страницу все числа в диапазоне от 100 до 200 кратные 3
document.write('Numbers in the range of 100 to 200 multiples of 3' + ': <br \\/> ');
for (let i = 100; i <= 200; i++) {
    let x = '';
    if(i === 198) {
        x = i;
    } else if (i % 3 === 0) {
        x = i + '; ';
    }
    document.write(x);
}
