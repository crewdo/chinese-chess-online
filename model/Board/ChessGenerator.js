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

        let propertiesArray = Cannon.getInitializePosition()

        for (let i = 0; i < propertiesArray.length; i++) {
            rs.push(new Cannon(propertiesArray[i]))
        }

        return rs;
    }

    generateHorses() {

        let propertiesArray = Horse.getInitializePosition()

        for (let i = 0; i < propertiesArray.length; i++) {
            rs.push(new Horse(propertiesArray[i]))
        }

        return rs;
    }

    generateElephants() {

        let propertiesArray = Elephant.getInitializePosition()

        for (let i = 0; i < propertiesArray.length; i++) {
            rs.push(new Elephant(propertiesArray[i]))
        }

        return rs;
    }

    generateChariots() {

        let propertiesArray = Chariot.getInitializePosition();

        for (let i = 0; i < propertiesArray.length; i++) {
            rs.push(new Chariot(propertiesArray[i]))
        }

        return rs;
    }

    generateKings() {

        let propertiesArray = King.getInitializePosition()

        for (let i = 0; i < propertiesArray.length; i++) {
            rs.push(new King(propertiesArray[i]))
        }

        return rs;
    }

    generateAdvisors() {

        let propertiesArray = Advisor.getInitializePosition()

        for (let i = 0; i < propertiesArray.length; i++) {
            rs.push(new Advisor(propertiesArray[i]))
        }

        return rs;
    }
}

module.exports = ChessGenerator;