const BaseChessMan = require( './BaseChessMan');

class Elephant extends BaseChessMan {

    constructor({color, initPos}) {
        super({color, initPos});
        this.type = 'E';

    }
    static get defaultPositions()
    {
        return [{x: 2, y: 0}, {x: 6, y: 0}, {x: 2, y: 9}, {x: 6, y: 9}];
    }

    getAvailablePositionsToMove(chessMen) {

    }
}

module.exports = Elephant;