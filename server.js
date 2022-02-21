const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { application } = require("express");
const connectDB = require("./db")();
const app = express();

// expecting json data from frontend
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello from the backend api!");
});

app.listen(4000, () => {
  console.log("Server is up and running at port 4000");
});
