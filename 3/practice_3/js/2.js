// 2) Вывести квадраты чисел от 10 до 20
let a = 9;
let b = 0;
let x = '';
for (let i = 0; i < 11; i++) {
    if (i < 10) {
        a++;
        b = a * a;
        x = b + ', ';
    } else {
        a++;
        b = a * a;
        x = b ;
    }
    document.write(x);
}