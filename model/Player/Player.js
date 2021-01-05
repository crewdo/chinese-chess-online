class Player {
    constructor({id, colorHolder, name = 'UnknownPlayer'}) {
        this.colorHolder = colorHolder;
        this.id = id;
        this.name = name;
    }
}

module.exports = Player;