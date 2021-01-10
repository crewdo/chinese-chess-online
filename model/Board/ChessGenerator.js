const Cannon =  require('../Chess/Cannon');
const King =  require('../Chess/King');
const Pawn =  require('../Chess/Pawn');
const Advisor =  require('../Chess/Advisor');
const Chariot =  require('../Chess/Chariot');
const Elephant =  require('../Chess/Elephant');
const Horse =  require('../Chess/Horse');

class ChessGenerator {

    static MAX_X = 8;
    static MAX_Y = 9;

    constructor() {

    }

    static generate()
    {
        let chessMen =  this.generatePawns() + this.generateCannons()
             + this.generateKings() + this.generateAdvisors()
             + this.generateChariots() + this.generateElephants()
             + this.generateHorses();

        for(let i = 0; i < chessMen.length; i++)
        {
            chessMen[i].setId(i);
        }

        return chessMen;
    }

    generatePawns() {
        var rs = [];
        for (let i = 0; i < 9; i = i + 2) {
            rs.push(new Pawn({color: Pawn.RED_TYPE, initPos: {x: i, y: 3}}));
            rs.push(new Pawn({color: Pawn.BLACK_TYPE, initPos: {x: i, y: 6}}))
        }

        return rs;
    }

    generateCannons() {

        let properties = Cannon.getInitializePosition()

        for (let i = 0; i < properties.length; i++) {
            rs.push(new Cannon(properties[i]))
        }

        return rs;
    }

    generateHorses() {

        let properties = Horse.getInitializePosition()

        for (let i = 0; i < properties.length; i++) {
            rs.push(new Horse(properties[i]))
        }

        return rs;
    }

    generateElephants() {

        let properties = Elephant.getInitializePosition()

        for (let i = 0; i < properties.length; i++) {
            rs.push(new Elephant(properties[i]))
        }

        return rs;
    }

    generateChariots() {

        let properties = Chariot.getInitializePosition();

        for (let i = 0; i < properties.length; i++) {
            rs.push(new Chariot(properties[i]))
        }

        return rs;
    }

    generateKings() {

        let properties = King.getInitializePosition()

        for (let i = 0; i < properties.length; i++) {
            rs.push(new King(properties[i]))
        }

        return rs;
    }

    generateAdvisors() {

        let properties = Advisor.getInitializePosition()

        for (let i = 0; i < properties.length; i++) {
            rs.push(new Advisor(properties[i]))
        }

        return rs;
    }
}

module.exports = ChessGenerator;