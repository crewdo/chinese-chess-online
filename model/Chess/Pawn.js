import BaseChessMan from './BaseChessMan';

class Pawn extends BaseChessMan {

    constructor() {
        super();
        this.type = 'P';
        this.defaultPositions = [];
    }

    getAvailablePositionsToMove(chessMen) {
    }

}

module.exports = Pawn;