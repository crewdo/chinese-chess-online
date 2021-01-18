const BaseChessMan = require( './BaseChessMan');
const ChessService = require( '../Service/ChessService');

class Horse extends BaseChessMan {

    constructor({color, initPos}) {
        super({color, initPos});
        this.type = 'H';
    }

    static get defaultPositions()
    {
        return [{x: 1, y: 0}, {x: 7, y: 0}, {x: 1, y: 9}, {x: 7, y: 9}];
    }

    getAvailablePositionsToMoveOrKill(chessMen) {
        let positions = [];
        let x = this.position.x;
        let y = this.position.y;

        //Checking the middle man
        if(!ChessService.getChessManByPosition({x: x, y: y + 1}, chessMen)) {
            positions.push({x : x - 1, y: y + 2}, {x : x + 1, y: y + 2})
        }

        if(!ChessService.getChessManByPosition({x: x, y: y - 1}, chessMen)) {
            positions.push({x : x - 1, y: y - 2}, {x : x + 1, y: y - 2})
        }

        if(!ChessService.getChessManByPosition({x: x + 1, y: y}, chessMen)) {
            positions.push({x : x + 2, y: y + 1}, {x : x + 2, y: y - 1})
        }

        if(!ChessService.getChessManByPosition({x: x - 1, y: y}, chessMen)) {
            positions.push({x : x - 2, y: y + 1}, {x : x - 2, y: y - 1})
        }

        return positions.filter(value =>
            value.x >= 0
            && value.x <= ChessService.BOARD_MAX_X
            && value.y >= 0
            && value.y <= ChessService.BOARD_MAX_Y
        )
    }
}

module.exports = Horse;