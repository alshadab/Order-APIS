const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const MONGO_URL = process.env.MONGO_URL;
mongoose.set("strictQuery", false);

const connect = async () => {
  try {
    mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
    });
    console.log(`Connected to Database`);
  } catch (err) {
    console.log(err);
  }
};
module.exports = connect;
