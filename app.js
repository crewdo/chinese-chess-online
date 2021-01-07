const express = require("express");
const app = express();
const server = require("http").Server(app);
const bodyParser = require("body-parser");

const Hall = require("./handlerRequest/Hall");

const io = require("socket.io");
const port = process.env.PORT || 888;
const socket = io(server);

let TheHall = new Hall(socket);
TheHall.bindingSocketEvent();

server.listen(port, () =>{
    console.log("Connected to port: "+ port)
});