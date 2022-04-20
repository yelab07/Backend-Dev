const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 5052;
require("dotenv").config();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// make my mongodb connection WITH mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/todo-with-db",
  (err) => {
    if (err) throw new Error({ msg: err });
    console.log("connected to mongodb");
  }
);
app.use("/calculate", require("./routes/calculatorRoute"));

app.use("/api", require("./routes/api-routes"));

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
