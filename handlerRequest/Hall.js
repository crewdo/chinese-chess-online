import Player from "../model/Player/Player";
import Visitor from "../model/Player/Visitor";

const Room = require("../model/Room/Room");
const BaseChessMan = require("../model/Chess/BaseChessMan");

class Hall {
    constructor(socketGlobal) {
        this.socketGlobal = socketGlobal;
        this.roomList = {};

    }

    bindingSocketEvent() {
        let self = this;

        this.socketGlobal.on("connection", function (socket) {
            socket.on('user_online', function() {
                socket.emit('list_out_rooms', self.filterDefaultRoom(self.roomList));
            });

            socket.on('user_created_room', (username, callback) => {
                if(Object.keys(socket.rooms).length === 1) {

                    let newRoomId = Room.ROOM_NAME_PREFIX + Math.random().toString(36).substring(2);

                    socket.join(newRoomId);
                    callback(newRoomId);

                    self.roomList[newRoomId] = new Room(newRoomId);
                    self.roomList[newRoomId].initialize(socket.id, username, BaseChessMan.RED_TYPE);

                    //emit to all online users that there's new room has just created.
                    self.socketGlobal.emit('list_out_rooms', self.filterDefaultRoom(self.roomList));
                }
            });

            socket.on('disconnecting', function(){

                var rooms = socket.rooms;
                var socketInRoom = self.filterCurrentRoomId(rooms);

                if(socketInRoom && self.checkingRoomExisting(socketInRoom)) {

                    var currentRoom = self.roomList[socketInRoom];

                    //Process Remove Player From Room
                    currentRoom.players = currentRoom.players.filter(e => {
                        return e.id !== socket.id;
                    });

                    //To notice people in room aware that a player has just left
                    self.emitRoomThatPlayersHasJustChanged(currentRoom);

                    //If only one stay in Room, set his color to Red.
                    if(currentRoom.players.length === 1){
                        currentRoom.game.lastWinnerUserId = null;
                        currentRoom.players[0].colorKeeping = BaseChessMan.RED_TYPE;
                    }
                    else (currentRoom.players.length === 0)
                    {
                        //this also remove game refer to room.
                        delete self.roomList[socketInRoom];
                    }

                }

            });

            socket.on('user_joined', (roomId, username, callback)=> {

                if(typeof socket.adapter.rooms[roomId] !== "undefined" && typeof self.roomList[roomId] !== "undefined"){

                    if(Object.keys(socket.rooms).length === 1) {

                        socket.join(roomId);

                        if(self.roomList[roomId].game.state === 0 && self.roomList[roomId].players.length === 1) {

                            var player = new Player({id: socket.id, colorKeeping: BaseChessMan.BLACK_TYPE, name: username})

                            self.roomList[roomId].joinAsPlayer(player);

                            callback('Joined as Player');
                        }
                        else {
                            var visitor = new Visitor({id: socket.id, name : username})
                            self.roomList[roomId].joinAsVisitor(visitor);
                            callback('Joined as Visitor');
                        }

                        //crewtodo: emit all
                    }
                }

            });

            socket.on('disconnect', () => {
                socket.disconnect();
            });

            socket.on("user_request_start", (roomId) => {
                if(self.checkingRoomExisting(roomId)){

                    let host = self.roomList[roomId].getPlayer(socket.id);

                    if(typeof host !== "undefined"){
                        if(host.colorKeeping === BaseChessMan.RED_TYPE && self.roomList[roomId].players.length === 2 ){
                            self.roomList[roomId].game.start();
                        }
                        else{
                            self.socketGlobal.to(`${socket.id}`).emit("too_least_player_to_start");
                        }
                    }
                    else
                    {
                        self.socketGlobal.to(`${socket.id}`).emit("permission_denied");
                    }
                }

            });

            socket.on('user_request_available_pos', (roomId, chessManId) => {

                if(!self.checkPermissionForTurn(roomId, socket.id)) return;

                var positions = self.roomList[roomId].game.chessService.getAvailablePositionToMoveByChessManId(chessManId, player);
                self.socketGlobal.to(`${socket.id}`).emit("available_positions", {available_positions: positions});
            });

        });
    }

    emitRoomThatPlayersHasJustChanged(room)
    {

    }

    checkPermissionForTurn(roomId, playerId)
    {
        if(this.checkingRoomExisting(roomId)) {

            let player = self.roomList[roomId].getPlayer(playerId);

            if(typeof player !== "undefined") {

                return player.id === self.roomList[roomId].game.turnOfUserId
            }

            return false
        }
    }

    checkingRoomExisting(roomId){
        return typeof this.roomList[roomId] !== "undefined";
    }

    filterDefaultRoom(allRooms) {
        return Object.keys(allRooms).filter(key => key.indexOf('roomID::') !== -1)
            .reduce((obj, key) => { obj[key] = {length: allRooms[key].players.length}; return obj; }, {});
    }

    filterCurrentRoomId(playerRooms) {

        let currentRoomObject = Object.keys(playerRooms).filter(key => key.indexOf(Room.ROOM_NAME_PREFIX) !== -1);

        if(currentRoomObject.length > 0) return currentRoomObject[0];

        return false;
    }

}

module.exports = Hall;
