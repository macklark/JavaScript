const express = require("express");
const path = require("path");
const post_room = require("../controllers/rooms");
const show_room = require("../controllers/rooms");
const router = express.Router();


router.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});


router.get("/index", (req, res, next) => {
    res.sendFile(path.join(__dirname, "../public/user.html"));
});

router.use("/createroom", (req, res, next) => {
     res.sendFile(path.join(__dirname, "../public/room.html"))
})

router.post("/createrooms", post_room.post_room);

router.get("/rooms", show_room.show_rooms);

module.exports = router;
