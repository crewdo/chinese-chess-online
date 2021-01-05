class Player {
    constructor({id, chessMen, name = 'UnknownPlayer'}) {
        this.chessMen = chessMen;
        this.id = id;
        this.name = name;
    }
}

module.exports = Player;