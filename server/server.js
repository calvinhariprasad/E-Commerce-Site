const express = require("express"); // import express
const cors = require("cors"); // import cors
const connectDB = require("./config/db"); // import database connection function

const products = require("./routes/api/products"); // import products route
const contact = require("./routes/api/contact"); // import contact route
const transactions = require("./routes/api/transactions"); // import transactions route

const app = express(); // create express server
require("dotenv").config(); // import environment variables

connectDB(); // connect to MongoDB database

app.use(cors({ origin: true, credentials: true })); // set server to use CORS

app.use(express.json({ extended: false })); // set server to use JSON

// If server is running, display message
app.get("/", (req, res) => {
  res.send("Hello, World! - Node/Express Server");
});

app.use("/api/products", products); // set server to use products route
app.use("/api/contact", contact); // set server to use contact route
app.use("/api/transactions", transactions); // set server to use transactions route

// set server to run on the port defined in environment variables
app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});
