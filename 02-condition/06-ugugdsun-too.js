// ***** Өгөгдсөн тоонуудын хамгийн их болон хамгийн бага тоог олно уу *****

let a = 6, b = 7, c = 8;

if (a > b && a > c) {
    console.log("хамгийн их утга нь:", a);
} else if (b > c) {
    console.log("хамгийн их утга нь:", b);
} else {
    console.log("хамгийн их утга нь:", c);
}

if (a < b && a < c) {
    console.log("хамгийн бага утга нь:", a);
} else if (b < c) {
    console.log("хамгийн бага утга нь:", b);
} else {
    console.log("хамгийн бага утга нь:", c);
}