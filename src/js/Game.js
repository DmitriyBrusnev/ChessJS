import Board from '/js/Board.js'
// import Figures from '/js/Figures.js'
// import {King, Pawn} from '/js/figures.js'

export default class Game {

    constructor() {
        this.board = new Board()
    }

    draw() {
        const game = document.createElement('div')
        game.classList.add('game')



        // this.board.drawAllFigures()
        // console.log(this.board.boxes)
        document.querySelector('.container').append(game)   
  
    }
    
}
