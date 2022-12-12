let rootElement = document.getElementById("root");
// rootElement.innerHTML = 
let ulElement = document.createElement("ul");
rootElement.appendChild(ulElement);

for (let i = 0; i < 100; i++) {
    let liElement = document.createElement("li");
    liElement.innerText = i.toString();
    ulElement.appendChild(liElement);
}







