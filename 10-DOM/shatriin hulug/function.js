let rootElement = document.getElementById("root");
rootElement.style.display = "flex";
rootElement.style.flexWrap = "wrap";
rootElement.style.width = "850px";


// 2 for looptei shatriin hulug
/*
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        let newDiv = document.createElement("div");
        rootElement.appendChild(newDiv);
        newDiv.style.width = "100px";
        newDiv.style.height = "100px";
        newDiv.style.border = ".25px solid grey";
        if ((i + j) % 2 == 0) {
            newDiv.style.backgroundColor = "lightblue";
        }
    }
} */


// 1 for looptei shatriin hulug
for (let i = 0; i < 64; i++) {
    let newDiv = document.createElement("div");
    rootElement.appendChild(newDiv);
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.border = ".25px solid grey";
    if ((i + (Math.floor(i / 8) % 2)) % 2 == 0) {
        newDiv.style.backgroundColor = "lightblue";
    }
}


let i = 0;
const myInterval = setInterval(function () {
    i++;
    console.log(i);
    if (i == 10) {
        clearInterval(myInterval);
    }
}, 100);

// let name = "Maral";
// let welcomeMessage = `${i}px` template liberal
// i uurchlugduh tutamd string uurchlugduh bolomj olgono