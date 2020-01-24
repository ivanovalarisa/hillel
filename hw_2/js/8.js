// 8) Определить, является ли заданное шестизначное число зеркальным? (123321, 147741)

let gidit = 147741;
let firstStart = Math.floor (gidit / 100000);
let firstEnd = Math.floor (gidit % 10);

if (firstStart === firstEnd) {
    let secondStart = Math.floor((gidit % 100000) / 10000);
    let secondEnd = Math.floor((gidit % 100) / 10);

    if (secondStart === secondEnd) {
        let thirdStart = Math.floor((gidit % 10000) / 1000);
        let thirdEnd = Math.floor((gidit % 1000) / 100);

        if (thirdStart === thirdEnd) {
            console.log('The given six-digit number is a mirror');
        } else {
            console.log('The given six-digit number is NOT a mirror');
        }
    } else {
        console.log('The given six-digit number is NOT a mirror');
    }
} else {
    console.log('The given six-digit number is NOT a mirror');
}