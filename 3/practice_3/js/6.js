// 6)Найти среднее арифметическое всех целых чисел от 1 до 500
let x = 0;
let y = 0;
for (let i = 0; i <= 500; i++) {
    x += i;
    y = x / i;
}
console.log('The average of all digits from 1 to 500 is ' + y);