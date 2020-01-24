/*5. Разложить по цифрам пятизначное число и вывести в исходном порядке через пробел*/
let initialStr = prompt("Введите пятизначное число!");
let initialNumber = Number(initialStr);

let result = "";
if(initialStr.length !== 5) {
    alert ('Введите только пятизначное число!');
} else {
    firstDigit = (Math.floor((initialNumber / 10000) * 1) / 1) + " ";
    secondDigit =  firstDigit + (Math.floor(((initialNumber % 10000) / 1000) * 1) / 1) + " ";
    thirdDigit = secondDigit + (Math.floor(((initialNumber % 1000) / 100) * 1) / 1) + " ";
    fourthDigit = thirdDigit + (Math.floor(((initialNumber % 100) / 10) * 1) / 1) + " ";
    result = fourthDigit + (Math.floor(((initialNumber % 10) / 1) * 1) / 1) + " ";
}
console.log(result);

/*let initialNumber = prompt("Введите пятизначное число!");
let result = "";
if(initialNumber.length !== 5) {
    alert ('Введите только пятизначное число!');
} else {
    for(let i = 0; i < initialNumber.length; i++) {
        result += (initialNumber[i] + " ");
    }
    console.log('result: ', result);
}*/
/*let a = 30;
let b = 20;
let c = 10;
if ((a > b) > c) {
    console.log ("a > b > c");
} else {
    console.log ("dsvsdv");
}*/
