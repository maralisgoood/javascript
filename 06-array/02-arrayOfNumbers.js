// ***** Array of Number ***** 

// 1. arrayOfNumbers гэсэн variable зарлаад дараах тоонуудыг оруул.
let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];

// 2. Array доторх тоонуудын нийлбэрийг ол.
let sum = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i];
} console.log("sum of array: " + sum);

// 3. Хамгийн их тоог ол.
console.log("max of array:", Math.max(...arrayOfNumbers));

// 4. Хамгийн бага тоог ол.
console.log("min of array:", Math.min(...arrayOfNumbers));

// 5. Array - ийн эхэнд дурын 1 тоог нэм.
// 6. Array - ийн төгсгөлд дурын 1 тоог нэм.
arrayOfNumbers.unshift(55);
arrayOfNumbers.push(77);
console.log(arrayOfNumbers);