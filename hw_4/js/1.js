/*1) Создать массив, длину и элементы которого задаёт пользователь.
    Затем отсортировать массив по возрастанию.
    Затем, удалить элементы из массива с 2 по 4 (включительно!).
    По мере изменений, выводить содержимое массива на страницу.*/

let arr = [];

let specifyingQuestion = parseInt(prompt("How many numbers do you want to enter (but preferably not less than 5)?"));
let specRequest = 0;

while (specifyingQuestion < 5) {
    specRequest = parseInt(prompt("Can we introduce five numbers?"));
    specifyingQuestion = specRequest;
}

for(let i = 0; i < specifyingQuestion; i++) {
    let dataInput = prompt("Enter value №" + (i + 1));
    arr.push(dataInput);
}
document.write('<strong>' + 'Your data: ' + arr.join('; ') + '<br/ >' + '<br/ >' + '</strong>');


// временный массив содержит объекты с позицией и значением сортировки
let mapped = arr.map(function(el, i) {
    return { index: i, value: el.toLowerCase() };
});
// сортируем массив, содержащий уменьшенные значения
mapped.sort(function(a, b) {
    if (a.value > b.value) {
        return 1; }
    if (a.value < b.value) {
        return -1; }
    return 0;
});

// контейнер для результа
arr = mapped.map(function(el) {
    return arr[el.index];
});
document.write('Sorted data: ' + arr.join('; ') + '<br/ >' + '<br/ >');

arr.splice(2,3);
document.write('Modified data: ' + arr.join('; ') + '<br/ >');





