//socket.io code
let express = require('express')
let app = express();
let http = require('http');
let server = http.Server(app);
let socketIO = require('socket.io');
let io = socketIO(server);

const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
    //name of the event is required here
    socket.on('newMessage', (message) => {
        io.emit('newMessage', message);
    });
});

server.listen(port, () => {
    console.log(`port: ${port}`);
});