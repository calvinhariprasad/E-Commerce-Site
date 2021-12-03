const express = require("express"); // import express
const router = express.Router(); // establish express router

const Transaction = require("../../models/Transaction"); // import schema

router.get("/test", (req, res) => {
  res.send("Testing contact form!");
});

// Pull transaction form entries from the database and push to API
router.get("/", (req, res) => {
  Transaction.find()
    .then((transaction) => res.json(transaction))
    .catch((error) =>
      res
        .status(404)
        .json({ transaction_data_not_found: "No transaction data found" })
    );
});

// Push new transaction form entries using POST
router.post("/", (req, res) => {
  console.log("Posting transaction data to the database");
  const newEntry = new Transaction({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    city: req.body.city,
    postalCode: req.body.postalCode,
    phoneNumber: req.body.phoneNumber,
    creditCardNumber: req.body.creditCardNumber,
    securityCode: req.body.securityCode,
    expirationDate: req.body.expirationDate,
  });
  newEntry.save().then((entry) => res.json(entry));
});

module.exports = router;
