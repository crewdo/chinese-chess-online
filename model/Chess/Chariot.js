const BaseChessMan = require( './BaseChessMan');

class Chariot extends BaseChessMan {

    constructor({color, initPos}) {
        super({color, initPos});
        this.type = 'R';
    }

    static get defaultPositions()
    {
        return [{x: 0, y: 0}, {x: 8, y: 0}, {x: 0, y: 9}, {x: 8, y: 9}];
    }

    getAvailablePositionsToMoveOrKill(chessMen)
    {
        return  this.goStraight(chessMen, true).positions;
    }
}

module.exports = Chariot;