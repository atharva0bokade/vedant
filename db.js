const mongoose = require("mongoose");

// const mongoUri = process.env.mongoURI;

const connectDB = () => {
  mongoose
    .connect("mongodb+srv://atharva1bokade:456abc123@information.hwmdy.mongodb.net/information?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => {
      console.log("MongoDB Connected");
    });
};

module.exports = connectDB;
