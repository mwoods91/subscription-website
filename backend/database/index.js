const mongoose = require("mongoose");
// const mysql = require("mysql");

require("dotenv").config();

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("DB Connection Error ", err));

// //create MYSQL Connection
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "g-pace_central",
// });

// //connect to database
// connection.connect((err) => {
//   if (err) {
//     console.log("Problem connecting to database:" + err.stack);
//   }
//   console.log("connected to database with ID" + connection.threadId);
// });
