let rootElement = document.getElementById("root");

let sec = 0;
let min = 0;
let hour = 0;

setInterval(function () {
    sec++;
    if (sec == 10) {
        sec = 0;
        min++;
        if (min == 10) {
            min = 0;
            hour++;
        }
    }
    rootElement.innerText = `${hour < 10 ? 0 : ""}${hour}:${min < 10 ? 0 : ""}${min}:${sec < 10 ? 0 : ""}${sec}`;
}, 100);
