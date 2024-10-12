const mongoose = require("mongoose");
require("dotenv").config({ path: "../config.env" });

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(
    `MongoDB Connected: ${conn.connection.host}\n${process.env.MONGO_URI}`
  );
};

module.exports = connectDB;
