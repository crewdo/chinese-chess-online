const Cannon = require('../Chess/Cannon');
const King = require('../Chess/King');
const Pawn = require('../Chess/Pawn');
const Advisor = require('../Chess/Advisor');
const Chariot = require('../Chess/Chariot');
const Elephant = require('../Chess/Elephant');
const Horse = require('../Chess/Horse');
const BaseChessMan = require('../Chess/BaseChessMan');

class ChessGenerator {

    constructor() {

    }

    static get MAX_X() {
        return 8;
    }

    static get MAX_Y(){
        return 9;
    }

    static generate() {
        let firstMen = this.generateCannons();
        var chessMen =  firstMen.concat(this.generatePawns(), this.generateKings(), this.generateAdvisors(), this.generateChariots(),
            this.generateElephants(), this.generateHorses());

        for (let i = 0; i < chessMen.length; i++) {
            chessMen[i].setId(i);
        }

        return chessMen;
    }

    static generatePawns() {
        var rs = [];
        for (let i = 0; i < 9; i = i + 2) {
            rs.push(new Pawn({color: BaseChessMan.RED_TYPE, initPos: {x: i, y: 3}}));
            rs.push(new Pawn({color: BaseChessMan.BLACK_TYPE, initPos: {x: i, y: 6}}))
        }

        return rs;
    }

    static generateCannons() {
        var rs = [];
        let properties = Cannon.getInitializePosition()
        for (let i = 0; i < properties.length; i++) {
            rs.push(new Cannon(properties[i]))
        }

        return rs;
    }

    static generateHorses() {
        var rs = [];

        let properties = Horse.getInitializePosition()

        for (let i = 0; i < properties.length; i++) {
            rs.push(new Horse(properties[i]))
        }

        return rs;
    }

    static generateElephants() {
        var rs = [];

        let properties = Elephant.getInitializePosition()

        for (let i = 0; i < properties.length; i++) {
            rs.push(new Elephant(properties[i]))
        }

        return rs;
    }

    static generateChariots() {
        var rs = [];

        let properties = Chariot.getInitializePosition();

        for (let i = 0; i < properties.length; i++) {
            rs.push(new Chariot(properties[i]))
        }

        return rs;
    }

    static generateKings() {
        var rs = [];

        let properties = King.getInitializePosition()

        for (let i = 0; i < properties.length; i++) {
            rs.push(new King(properties[i]))
        }

        return rs;
    }

    static generateAdvisors() {
        var rs = [];

        let properties = Advisor.getInitializePosition()

        for (let i = 0; i < properties.length; i++) {
            rs.push(new Advisor(properties[i]))
        }

        return rs;
    }
}

module.exports = ChessGenerator;