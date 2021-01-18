class Player {
    constructor({id, colorKeeping, name = 'UnknownPlayer'}) {
        this.colorKeeping = colorKeeping;
        this.id = id;
        this.name = name;
    }
}

module.exports = Player;