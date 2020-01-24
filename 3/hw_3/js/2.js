// 12) Один доллар стоит 24 гривны. Вывести данные с расчетом стоимости 10, 20, 30... 100 долларов
document.write('One dollar costs 24 hryvnias (₴)' + '<br \\/> ' + '<br \\/> ');

let course = 24;

for (let i = 10; i <= 100; i++) {
    let x = course * i;
    document.write(i + '$' + ' * ' + course + ' = ' + x + '₴' + '<br \\/> ');

}