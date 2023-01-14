const express = require("express");
const app = express();
http = require("http");
const cors = require("cors");
const { Server } = require("socket.io"); // Add this

app.use(cors()); // Add cors middleware

const server = http.createServer(app); // Add this

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// Listen for when the client connects via socket.io-client
io.disconnectSockets();
io.on("connection", (socket) => {
  console.log(`User connected ${socket.id} at ${Date.now().toLocaleString()}`);
  socket.on("join_room", (data) => {
    console.log("Joining... ");
    const { username, rooms } = data;
    socket.join(rooms);
    console.log("Emitting joining message");
    socket.to(rooms).emit("receive_message", {
      message: `${username} has joined the chat`,
      username: "Admin",
      time: Date.now(),
    });
  });
  socket.on("send_message", (data) => {
    const { username, rooms, message } = data;
    console.log(username);
    console.log(rooms);
    console.log(message);

    socket.to(rooms).emit("receive_message", {
      message: message,
      username: username,
      time: Date.now(),
    });
  });
});

server.listen(4000, () => "Server is running on port 3000");
