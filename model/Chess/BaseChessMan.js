class BaseChessMan {
    RED_TYPE = 'r';
    BLACK_TYPE = 'b';

    constructor({color, initPos}) {
        this.color = color;
        this.code = -1;
        //position as {x , y}
        this.position = initPos;
        this.name = this.getName();

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

    getInitializePosition()
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
}

module.exports = BaseChessMan;