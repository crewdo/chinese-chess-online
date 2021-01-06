import BaseChessMan from '../Chess/BaseChessMan';
import ChessService from '../Service/ChessService';

class Game {

    STATE_READY = 0;
    STATE_PLAYING = 1;

    constructor() {
        this.state = Game.STATE_READY;
        this.lastWinnerUserId = null;
        this.players = []
        this.visitors = [];
        this.turnOfUserId = null;
        this.chessService = new ChessService();

        this.initialize();
    }

    playerJoining(player)
    {
        if(this.players.some(value => value.id === player.id)) return false;

        this.players.push(player);

        return true;
    }

    gameReset() {
        //
        this.state = Game.STATE_READY;
    }

    initialize() {

        this.gameReset();

        if(this.lastWinnerUserId) {
            this.turnOfUserId = this.players.filter(value => value.id !== this.lastWinnerUserId).id;
        }
        else {
            this.turnOfUserId = this.players.filter(value => value.colorKeeping === BaseChessMan.TYPE_RED).id;
        }
    }

    start() {
        if(this.state !== 0 || this.players.length !== 2) return false;
        this.state = Game.STATE_PLAYING;
    }

    log(chessMan, newPos) {
        //todo: log to Mongo each belongs to Game.
    }

}