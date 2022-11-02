import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fetch from "node-fetch";

// import iceCoffeeRoutes from "./routes/coffee.js";

const app = express();
const PORT = 2032;

app.use(cors());

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json("hello from techtonica");
});

// GET REQUEST FOR WOMENS CLOTHING
app.get("/icecoffee", (req, res) => {
  let URL = `https://api.sampleapis.com/coffee/iced`;
  console.log("Ice Coffee was recieved");
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    });
});

app.get("/hotcoffee", (req, res) => {
  let URL = `https://api.sampleapis.com/coffee/hot`;
  console.log("Ice Coffee was recieved");
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    });
});

//listens for incoming request
app.listen(PORT, () => console.log(`Hola! Server is running on port ${PORT}`));
