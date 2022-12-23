const form = document.querySelector("form");
const countriesContainer = document.querySelector(".countries");
// const btnCountry = document.querySelector(".btn-country");
// const inputCon = btnCountry.value;
// https://restcountries.com/v3.1/name/${country}
// https://restcountries.com/v3.1/alpha/${neighbour}

function renderCountry(country) {
    const html = `<article class="country">
    <img class="country__img" src="${country.flags.svg}" />
    <div class="country__data">
        <h3 class="country__name">${country.name.common}</h3>
        <h4 class="country__region">${country.region}</h4>
        <p class="country__row"><span>👫</span>${(country.population / 1000000).toFixed(2)}M</p>
        <p class="country__row"><span>🗣️</span>LANG</p>
        <p class="country__row"><span>💰</span>CUR</p>
    </div>
    </article>`;
    countriesContainer.innerHTML += html;
}

function getCountry(country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`).then((res) => res.json()).then((data) => {
        console.log(data[0])
    });
} 