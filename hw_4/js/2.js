/* 2) Дан массив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
    Найти сумму и количество положительных элементов.
    Найти минимальный элемент массива и его порядковый номер.
    Найти максимальный элемент массива и его порядковый номер.
    Определить количество отрицательных элементов.
    Найти количество нечетных положительных элементов.
    Найти количество четных положительных элементов.
    Найти сумму четных положительных элементов.
    Найти сумму нечетных положительных элементов.
    Найти произведение положительных элементов.
    Найти наибольший среди элементов массива, остальные обнулить.*/

let arr = [16, -37, 54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let sum = 0;
let positiveEl = [];
let minEl = '';
let indexMinEl = '';
let maxEl = '';
let indexMaxEl = '';
let negativeAmount = [];
let oddPositiveEl = [];
let evenPositiveEl = [];
let sumEvenPositiveEl = 0;
let sumOddPositiveEl = 0;
let multiplePositiveEl = 1;

let mapped = arr.map(function(el, i) {
    return { index: i, value: el };
});
mapped.sort(function(a, b) {
    if (a.value > b.value) {
        return 1; }
    if (a.value < b.value) {
        return -1; }
    return 0;
});
arrSort = mapped.map(function(el) {
    return arr[el.index];
});

minEl = arrSort[0];
maxEl = arrSort[arrSort.length - 1];

for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
        sum += arr[i];
        positiveEl.push(arr[i]);
    } else {
        negativeAmount.push(arr[i]);
    }
    if(arr[i] === arrSort[0]) {
        indexMinEl = i;
    }
    if(arr[i] === arrSort[arrSort.length - 1]) {
        indexMaxEl = i;
    }
    if(i !== indexMaxEl) {
        arr.splice(i, 1, 0);
    }
}

for (let j = 0; j < positiveEl.length; j++) {
    multiplePositiveEl *= positiveEl[j];
    if(!(positiveEl[j] % 2 === 0)) {
        oddPositiveEl.push(positiveEl[j]);
        sumOddPositiveEl += positiveEl[j];
    } else {
        evenPositiveEl.push(positiveEl[j]);
        sumEvenPositiveEl += positiveEl[j];
    }
}


document.write('Sum of positive elements: ' + sum + ' ' + 'and amount of positive elements: ' + positiveEl.length + '<br/ >' + '<br/ >');
document.write('Minimum array element: ' + minEl + ' ' + 'and its index: ' + indexMinEl + '<br/ >' + '<br/ >');
document.write('Maximum array element: ' + maxEl + ' ' + 'and its index: ' + indexMaxEl + '<br/ >' + '<br/ >');
document.write('Amount of negative elements: ' + negativeAmount.length + '<br/ >' + '<br/ >');
document.write('Amount of odd positive elements: ' + oddPositiveEl.length + '<br/ >' + '<br/ >');
document.write('Amount of even positive elements: ' + evenPositiveEl.length + '<br/ >' + '<br/ >');
document.write('Sum of even positive elements: ' + sumEvenPositiveEl + '<br/ >' + '<br/ >');
document.write('Sum of odd positive elements: ' + sumOddPositiveEl + '<br/ >' + '<br/ >');
document.write('Product after multiplication of positive elements: ' + multiplePositiveEl + '<br/ >' + '<br/ >');

console.log('arr: ', arr);


var arr22 = [1,2,3,4,5,6,7];

document.write("<p>" + arr22 + "</p>");

arr.splice(1,3);

document.write("<p>" + arr22 + "</p>");