const { Server } = require('socket.io');

function initSocketServer(httpServer) {
  const io = new Server(httpServer, {
    cors: {
      origin: '*', // Adjust as needed for security
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('chat message', (msg) => {
      // Broadcast message to all clients
      io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });

  return io;
}

module.exports = initSocketServer;