const BaseChessMan = require( './BaseChessMan');

class Advisor extends BaseChessMan {

    constructor({color, initPos}) {
        super({color, initPos});
        this.type = 'A';
    }

    static get defaultPositions()
    {
        return [{x: 3, y: 0}, {x: 5, y: 0}, {x: 3, y: 9}, {x: 5, y: 9}];
    }

    getAvailablePositionsToMoveOrKill() {
        let positions = [];
        let x = this.position.x;
        let y = this.position.y;

        //if Advisor's standing in PALACE CENTER
        if(x === 4 && (y === 1 || y === 8))
        {
            positions.push({x : x + 1, y: y - 1}, {x : x + 1, y: y + 1}, {x : x - 1, y: y + 1}, {x : x - 1, y: y - 1});
        }

        //Only palace center is available
        else if(this.color === BaseChessMan.RED_TYPE)
        {
            positions.push({x : 4, y: 1});
        }
        else {
            positions.push({x : 4, y: 8});
        }

        return positions;
    }
}

module.exports = Advisor;