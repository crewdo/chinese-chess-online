const BaseChessMan = require('../Chess/BaseChessMan');
const ChessService = require('../Service/ChessService');
const ChessGenerator =  require("../Board/ChessGenerator");

class Game {

    constructor(room) {
        this.state = Game.STATE_READY;
        this.lastWinnerUserId = null;
        this.turnOfUserId = null;
        this.step = 0;
        this.chessService = new ChessService(ChessGenerator.generate());
        this.room = room;

        this.initialize();
    }

    static get STATE_READY()
    {
        return 0;
    }

    static get STATE_PLAYING()
    {
        return 1;
    }


    gameRestart() {
        this.step = 0;
        this.state = Game.STATE_READY;
        this.chessService = new ChessService(ChessGenerator.generate());
    }

    initialize() {

        this.gameRestart();

        this.turnOfUserId = this.lastWinnerUserId
                            ? this.room.players.find(value => value.id !== this.lastWinnerUserId).id
                            : this.room.players.find(value => value.colorKeeping === BaseChessMan.RED_TYPE).id;
    }

    start() {

        if(this.state !== 0 || this.room.players.length !== 2 || !this.turnOfUserId) return false;

        this.state = Game.STATE_PLAYING;
        ++ this.step;

        return true;
    }

    log(chessMan, newPos) {

    }

}

module.exports = Game;