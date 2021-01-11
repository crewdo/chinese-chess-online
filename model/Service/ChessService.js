class ChessService {

    constructor(chessMen) {
        this.chessMen = chessMen;
    }

    static get BOARD_MAX_X() {
        return 8;
    }

    static get BOARD_MAX_Y(){
        return 9;
    }

    static get BOARD_RED_RIVER_Y() {
        return 4;
    }

    static get BOARD_BLACK_RIVER_Y(){
        return 5;
    }

    static get PALACE_MAX_LEFT_X() {
        return 3;
    }

    static get PALACE_MAX_RIGHT_X() {
        return 5;
    }

    static get PALACE_MAX_RED_Y() {
        return 2;
    }

    static get PALACE_MAX_BLACK_Y() {
        return 7;
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

    static getChessManByPosition(position, chessMen)
    {
        return chessMen.find(value => value.position.x === position.x && value.position.y === position.y);
    }

    isOwner(chessMan, player)
    {
        return  chessMan.color === player.colorKeeping;
    }

    getAvailablePositionToMoveByChessManId(chessManId, player)
    {
        let chessMan = this.getChessManById(chessManId, player);

        if(chessMan)
        {
            return chessMan.baseCheckingAndReturnPositions(this.chessMen);
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