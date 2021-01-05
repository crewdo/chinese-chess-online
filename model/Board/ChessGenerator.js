import Cannon from '../Chess/Cannon';
import King from '../Chess/King';
import Pawn from '../Chess/Pawn';
import Advisor from '../Chess/Advisor';

class ChessGenerator {

    constructor() {
        this.maxX = 9;
        this.maxY = 10;
    }

    generate()
    {
        return this.generatePawns() + this.generateCannons() + this.generateKings() + this.generateAdvisors();
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