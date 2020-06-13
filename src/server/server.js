const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const port = process.env.REACT_APP_PORT;
const uri = process.env.REACT_APP_URI || 5000;
const app = express();

const mongoDB = mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("open", () => {
  console.log("Connected to Database");
});

app.listen(port, () => {
  console.log(`Server connected to port ${port}`);
});
