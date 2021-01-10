const ChessGenerator =  require("../Board/ChessGenerator");

class ChessService {

    constructor() {
        this.chessMen = ChessGenerator.generate();
    }

    getChessManById(id, player)
    {
        for(let i = 0; i < this.chessMen.length; i++)
        {
            if(this.chessMen[i].id === id)
            {
                if(this.isOwner(this.chessMen[i], player))
                {
                    return this.chessMen[i];
                }

                return null;
            }
        }
    }

    getChessManByPosition(x,y)
    {
        let chessMan = this.chessMen.filter(value => value.position.x === x && value.position.y === y);
        if(chessMan && chessMan.length > 0)
        {
            return chessMan;
        }
        return null;
    }

    isOwner(chessMan, player)
    {
        return  chessMan.color === player.colorKeeping;
    }

    getAvailablePositionToMoveByChessManId(chessManId, player)
    {
        var chessMan = this.getChessManById(chessManId, player);

        if(chessMan)
        {
            return chessMan.getAvailablePositionsToMove(this.chessMen);
        }

        return null;
    }

    requestMove(newPos, id, player)
    {
        var chessMan = this.getChessManById(id, player);

        if(chessMan)
        {
            return chessMan.move(newPos, this.chessMen);
        }
        return false;
    }

    kill(chessManId)
    {

    }
}

module.exports = ChessService;