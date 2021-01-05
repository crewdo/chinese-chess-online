import BaseChessMan from './BaseChessMan';

class Cannon extends BaseChessMan {
    constructor() {
        super();
        this.type = 'C';

        //Red first
        this.defaultPositions = [{x: 1, y: 2}, {x: 8, y: 2}, {x: 1, y: 7}, {x: 8, y: 7}];
    }
}

module.exports = Cannon;