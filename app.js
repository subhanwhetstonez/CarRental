const express = require("express");
const authRoutes = require("./routes/authRoutes");
const carRoutes = require("./routes/carRoutes");
require("./config/dotenv");
const PORT = process.env.PORT || 5050;

const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/auth", authRoutes);
app.use("/api/cars", carRoutes);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, (req, res) => {
  console.log(`The server is running on http://localhost:5050`);
});
module.exports = app;
