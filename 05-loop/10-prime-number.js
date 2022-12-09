let n = prompt('Insert a number: ');
while (n < 0) {
    n = prompt('Insert a positive number: ');
}

let i = 1;
let count = 0;

while (count <= 1 && i <= n / 2) {
    if (n % i == 0) {
        count++;
    }
    i++;
}

if (count == 1) {
    document.write('The number is prime!');
}
else {
    document.write("The number isn't prime!");
}
