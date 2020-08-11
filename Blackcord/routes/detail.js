const express = require("express");

const get_room = require("../controllers/rooms")

const router = express.Router();

router.get('/rooms/:roomID/:room_name', get_room.get_room);

module.exports = router;
