const express = require("express");
const app = express();
const server = require("http").Server(app);
const bodyParser = require("body-parser");

const SocketHandler = require("./handlerRequest/SocketHandler");

const io = require("socket.io");
const port = process.env.PORT || 888;
const socket = io(server);

let handler = new SocketHandler(socket);
handler._bindSocketEvent();

server.listen(port, () =>{
    console.log("Connected to port: "+ port)
});