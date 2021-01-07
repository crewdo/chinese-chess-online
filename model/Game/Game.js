import BaseChessMan from '../Chess/BaseChessMan';
import ChessService from '../Service/ChessService';

class Game {

    static STATE_READY = 0;
    static STATE_PLAYING = 1;

    constructor(room) {
        this.state = Game.STATE_READY;
        this.lastWinnerUserId = null;
        this.turnOfUserId = null;
        this.chessService = new ChessService();
        this.room = room;

        this.initialize();
    }


    gameReset() {
        //
        this.state = Game.STATE_READY;
    }

    initialize() {

        this.gameReset();

        this.turnOfUserId = this.lastWinnerUserId
                            ? this.room.players.filter(value => value.id !== this.lastWinnerUserId).id
                            : this.room.players.filter(value => value.colorKeeping === BaseChessMan.RED_TYPE).id;
    }

    start() {

        if(this.state !== 0 || this.room.players.length !== 2 || !this.turnOfUserId) return false;

        this.state = Game.STATE_PLAYING;
    }

    log(chessMan, newPos) {
        //todo: log to Mongo each belongs to Game.
    }

}