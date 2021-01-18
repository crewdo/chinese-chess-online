const BaseChessMan = require( './BaseChessMan');
const ChessService = require( '../Service/ChessService');

class Elephant extends BaseChessMan {

    constructor({color, initPos}) {
        super({color, initPos});
        this.type = 'E';

    }
    static get defaultPositions()
    {
        return [{x: 2, y: 0}, {x: 6, y: 0}, {x: 2, y: 9}, {x: 6, y: 9}];
    }

    getAvailablePositionsToMoveOrKill(chessMen) {
        let positions;
        let allPositions = [];
        let x = this.position.x;
        let y = this.position.y;

        //Checking the middle man
        if(!ChessService.getChessManByPosition({x: x + 1, y: y - 1}, chessMen)) {
            allPositions.push({x : x + 2, y: y - 2})
        }

        if(!ChessService.getChessManByPosition({x: x + 1, y: y + 1}, chessMen)) {
            allPositions.push({x : x + 2, y: y + 2})
        }

        if(!ChessService.getChessManByPosition({x: x - 1, y: y + 1}, chessMen)) {
            allPositions.push({x : x - 2, y: y + 2})
        }

        if(!ChessService.getChessManByPosition({x: x - 1, y: y - 1}, chessMen)) {
            allPositions.push({x : x - 2, y: y - 2})
        }

        let validPositions = allPositions.filter(value =>
            value.x >= 0
            && value.x <= ChessService.BOARD_MAX_X
            && value.y >= 0
            && value.y <= ChessService.BOARD_MAX_Y
        )

        //Checking River
        if(this.color === BaseChessMan.RED_TYPE)
        {
            positions = validPositions.filter(value => value.y <= ChessService.BOARD_RED_RIVER_Y)
        }
        else {
            positions = validPositions.filter(value => value.y >= ChessService.BOARD_BLACK_RIVER_Y)
        }

        return positions;
    }
}

module.exports = Elephant;