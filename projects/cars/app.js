const express = require("express");
const cors = require("cors");

let cars = [
  {
    id: 0,
    model: "Prius 20",
    brand: "Toyota",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/2nd_Toyota_Prius.jpg",
  },
  {
    id: 1,
    model: "Prius 30",
    brand: "Toyota",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/01/2009_Toyota_Prius_%28ZVW30R%29_liftback_%282011-12-06%29_01.jpg",
  },
  {
    id: 2,
    model: "Prius Alpha",
    brand: "Toyota",
    image: "https://autos.yahoo.com.tw/y/r/w880/iw/MMT/car/a9615748c1d539a1892cd37b5e321b1a_1200.jpg",
  },
  {
    id: 3,
    model: "Aqua",
    brand: "Toyota",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Toyota_Aqua_101_%28cropped%29.JPG",
  },
  {
    id: 4,
    model: "Prius 10",
    brand: "Toyota",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/1998_Toyota_Prius_NHW10_Silver_Strara_Metallic_%28front%29.jpg",
  },
  {
    id: 5,
    model: "RX 450",
    brand: "Lexus",
    image: "https://carsguide-res.cloudinary.com/image/upload/f_auto%2Cfl_lossy%2Cq_auto%2Ct_default/v1/editorial/Lexus-RX450h-2016-%281%29.jpg",
  },
  {
    id: 6,
    model: "RX 350",
    brand: "Lexus",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/2016_Lexus_RX_200t_front_view.jpg",
  },
  {
    id: 7,
    model: "HS 250",
    brand: "Lexus",
    image: "https://lexus-cms-media.s3.us-east-2.amazonaws.com/wp-content/uploads/2019/04/052_HS_250h-1500x900.jpg",
  },
];
let index = cars.length;

const app = express();
app.use(cors({ origin: "*" }))
app.get("/api/cars", (req, res) => {
  res.send(cars);
});

app.get("/api/cars/:id", (req, res) => {
  const car = cars.filter((c) => c.id === Number(req.params.id));
  if (car.length > 0) {
    res.send(car[0]);
  } else {
    res.send("Car not found");
  }
});

app.post("/api/cars", (req, res) => {
  const car = { id: index, ...req.body };
  index++;
  cars.push(car);
  res.send(car);
});

app.delete("/api/cars", (req, res) => {
  cars = cars.filter((car) => car.id !== Number(req.body.id));
  res.send(`Car with given id: ${req.body.id} deleted successfully`);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on("error", console.error);
