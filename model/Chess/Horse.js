const BaseChessMan = require( './BaseChessMan');

class Horse extends BaseChessMan {

    constructor({color, initPos}) {
        super({color, initPos});
        this.type = 'H';
    }

    static get defaultPositions()
    {
        return [{x: 1, y: 0}, {x: 7, y: 0}, {x: 1, y: 9}, {x: 7, y: 9}];
    }

    getAvailablePositionsToMove(chessMen) {

    }
}

module.exports = Horse;