const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connect = require("./connection");
const router = require("./routeManager");

dotenv.config();
const PORT = process.env.PORT || 5000;

//middlewares
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).send("One Thread Order Application");
});

async function main() {
  try {
    this.app = app;
  } catch (err) {
    console.log(err);
  }
}
main();

//Connection
app.listen(PORT, (req, res) => {
  console.log(`Listening on ${PORT}`);
  connect();
  router();
});
