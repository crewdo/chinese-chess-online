const BaseChessMan = require( './BaseChessMan');

class King extends BaseChessMan {

    constructor() {
        super();
        this.type = 'K';
        this.defaultPositions = [{x: 4, y: 0}, {x: 4, y: 9}];
    }

    getAvailablePositionsToMove(chessMen) {

    }
}

module.exports = King;