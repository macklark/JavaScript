const express = require("express");
const sock = require("socket.io");
const app = express();
const port = 5000;

const server = app.listen(port, listening);

function listening ()  {
    console.log(`Running on server : ${port}`)
};

app.use(express.static("static"));  //Here we are using the use method to call the express object and using the static method of express object.

const io = sock(server);

io.on("connection", connect);

function connect(socket){
    console.log("connected", socket.id)

    socket.on("chat", fire1);

    function fire1(data){
        io.sockets.emit("chat", data);
    }

    socket.on("typing",function(data){
        socket.broadcast.emit("typing", data);
    } )
}
