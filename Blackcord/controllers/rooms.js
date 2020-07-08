const room_model = require("../models/room");

exports.post_room = (req, res, next) => {
    const name = req.body.name;
    const avatar = req.body.avatar;
    const room = new room_model({room_title : name, room_avatar : avatar})
    room.save().then(
        result => {res.redirect("/rooms")}
    ).catch(
        err => {console.log(err)}
    )
}

exports.show_rooms = (req, res, next) => {
    room_model.find().then(
        list => {
            res.render("room", {rooms_list : list})
        }
    ).catch(
        err => {console.log(err)}
    )
}

exports.get_room = (req, res) => {
    const id = req.params.roomID;
    const name = req.params.room_name;
    
    room_model.findById(id).then(
        room => {
            res.render("rooms", {rooms : room})
        }
    ).catch(
        err => {console.log(err)}
    )
}
