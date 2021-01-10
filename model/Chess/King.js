const BaseChessMan = require( './BaseChessMan');

class King extends BaseChessMan {

    constructor({color, initPos}) {
        super({color, initPos});
        this.type = 'K';
    }

    static get defaultPositions()
    {
        return  [{x: 4, y: 0}, {x: 4, y: 9}];
    }
    getAvailablePositionsToMoveOrKill(chessMen) {

    }
}

module.exports = King;