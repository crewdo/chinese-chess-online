const BaseChessMan = require( './BaseChessMan');

class Horse extends BaseChessMan {

    constructor() {
        super();
        this.type = 'H';
        this.defaultPositions = [{x: 1, y: 0}, {x: 7, y: 0}, {x: 1, y: 9}, {x: 7, y: 9}];

    }

    getAvailablePositionsToMove(chessMen) {

    }
}

module.exports = Horse;