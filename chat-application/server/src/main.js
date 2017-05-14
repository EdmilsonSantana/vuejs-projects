var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 4000;

io.on('connection', (socket) => {
  
  // Saiu da sala
  socket.on('enterRoom', (room) => {
    console.log(room);
    socket.join(room);
  });
  
  // Saiu da sala
  socket.on('leaveRoom', (room) => {
     socket.leave(room);
  });
  
  // Nova mensagem
  socket.on('newMessage', (message) => {
    console.log(message);
    Object.keys(socket.rooms).forEach((room) => {
      if (room !== socket.id) {
        io.sockets.in(room).emit('newMessage', message);
      }
    });    
  });
  
});

http.listen(port, () => {
  console.log(`Listening on ${port}`);
});