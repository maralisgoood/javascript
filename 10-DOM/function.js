document.getElementById("root").innerHTML = "<h1 class='dummy'>this is h1 tag</h1>";

document.getElementsByClassName("dummy")[0].innerText = "dummy text";

document.getElementsByTagName("h2")[0].innerText = "this is h2 tag";

document.querySelector(".dummy").innerText = "Dummy";
// document.querySelectorAll(.boxs)
// - all baihaaraa array buyu HTML collector butsaana

document.getElementsByClassName("dummy")[0].innerHTML =
    "<div class='darkmode'><h3>testing dark mode</h3></div>";

document.getElementsByTagName("img")[0].alt = "not bla bla";
document.getElementsByTagName("img")[0].src =
    "https://www.helpguide.org/wp-content/uploads/king-charles-spaniel-resting-head.jpg";
document.getElementsByTagName("img")[0].width = 500;

document.getElementsByClassName("test")[0]


// document.getElementsByClassName("profileName")[0].style = ".dark {color: blue}";
document.getElementsByClassName("profileName")[0].style.backgroundColor = "blue";

const newDiv = document.createElement("h1");
const newContent = document.createTextNode("Манай сайтад тавтай морил");
newDiv.appendChild(newContent);
const main = document.getElementsByTagName("main");
main[0].appendChild(newDiv);
