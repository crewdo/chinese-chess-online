const BaseChessMan =  require("./BaseChessMan");

class Pawn extends BaseChessMan {

    constructor({color, initPos}) {
        super({color, initPos});
        this.type = 'P';
    }

    static get defaultPositions()
    {
        return [];
    }

    getAvailablePositionsToMove(chessMen)
    {
        console.log(this.position, chessMen);
    }

}

module.exports = Pawn;