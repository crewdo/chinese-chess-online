class Visitor {
    constructor({id, name = 'UnknownVisitor'}) {
        this.id = id;
        this.name = name;
    }
}

module.exports = Visitor;