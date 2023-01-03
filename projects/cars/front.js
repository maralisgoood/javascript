const body = document.getElementsByName("body");

const getAllBtn = document.getElementById("getAll");
getAllBtn.addEventListener("click", () => {
  fetch("http://localhost:3333/api/cars")
    .then((res) => res.json())
    .then((res) => {
      res.map((car) => {
        console.log("CAR: ", car);
        let carCards = document.getElementById("carCards");
        carCards.style.display = "flex";
        carCards.style.flexWrap = "wrap";
        carCards.style.gap = "20px";

        let singleCar = `
        <div class="card" style="width: 18rem;">
          <img src="${car.image}" class="card-img-top" alt="car">
          <div class="card-body">
            <h5 class="card-title">${car.model}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>`;
        carCards.innerHTML += singleCar
      });
    })
});

const toyotaBtn = document.getElementById("toyota");
toyotaBtn.addEventListener("click", () => {
  fetch("http://localhost:3333/api/cars")
    .then((res) => res.json())
    .then((res) => {
      res.map((car) => {
        console.log("TOYOTA CAR: ", car);
        let carCards = document.getElementById("carCards");
        carCards.style.display = "flex";
        carCards.style.flexWrap = "wrap";
        carCards.style.gap = "20px";

        let singleCar = `
        <div class="card" style="width: 18rem;">
          <img src="${car.image}" class="card-img-top" alt="car">
          <div class="card-body">
            <h5 class="card-title">${car.model}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>`;
        carCards.innerHTML += singleCar
      });
    })
});

