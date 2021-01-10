const BaseChessMan = require( './BaseChessMan');

class Cannon extends BaseChessMan {

    constructor({color, initPos}) {
        super({color, initPos});
        this.type = 'C';
    }

    static get defaultPositions()
    {
        return [{x: 1, y: 2}, {x: 7, y: 2}, {x: 1, y: 7}, {x: 7, y: 7}];
    }

    getAvailablePositionsToMoveOrKill(chessMen)
    {
        return this.goStraight(chessMen);
    }
}

module.exports = Cannon;