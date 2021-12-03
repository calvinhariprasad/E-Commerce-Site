const mongoose = require("mongoose"); // import mongoose

// Schema for transaction entries
const TransactionSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  creditCardNumber: {
    type: String,
    required: true,
  },
  securityCode: {
    type: String,
    required: true,
  },
  expirationDate: {
    type: String,
    required: true,
  },
});

module.exports = Transaction = mongoose.model("transaction", TransactionSchema);
