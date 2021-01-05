import Cannon from '../Chess/Cannon';
import ChessGenerator from '../Board/ChessGenerator';
class Game {
    constructor({players}) {
        //State: 0 - Not Ready, 1 - Playing
        this.state = 0;
        this.winner = null;
        this.players = players
        this.visitors = [];
        this.turn = null;
        this.chessMen = [];

        this.initialize();
    }

    gameReset() {
        this.state = 0;
    }

    initialize() {

        this.gameReset();
        this.chessMen = ChessGenerator.generate();
    }


    start() {

    }

    log({chessMan, newPos}) {
        //todo: log to Mongo each belongs to Game.
    }

}