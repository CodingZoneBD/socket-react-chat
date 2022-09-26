const express = require('express')
const app = express();
const http = require('http');
const server = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(server);


io.on('connection', function (socket) {
    console.log("New User Connected");

    socket.on('disconnect', function (socket) {
        console.log("User Disconnected");
    })
})


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/room', function (req, res) {
    res.sendFile(__dirname + '/room.html');
});


server.listen(5000, function () {
    console.log("Server run On 5000 Port")
})