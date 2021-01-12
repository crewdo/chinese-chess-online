const express = require("express");
const cors = require('cors')
const app = express();
app.use(cors());
app.options('*', cors());


const server = require("http").Server(app);
const bodyParser = require("body-parser");

const Hall = require("./handlerRequest/Hall");

const io = require("socket.io");
const port = process.env.PORT || 888;
const socket = io(server, {origins : '*:*'});


let TheHall = new Hall(socket);
TheHall.reception();


app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));



server.listen(port, () =>{
    console.log("Connected to port: " + port)
});


// var corsOptions = {
//     origin: '*',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
