const mongoose = require("mongoose");

const scheme = mongoose.Schema;

const room_scheme = new scheme({
    room_title : {
        type : String,
        required : true
    },

    room_avatar : {
        type : String,
    }
});

module.exports = mongoose.model("room", room_scheme);
