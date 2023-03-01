const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { readdirSync } = require("fs");

const morgan = require("morgan");
require("./database/index");
require("dotenv").config();

const app = express();

// middlewares
app.use(express.json({ limit: "5mb" }));
app.use(
  cors({
    origin: [process.env.CLIENT_URL],
  })
);

// autoload routes
readdirSync("./routes").map((r) => app.use(require(`./routes/${r}`)));

// listen
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
