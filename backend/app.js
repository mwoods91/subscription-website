const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { readdirSync } = require("fs");

const morgan = require("morgan");
require("./database/index");
require("dotenv").config();

const app = express();

// middlewares
app.use(express.json());

//enable cors for all routes
app.use(cors());

// autoload routes
readdirSync("./routes", cors()).map((r) => app.use(require(`./routes/${r}`)));

// listen
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
