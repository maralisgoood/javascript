// select by #id
document.getElementById("myID").innerHTML = "<h3>select by ID</h3>";

// select by .class
document.getElementsByClassName("myClass")[0].innerHTML = "<h3>select by Class</h3>";
document.getElementsByClassName("myClass")[0].style.backgroundColor = "lightgreen";
// document.getElementsByClassName("myClass")[0].style.color = "green";
document.getElementsByClassName("myClass")[0].style.height = "100px";
document.getElementsByClassName("myClass")[0].style.width = "200px";


// select by tag || element
document.getElementsByTagName("h2")[0].innerText = "select by Element";

// querySelector
let count = 100;
document.querySelectorAll(".myRoot")[0].innerHTML = "select by querySelector";

document.getElementsByClassName("myRoot")[0].style.backgroundColor = "pink";
document.getElementsByClassName("myRoot")[0].style.height = `${count}px`;
document.getElementsByClassName("myRoot")[0].style.width = `${2 * count}px`;
document.getElementsByClassName("myRoot")[0].style.fontSize = "18px";
document.getElementsByClassName("myRoot")[0].style.border = "2px solid grey";