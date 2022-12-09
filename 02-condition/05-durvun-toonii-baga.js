// ***** 4 тооны бага *****

let a = 120, b = 33, c = 10, d = 12;

if (a < b && a < c && a < d) {
    console.log("output:", a);
} else if (b < c && b < d) {
    console.log("output:", b);
} else if (c < d) {
    console.log("output:", c);
} else {
    console.log("output:", d);
}