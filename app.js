const express = require("express");
const app = express();
const users = require("./api/routes/user");
const bodyParser = require("body-parser");
require("dotenv").config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/user", users);

app.use("/", (req, res, next) => {
  res.send("page not found");
});

module.exports = app;
