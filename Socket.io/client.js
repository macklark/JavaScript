const socket = io.connect("http://localhost:5000");

const a = document.getElementById("btn");
const b = document.getElementById("message");
const c = document.getElementById("name");
const d = document.getElementById("content");
const e = document.getElementById("feedback")

a.addEventListener("click", fire);

function fire(){
    socket.emit("chat", {
        mess: b.value,
        handle: c.value
    });
}

b.addEventListener("keypress", fire2);

function fire2(){
    socket.emit("typing",handle.value)
}



socket.on("chat", function(data){
    
     d.innerHTML += `<p>${data.handle}</p> : <p>${data.mess}</p>`

})


socket.on("typing",function(){
    e.innerHTML = "<p><em>" + data + "is typingmessage....</em></p>"
})
