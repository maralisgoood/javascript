// ***** GUESS THE NUMBER *****

let randomNumber = Math.floor((Math.random() * 100) + 1);
//let givenNumber = parseFloat(prompt("1-100 хооронд тоо оруулна уу? "));
let givenNumber = 55;

while (1 <= givenNumber <= 100) {
    if (givenNumber == randomNumber) {
        console.log("correct number is " + randomNumber);
    } givenNumber++;
} 