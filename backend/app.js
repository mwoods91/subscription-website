const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { readdirSync } = require("fs");
path = require("path");

const morgan = require("morgan");
require("./database/index");
require("dotenv").config();

const app = express();

// middlewares
app.use(express.json());

let reqPath = path.join(__dirname, "../frontend/build");

app.use(express.static(reqPath));
console.log({ file: reqPath });

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["*"],
    credentials: false,
  })
);

// autoload routes
readdirSync("./routes", {}).map((r) => app.use(require(`./routes/${r}`)));

// listen
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
