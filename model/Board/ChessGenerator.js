import Cannon from '../Chess/Cannon';
import King from '../Chess/King';
import Pawn from '../Chess/Pawn';
import Advisor from '../Chess/Advisor';
import Chariot from '../Chess/Chariot';
import Elephant from '../Chess/Elephant';
import Horse from '../Chess/Horse';

class ChessGenerator {

    constructor() {
        this.maxX = 9;
        this.maxY = 10;
    }

    generate()
    {
        return this.generatePawns() + this.generateCannons()
             + this.generateKings() + this.generateAdvisors()
             + this.generateChariots() + this.generateElephants()
             + this.generateHorses();

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