const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");
const userModel = require("./models/userModel")
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const port = process.env.PORT || 9020;

mongoose
  .connect(
    "mongodb+srv://root:root@cluster0.qo4qm.mongodb.net/Netclan-data?retryWrites=true&w=majority",
    { autoCreate: true }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Couldn't connect to Atlas: ", err.message));

// Middleware
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Logger
app.use(logger("dev"));

// Routes
app.get("/", (req, res) => res.send("Hell World"))
app.get('/user', async (req, res) => {
    try {
      const users = await userModel.find();
      res.json(users);
    } catch (err) {
      res.status(500).send(err);
    }
  })

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.listen(port, () => {
  console.log("Server started on: " + port);
});

// module.exports = app;
