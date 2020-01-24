// 7)Вывести на страницу сумму только четных чисел в диапазоне от 30 до 80
let x = 0;
for (let i = 29; i <= 80; i++) {
    if(i % 2 === 0) {
        x += i;
        console.log('i = ', i);
    }
}
document.write('The sum of all even digits from 30 to 80 is ' + x);