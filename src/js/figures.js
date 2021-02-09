import Figure from '/js/Figure.js'

class King extends Figure{

    constructor (color, x, y) {
        super('king', color, x, y)
    }

    // calcPossibleMoves() {
        
    // }
}

class Pawn extends Figure{

    constructor (color, x, y) {
        super('pawn', color, x, y)
    }

    calcPossibleMoves() {
        this.possibleMoves = [];
        this.possibleMoves.push({
            x: this.x,
            y: this.y + 1
        })
        this.possibleMoves.push({
            x: this.x,
            y: this.y + 2
        })
        
        return this.possibleMoves
        // check()
    }

}

export {King, Pawn}