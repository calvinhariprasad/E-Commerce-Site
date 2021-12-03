const express = require("express"); // import express
const router = express.Router(); // establish router

const Contact = require("../../models/Contact"); // import schema

router.get("/test", (req, res) => {
  res.send("Testing contact form!");
});

// Pull contact form entries from the database and push to API
router.get("/", (req, res) => {
  Contact.find()
    .then((contact) => res.json(contact))
    .catch((error) =>
      res.status(404).json({ contact_data_not_found: "No contact data found" })
    );
});

// Push new contact form entries using POST
router.post("/", (req, res) => {
  console.log("Posting contact data to the database");
  const newEntry = new Contact({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });
  newEntry.save().then((entry) => res.json(entry));
});

module.exports = router;
