// ***** Easy *****
// 5. weight, height гэсэн 2 хувьсагчид утга оруулахад тухайн хэмжээнээс хамааран биеийн жингийн индексийг тооцож тухайн индекс-д харгалзах утгыг хэвлэнэ. 

let weight = 58;
let height = 1.6;
const bmi = (weight / (height * height));

console.log('Your BMI is: ' + bmi);

let index = bmi < 18.5 ? "You are Underweight"
    : 18.5 <= bmi < 25 ? "You are Optimal"
        : 25 <= bmi < 30 ? "You are Overweight"
            : (30 < bmi) ? "You are Obese"
                : "undefined";

console.log(index);