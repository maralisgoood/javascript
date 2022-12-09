// 1. Давхар давталт 1

let n = 5;

let string = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        string += j + " ";
    } string += "\n";
} console.log(string);

// 2. Давхар давталт 2

let str = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i + 1; j++) {
        str += j + " ";
    } str += "\n";
} console.log(str);