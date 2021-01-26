const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');
const app = express();
const server = http.createServer(app);
const io = socketio(server);
app.use(cors());

const Hall = require('./welcome/Hall');
let Gate = new Hall(io);
Gate.askReceptionist();
const port = process.env.PORT || 80;
server.listen(port, () => console.log(`Server has started. ${port}`));
