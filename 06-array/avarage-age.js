// avarage age in students

let ages = [10, 20, 15, 19, 18, 19, 19];
let i = 0;
let sum = 0;

while (i < ages.length) {
    sum += ages[i]
    i++;
}
let avg = sum / ages.length
console.log(avg);