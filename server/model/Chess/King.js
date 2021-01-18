const BaseChessMan = require( './BaseChessMan');
const ChessService = require( '../Service/ChessService');

class King extends BaseChessMan {

    constructor({color, initPos}) {
        super({color, initPos});
        this.type = 'K';
    }

    static get defaultPositions()
    {
        return  [{x: 4, y: 0}, {x: 4, y: 9}];
    }
    getAvailablePositionsToMoveOrKill() {

        let positions = [];

        let x = this.position.x;
        let y = this.position.y;

        if(x > ChessService.PALACE_MAX_LEFT_X) {
            positions.push({x: x - 1, y: y})
        }

        if(x < ChessService.PALACE_MAX_RIGHT_X) {
            positions.push({x: x + 1, y: y})

        }

        if(this.color === BaseChessMan.BLACK_TYPE) {
            if(y > ChessService.PALACE_MAX_BLACK_Y) {
                positions.push({x: x, y: y - 1})
            }

            if(y < ChessService.BOARD_MAX_Y) {
                positions.push({x: x, y: y + 1})
            }
        }
        else {
            if(y < ChessService.PALACE_MAX_RED_Y) {
                positions.push({x: x, y: y + 1})
            }

            if(y > 0) {
                positions.push({x: x, y: y - 1})
            }
        }


        return positions;
    }
}

module.exports = King;