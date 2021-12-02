const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const products = require("./routes/api/products");
const contact = require("./routes/api/contact");
const transactions = require("./routes/api/transactions");

const app = express();
require("dotenv").config();

connectDB();

app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello, World! - Node/Express Server");
});

app.use("/api/products", products);
app.use("/api/contact", contact);
app.use("/api/transactions", transactions);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});
