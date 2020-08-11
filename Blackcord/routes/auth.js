const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/register.html"))
});

router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/login.html"))
});



module.exports = router;
