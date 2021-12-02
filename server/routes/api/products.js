const express = require("express");
const router = express.Router();

const Product = require("../../models/Product");

router.get("/test", (req, res) => {
  res.send("Testing product route!");
});

router.get("/", (req, res) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((error) =>
      res.status(404).json({ products_not_found: "No products found" })
    );
});

router.get("/:id", (req, res) => {
  Product.findById(req.params.id)
    .then((product) => res.json(product))
    .catch((error) =>
      res.status(404).json({ products_not_found: "No products found" })
    );
});

module.exports = router;
