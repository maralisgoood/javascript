// callback function

// function doSomething(func1, func2) {
//     if (now.getHours() < 18) {
//         func1();
//     } else {
//         func2();
//     }
// }

// function printHello() {
//     console.log("hello");
// }
// function printBye() {
//     console.log("bye");
// }

// const now = new Date();

// doSomething(printHello, printBye);

// document.getElementById('root').addEventListener("click", () => {
//     console.log("hello")
// });


// CLICK HERE CUSTOM BUTTON
let customButton = document.getElementById('root');
const something = () => {
    console.log("clicked");
};
customButton.addEventListener("click", something);
customButton.innerText = "click here";



// SCROLL W PERCENTAGE
// const percentLabel = document.querySelector("#percent");
// const originalTitle = document.title;
// window.addEventListener("scroll", () => {
//     let scrollTop = window.scrollY;
//     let docHeight = document.body.offsetHeight;
//     let winHeight = window.innerHeight;
//     let scrollPercent = scrollTop / (docHeight - winHeight);
//     let scrollPercentRounded = Math.round(scrollPercent * 100);
//     percentLabel.innerHTML = scrollPercentRounded;
//     document.title = `(${scrollPercentRounded}%) ${originalTitle}`;
// });

window.addEventListener("scroll", () => {
    let percent = Math.floor((window.scrollY * 100) / (document.querySelector("body").clientHeight - window.innerHeight));
    document.querySelector("#percent").innerText = `${percent}%`;
});