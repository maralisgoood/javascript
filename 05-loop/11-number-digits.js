// NUMBER DIGITS

// let num = prompt("enter random number: ");
let num = 68274578;
function countDigit(num) {
    let count = 0;
    while (num != 0) {
        num = Math.floor(num / 10);
        ++count;
    }
    return count;
} console.log("number of digits: " + countDigit(num));