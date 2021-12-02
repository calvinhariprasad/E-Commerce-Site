const express = require("express");
const router = express.Router();

const Contact = require("../../models/Contact");

router.get("/test", (req, res) => {
  res.send("Testing contact form!");
});

router.get("/", (req, res) => {
  Contact.find()
    .then((contact) => res.json(contact))
    .catch((error) =>
      res.status(404).json({ contact_data_not_found: "No contact data found" })
    );
});

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
