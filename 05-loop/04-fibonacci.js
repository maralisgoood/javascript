// ***** FIBONACCI SERIES *****

let num1 = 1, num2 = 1, next;
const number = parseFloat(prompt('Танд fibonacci series-ийн хэдэн тоо хэрэгтэй вэ? '));

console.log('Fibonacci Series');
console.log(num1); // print 0
console.log(num2); // print 1

next = n1 + n2;

while (next <= number) {
    console.log(next);
    num1 = num2;
    num2 = next;
    next = num1 + num2;
} console.log(num2);