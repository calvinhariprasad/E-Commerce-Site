const mongoose = require("mongoose"); // import mongoose

// Schema for product entries - not used in latest release
const ProductSchema = new mongoose.Schema({
  sku: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

module.exports = Product = mongoose.model("product", ProductSchema);
