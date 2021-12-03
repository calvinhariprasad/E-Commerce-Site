const mongoose = require("mongoose"); // import mongoose
const config = require("config"); // import config
const db = config.get("mongoURI"); // import MongoDB URI

// Connect to MongoDB database
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });

    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
