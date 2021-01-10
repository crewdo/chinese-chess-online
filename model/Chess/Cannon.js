const BaseChessMan = require( './BaseChessMan');

class Cannon extends BaseChessMan {

    constructor({color, initPos}) {
        super({color, initPos});
        this.type = 'C';
    }

    static get defaultPositions()
    {
        return [{x: 1, y: 2}, {x: 8, y: 2}, {x: 1, y: 7}, {x: 8, y: 7}];
    }
}

module.exports = Cannon;