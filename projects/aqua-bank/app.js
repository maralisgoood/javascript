const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser")
const jsonParser = bodyParser.json();

let users = [
  {
    userID: 0,
    firstName: "Bat",
    lastName: "Dorj",
    bankID: "00100105",
    balance: 100000,
    balance_type: true,
    profileURL: "https://randomuser.me/api/portraits/men/60.jpg",
    email: "bat.dorj@example.com"
  },
  {
    userID: 1,
    firstName: "Tsetseg",
    lastName: "Ochir",
    bankID: "00100115",
    balance: 150000,
    balance_type: false,
    profileURL: "https://randomuser.me/api/portraits/women/20.jpg",
    email: "tsetseg.ochir@example.com"
  },
  {
    userID: 2,
    firstName: "Yunchir",
    lastName: "Ulaanbandi",
    bankID: "00100120",
    balance: 1500000,
    balance_type: true,
    profileURL: "https://randomuser.me/api/portraits/men/11.jpg",
    email: "yunchir.ulaanbandi@example.com"
  },
  {
    userID: 3,
    firstName: "Uugan-Erdene",
    lastName: "Lkhagvajargal",
    bankID: "00100124",
    balance: 2000000,
    balance_type: false,
    profileURL: "https://randomuser.me/api/portraits/men/15.jpg",
    email: "uuganerdene.lkhagvajargal@example.com"
  },
  {
    userID: 4,
    firstName: "Jamiyanpurev",
    lastName: "Ochir",
    bankID: "00100121",
    balance: 1650000,
    balance_type: false,
    profileURL: "https://randomuser.me/api/portraits/men/35.jpg",
    email: "jamiyanpurew.ochir@example.com"
  },
  {
    userID: 5,
    firstName: "Gonchigsumlai",
    lastName: "Purevsumlai",
    bankID: "00100133",
    balance: 15000000,
    balance_type: true,
    profileURL: "https://randomuser.me/api/portraits/men/14.jpg",
    email: "gonchigsumlai.purevsumlai@example.com"
  },
  {
    userID: 6,
    firstName: "Suren",
    lastName: "Purev",
    bankID: "00100135",
    balance: 1200000,
    balance_type: true,
    profileURL: "https://randomuser.me/api/portraits/women/60.jpg",
    email: "suren.purev@example.com"
  },
  {
    userID: 7,
    firstName: "Baasan",
    lastName: "Byamba",
    bankID: "00100140",
    balance: 120000,
    balance_type: false,
    profileURL: "https://randomuser.me/api/portraits/men/40.jpg",
    email: "baasan.byamba@example.com"
  },
  {
    userID: 8,
    firstName: "Enkhtuul",
    lastName: "Mendsaikhan",
    bankID: "00100141",
    balance: 12000000,
    balance_type: true,
    profileURL: "https://randomuser.me/api/portraits/women/10.jpg",
    email: "enkhtuul.mendsaikhan@example.com"
  },
  {
    userID: 9,
    firstName: "Sharavnyambuu",
    lastName: "Urtnasan",
    bankID: "00100150",
    balance: 1900000,
    balance_type: false,
    profileURL: "https://randomuser.me/api/portraits/men/29.jpg",
    email: "sharawnyambuu.urtnasan@example.com"
  },
];

let index = users.length;

const app = express();
app.use(cors());

app.get("/api/users", (req, res) => {
  res.send(users);
});

app.get("/api/users/:id", (req, res) => {
  const car = users.filter((c) => c.id === Number(req.params.id));
  if (car.length > 0) {
    res.send(car[0]);
  } else {
    res.send("Car not found");
  }
});

app.post("/api/users", jsonParser, (req, res) => {
  const car = { id: index, ...req.body };
  index++;
  users.push(car);
  res.send(car);
});

app.delete("/api/users", jsonParser, (req, res) => {
  users = users.filter((car) => car.id !== Number(req.body.id));
  res.send(`Car with given id: ${req.body.id} deleted successfully`);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on("error", console.error);
