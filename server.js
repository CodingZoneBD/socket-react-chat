const express = require('express')
const app = express();
const http = require('http');
const server = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(server);
const path = require('path');


app.use(express.static('client/build'));


io.on('connection', function (socket) {
    console.log("New User Connected");

    setTimeout(function () {
        socket.emit('msg', 'This msg send  on server')
    }, 1000)

    socket.on('disconnect', function (socket) {
        console.log("User Disconnected");
    })
})

app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
});

app.get('/express-server', function (req, res) {
    res.end("This Express server")
});


server.listen(5000, function () {
    console.log("Server run On 5000 Port")
})