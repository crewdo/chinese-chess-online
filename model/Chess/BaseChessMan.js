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


    move(newPosition, chessMen) {
        if(this.getAvailablePositionsToMoveOrKill(chessMen).some((position) => position.x === newPosition.x && position.y === newPosition.y)) {

            if(ChessService.getChessManByPosition(newPosition, chessMen))
            {
                //process killing
            }

            this.position = newPosition;

            return true;
        }

        return false;

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

    static getInitializePosition() {
        if (this.defaultPositions.length === 4) {
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
        } else if (this.defaultPositions.length === 2) {
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

        var positions = this.getAvailablePositionsToMoveOrKill(chessMen);

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

    goStraight(chessMen, directlyKill = false) {
        let positions = [];
        let x = this.position.x;
        let y = this.position.y;

        for (var x_left = x - 1; x_left >= 0; x_left--) {
            if (!ChessService.getChessManByPosition({x: x_left, y: y}, chessMen)) {
                positions.push({x: x_left, y: y});
            } else {
                if (directlyKill) {
                    //Checking killable position for Chariot
                    positions.push({x: x_left, y: y});
                } else {
                    //Checking killable position for Cannon
                    for (var a = x_left - 1; a >= 0; a--) {
                        if (ChessService.getChessManByPosition({x: a, y: y}, chessMen)) {
                            positions.push({x: a, y: y});
                            break;
                        }
                    }
                }
                break;
            }
        }

        for (let x_right = x + 1; x_right <= ChessService.BOARD_MAX_X; x_right++) {
            if (!ChessService.getChessManByPosition({x: x_right, y: y}, chessMen)) {
                positions.push({x: x_right, y: y});
            } else {
                if (directlyKill) {
                    //Checking killable position for Chariot
                    positions.push({x: x_right, y: y});
                } else {
                    //Checking killable position for Cannon
                    for (let a = x_right + 1; a <= ChessService.BOARD_MAX_X; a++) {
                        if (ChessService.getChessManByPosition({x: a, y: y}, chessMen)) {
                            positions.push({x: a, y: y});
                            break;
                        }
                    }
                }
                break;
            }
        }

        //For Y
        for (let y_down = y - 1; y_down >= 0; y_down--) {
            if (!ChessService.getChessManByPosition({x: x, y: y_down}, chessMen)) {
                positions.push({x: x, y: y_down});
            } else {
                if (directlyKill) {
                    positions.push({x: x, y: y_down});
                } else {
                    for (let a = y_down - 1; a >= 0; a--) {
                        if (ChessService.getChessManByPosition({x: x, y: a}, chessMen)) {
                            positions.push({x: x, y: a});
                            break;
                        }
                    }
                }
                break;
            }
        }

        for (let y_up = y + 1; y_up <= ChessService.BOARD_MAX_Y; y_up++) {
            if (!ChessService.getChessManByPosition({x: x, y: y_up}, chessMen)) {
                positions.push({x: x, y: y_up});
            } else {
                if (directlyKill) {
                    positions.push({x: x, y: y_up});
                } else {
                    for (let a = y_up + 1; a <= ChessService.BOARD_MAX_Y; a++) {
                        if (ChessService.getChessManByPosition({x: x, y: a}, chessMen)) {
                            positions.push({x: x, y: a});
                            break;
                        }
                    }
                }
                break;
            }
        }
        return positions
    }

}

module.exports = BaseChessMan;