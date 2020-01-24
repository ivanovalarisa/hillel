// 2) Известны два расстояния. Одно в километрах, другое - в футах (1 фут = 0,305м). Какое расстояние меньше?
let firstValue = parseInt(prompt("Enter the distance in kilometers!"));
let secondValue = parseInt(prompt("Enter the distance in feet!"));

let firstValueCast = firstValue * 1000;
let secondValueCast = secondValue * 0.305;

if (firstValueCast > secondValueCast) {
    console.log ("The distance in feet is less");
} else if (firstValueCast < secondValueCast) {
    console.log ('The distance in kilometers is less');
} else {
    console.log ("They are equal");
}