var express = require('express');
const router = express.Router();
const Student = require("../models/Students")

router.get("/login", (req, res) => {
    res.render("teacher/teacherLogin");
});
router.get("/option", (req,res) => {
    res.render("teacher/option")
})
router.post("/login", (req, res) => {
    if(req.body.password == "asdf"){
        res.redirect("/teacher/option");
    }
    else{
        res.render("teacher/teacherLogin", {
            error : "Please Enter Correct Password !!"
        })
    }
});
router.get("/add", (req, res) => {
    res.render("teacher/addstudent");
});

router.post("/add", async (req, res) => {
    const singleStudent = new Student({
        name : req.body.name,
        roll : req.body.roll,
        math : req.body.math,
        english : req.body.english,
        science : req.body.science,
        ss : req.body.ss,
        lang : req.body.lang,
        status : req.body.status
    })
    try {
        const newStudent = await singleStudent.save();
        res.redirect("/teacher/add");
      } catch {
        res.send("error")
    }
});

router.get("/viewall", async (req, res) => {
    const allStudents = await Student.find() 
    res.render("teacher/viewall", {student : allStudents})
});
router.get("/delete/:id", async (req, res) => {
    await Student.findByIdAndDelete(req.params.id)
    res.redirect("/teacher/viewall")
});
router.get("/edit/:id", async (req, res) => {
    const user = await Student.findById(req.params.id)
    res.render("teacher/edit", {user : user})
});
router.post("/edit/:id", async (req, res) => {
    const user = await Student.findByIdAndUpdate(req.params.id,req.body)
    res.redirect("/teacher/viewall")
});

module.exports = router;