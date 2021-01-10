const ChessService = require('../Service/ChessService');
class BaseChessMan {

    constructor({color, initPos}) {
        this.color = color;
        this.id = -1;
        //position as {x , y}
        this.position = initPos;
        this.name = this.getName();

    }

    static get RED_TYPE() {
        return 'r';
    }

    static get BLACK_TYPE() {
        return 'b';
    }


    move(newPos, chessMen) {
        // if(this.getAvailablePositionsToMove(chessMen).some((value) => value === newPos)){
        //     this.position = newPos;
        // }

        return true;
    }

    getName() {

        let names = {
            'K': 'King',
            'A': 'Advisor',
            'E': 'Elephant',
            'R': 'Chariot',
            'C': 'Cannon',
            'H': 'Horse',
            'P': 'Pawn'
        };
        return names[this.type];
    }

    setId(id) {
        this.id = id;
    }

    static getInitializePosition()
    {
        if(this.defaultPositions.length === 4)
        {
            return [
                {
                    color: BaseChessMan.RED_TYPE,
                    initPos: this.defaultPositions[0]
                },
                {
                    color: BaseChessMan.RED_TYPE,
                    initPos: this.defaultPositions[1]
                },
                {
                    color: BaseChessMan.BLACK_TYPE,
                    initPos: this.defaultPositions[2]
                },
                {
                    color: BaseChessMan.BLACK_TYPE,
                    initPos: this.defaultPositions[3]
                }
            ];
        }
        else if(this.defaultPositions.length === 2)
        {
            //King
            return [
                {
                    color: BaseChessMan.RED_TYPE,
                    initPos: this.defaultPositions[0]
                },
                {
                    color: BaseChessMan.BLACK_TYPE,
                    initPos: this.defaultPositions[1]
                }
            ]
        }

        return [];
    }

    baseCheckingAndReturnPositions(chessMen) {

        var positions = this.getAvailablePositionsToMove(chessMen);

        console.log(positions);
        var returnPositions = [];

        for (let i = 0; i < positions.length; i++) {

            if (!this.kingSafeCheck(positions[i], chessMen)) continue;

            let allyCheck = ChessService.getChessManByPosition(positions[i], chessMen);

            if (allyCheck && allyCheck.color === this.color) {
                continue;
            }

            returnPositions.push(positions[i]);
        }

        return returnPositions;
    }

    kingSafeCheck(positionWillMove, chessMen) {
        let chessMan = this;
        //crewtodo: implement
        return true;
    }
}

module.exports = BaseChessMan;