var express = require('express');
const router = express.Router();

router.get("/login", (req, res) => {
    res.render("teacher/teacherLogin");
});

module.exports = router;