const select = document.querySelector("#breeds");
const card = document.querySelector(".card");
let current = "";

fetch("https://dog.ceo/api/breeds/list")
    .then((res) => res.json())
    .then((data) => {
        generateBreeds(data.message);
        fetchImage(data.message[0]);
    });

function generateBreeds(data) {
    data.map((dogBreed) => {
        const html = `<option value="${dogBreed}">${dogBreed}</option>`;
        select.innerHTML += html;
    });
}

function generateImage(url) {
    const image = `<img src="${url}">`;
    card.innerHTML = image;
}

function fetchImage(breedType) {
    fetch(`https://dog.ceo/api/breed/${breedType}/images/random`)
        .then((res) => res.json())
        .then((data) => generateImage(data.message));
}

select.addEventListener("change", () => {
    fetchImage(select.value);
    current = select.value;
});

card.addEventListener("click", () => {
    fetchImage(current);
});