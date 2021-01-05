class BaseChessMan {

    constructor({type, side, initPos}) {
        this.type = type;
        this.side = side;
        this.position = initPos;

    }

    move({x, y}){}

    getName(){}

}

module.exports = BaseChessMan;