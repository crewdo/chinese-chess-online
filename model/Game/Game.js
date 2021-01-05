import BaseChessMan from '../Chess/BaseChessMan';
import ChessGenerator from '../Board/ChessGenerator';
class Game {
    constructor({players}) {
        //State: 0 - Not Ready, 1 - Playing
        this.state = 0;
        this.lastWinnerUserId = null;
        this.players = players
        this.visitors = [];
        this.turnOfUserId = null;
        this.chessMen = [];

        this.initialize();
    }

    gameReset() {
        this.state = 0;
    }

    initialize() {

        this.gameReset();
        this.chessMen = ChessGenerator.generate();

        if(this.lastWinnerUserId) {
            this.turnOfUserId = this.players.filter(value => value.id !== this.lastWinnerUserId).id;
        }
        else {
            this.turnOfUserId = this.players.filter(value => value.colorKeeping === BaseChessMan.TYPE_RED).id;
        }

    }

    getChessManByCode(code, player)
    {
        for(let i = 0; i < this.chessMen.length; i++)
        {
            if(this.chessMen[i].code === code)
            {
                if(this.isOwner(this.chessMen[i], player))
                {
                    return this.chessMen[i];
                }

                return null;
            }
        }
    }

    isOwner(chessMan, player)
    {
        return  chessMan.color === player.colorKeeping;
    }

    start() {

    }

    clickingToGetAvailablePosition(code, player)
    {
        var chessMan = this.getChessManByCode(code, player);

        if(chessMan)
        {
            return chessMan.getAvailablePositionsToMove();
        }
        return null;
    }

    requestMove(newPos, code, player)
    {
        var chessMan = this.getChessManByCode(code, player);

        if(chessMan)
        {
           return chessMan.move(newPos, this.chessMen);
        }
        return false;
    }

    log({chessMan, newPos}) {
        //todo: log to Mongo each belongs to Game.
    }

}