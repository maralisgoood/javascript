// example of 'nested for' loop
for (let index = 0; index < 10; index *= 2) {
    for (let j = 0; j < 2; j++) {
        process.stdout.write(index + " ");
    } console.log();
}

// example of 'while' loop
let index = 0;
while (index < 10) {
    for (let j = 0; j < 2; j++) {
        process.stdout.write(index + " ");
    } console.log();
    index *= 2;
}

// example of 'do while' loop
let random = 55;
let userGuess;
do {
    userGuess = Number(prompt("enter 1-100 number: "));
    if (userGuess < random) {
        console.log("low");
    } else {
        console.log("high");
    }
} while (userGuess !== random);