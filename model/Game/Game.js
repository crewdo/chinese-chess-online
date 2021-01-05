class Game {
    constructor({players}) {
        //State: 0 - Not Ready, 1 - Playing
        this.state = 0;
        this.winner = null;
        this.players = players
        this.visitors = [];
        this.turn = null;
    }

    initialize() {

    }

    start() {

    }

    log({chessMan, newPos}) {
        //todo: log to Mongo each belongs to Game.
    }

}