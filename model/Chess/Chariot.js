import BaseChessMan from './BaseChessMan';

class Chariot extends BaseChessMan {

    constructor() {
        super();
        this.type = 'R';
        this.defaultPositions = [{x: 0, y: 0}, {x: 8, y: 0}, {x: 0, y: 9}, {x: 8, y: 9}];

    }

    getAvailablePositionsToMove(chessMen) {

    }
}

module.exports = Chariot;