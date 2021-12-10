const express = require("express");
const app = express();
const port = 3000;
const mongoose = require('mongoose');
var expressLayouts = require('express-ejs-layouts');

mongoose.connect("mongodb://localhost:27017/task3", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connected"));

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(expressLayouts);
app.set('layout', 'layouts/layout');

const teacherRoutes = require("./routes/teacherlogin")
app.use("/teacher",teacherRoutes)


app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
