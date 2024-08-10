import express from "express";
const app = express();
import { Server } from "socket.io";
import http from "http";
const server = http.createServer(app);
import cors from "cors";

// app.use(cors({ origin: "http://127.0.0.1:5500" }));

const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"], // Add custom headers if necessary
    credentials: true, // Allow credentials if needed
  },
});

io.on("connection", (socket) => {
  socket.emit("message", "hello world");
});

server.listen(3000, console.log("listening on port 3000"));
