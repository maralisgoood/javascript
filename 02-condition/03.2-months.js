// ***** Easy *****
// 2. сарын дугаар буюу n - 1<=n=>12-д хувьсагчид байх утгын дагуу тухайн сарын өдрийн тоог хэвлэнэ.хэрэв 2 дугаар сар бол 28 or 29 гэж хэвлэнэ.

let month = 6;

if (1 <= month <= 12) {
    if (month % 2 == 0) {
        if (month == 2) {
            console.log("output: 28 or 29");
        } else {
            console.log("output: 30");
        }
    } else {
        console.log("output: 31")
    }
}