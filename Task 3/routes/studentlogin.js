var express = require("express");
const router = express.Router();
const Student = require("../models/Students");

router.get("/login", (req, res) => {
  res.render("student/login");
});
router.post("/login", async (req, res) => {
    const Stuname = req.body.name;
    const PassStudent = req.body.password;
    const individualStudent = await Student.findOne({name : Stuname , password : PassStudent});
    res.render("student/view", { one : individualStudent})
});

module.exports = router;
