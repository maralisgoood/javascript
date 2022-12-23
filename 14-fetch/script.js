const form = document.querySelector("form");
const countriesContainer = document.querySelector(".countries");
// https://restcountries.com/v3.1/name/$%7Bcountry%7D
// https://restcountries.com/v3.1/alpha/$%7Bneighbour%7D
// const btnCountry = document.querySelector(".btn-country");
// const inputCountry = btnCountry.values;

function renderCountry(country) {
    const html = `<article class="country">
        <img class="country__img" src="${country.flags.svg}" />
        <div class="country__data">
            <h3 class="country__name">${country.name.common}</h3>
            <h4 class="country__region">${country.region}</h4>
            <p class="country__row"><span>👫</span>${(
            country.population / 1000000
        ).toFixed(2)}M</p>
            <p class="country__row"><span>🗣️</span>${Object.values(country.languages)[0]
        }</p>
            <p class="country__row"><span>💰</span>${Object.values(country.currencies)[0].name
        } ${Object.values(country.currencies)[0].symbol}</p>
        </div>
    </article>`;
    countriesContainer.innerHTML += html;
    countriesContainer.style.opacity = 1;
}

function getCountry(country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then((res) => res.json())
        .then((data) => console.log(data[0]));
}

getCountry(inputCountry);
getCountry("mongolia");