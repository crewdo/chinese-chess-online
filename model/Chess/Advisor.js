import BaseChessMan from './BaseChessMan';

class Advisor extends BaseChessMan {

    constructor() {
        super();
        this.type = 'A';
        this.defaultPositions = [{x: 3, y: 0}, {x: 5, y: 0}, {x: 3, y: 9}, {x: 5, y: 9}];

    }

    getAvailablePositionsToMove() {
        //crewtodo: checking if king checked
        return [];
        //now get all chessMen, can evaluate which position can move on
    }
}

module.exports = Advisor;