const root = document.querySelector(".root");
const score = document.querySelector("#score");
const tiles = 9;
let newScore = 0;

function randomNumber(min, max) {
    return Math.floor(Math.random() * max + min);
}

function updateScore(point) {
    newScore += point;
    score.innerHTML = newScore;
}

function rgbGenerator() {
    const r = randomNumber(0, 255);
    const g = randomNumber(0, 255);
    const b = randomNumber(0, 255);
    return [r, g, b];
}

function getDifferentColor(colors) {
    const newColor = [...colors];
    const random = randomNumber(0, 2);
    if (newColor[random] > 150) {
        newColor[random] -= 100;
    } else {
        newColor[random] += 100;
    }
    return `rgb(${newColor[0]},${newColor[1]},${newColor[2]})`;
}

function startGame() {
    root.innerHTML = "";
    const colors = rgbGenerator();
    const randomIndex = randomNumber(0, 8);
    console.log(randomIndex);
    for (i = 0; i < tiles; i++) {
        const box = document.createElement("div");
        root.appendChild(box);
        let isDifferent = randomIndex == i;
        if (isDifferent) {
            box.style.backgroundColor = getDifferentColor(colors);
        } else {
            box.style.backgroundColor = `rgb(${colors[0]},${colors[1]},${colors[2]})`;
        }
        box.addEventListener("click", function () {
            if (isDifferent) {
                updateScore(1);
                startGame();
            } else {
                if (newScore == 1 || newScore == 0) {
                    root.innerHTML = "GG";
                } else {
                    updateScore(-2);
                }
            }
        });
    }
}

startGame();