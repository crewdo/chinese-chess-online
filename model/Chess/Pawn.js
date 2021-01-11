const BaseChessMan =  require("./BaseChessMan");
const ChessService =  require("../Service/ChessService");

class Pawn extends BaseChessMan {

    constructor({color, initPos}) {
        super({color, initPos});
        this.type = 'P';
    }

    static get defaultPositions()
    {
        return [];
    }

    getAvailablePositionsToMoveOrKill(chessMen)
    {
        let x = this.position.x;
        let y = this.position.y;
        let positions = [];

        if(this.color === BaseChessMan.RED_TYPE)
        {
            if(y < ChessService.BOARD_MAX_Y)
            {
                positions.push({x : x, y: y + 1})
            }

            if(y > ChessService.BOARD_RED_RIVER_Y)
            {
                if( x > 0) {
                    positions.push({x : x - 1, y: y})
                }

                if(x < ChessService.BOARD_MAX_X) {
                    positions.push({x : x + 1, y: y})
                }
            }
        }
        else {

            if(y > 0)
            {
                positions.push({x : x, y: y - 1})
            }

            if(y > ChessService.BOARD_BLACK_RIVER_Y)
            {
                if( x > 0) {
                    positions.push({x : x - 1, y: y})
                }

                if(x < ChessService.BOARD_MAX_X) {
                    positions.push({x : x + 1, y: y})
                }
            }
        }

        return positions;

    }

}

module.exports = Pawn;