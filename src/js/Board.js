import { King, Pawn } from "./figures.js"
import Spot from "./Spot.js"

export default class Board {

    constructor (size = 8) {
        this.size = 8
        this.boxes = []

        for (let i = 0; i < this.size; i++) {
            this.boxes[i] = []
            for (let j = 0; j < this.size; j++) {
                this.boxes[i][j] = new Spot(i, j)
            }
        }
        this.draw();
        const fig = this.addFigure(new Pawn('white', 1, 2))  
        this.drawPossibleMoves()
    }

    draw() {

        let currenColor = 'white'
        let rowStartColor = currenColor

        function changeColor(color) {
            return currenColor === 'white' ? 'black' : 'white'
        }

        const board = document.createElement('div');
        board.classList.add('board')

        for (let i = 0; i < this.size; i++) {
            currenColor = rowStartColor
            for (let j = 0; j < this.size; j++) {
                const square = document.createElement('div')
                square.classList.add('square')
                square.dataset.index = `${j}-${i}`
                square.classList.add(currenColor)
                square.style.width = 100 / this.size + '%'
                square.style.height = 100 / this.size + '%'
                board.append(square);
                currenColor = changeColor(currenColor)
            }
            rowStartColor = changeColor(rowStartColor)

        }
        document.querySelector('.container').append(board)

        this.drawAllFigures()
    }

    addFigure(figure) {
        console.log(figure)
        // this
        this.boxes[figure.x][figure.y].setFigure(figure); 
    }

    drawPossibleMoves(figure) {

    }

    drawAllFigures() {
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if (this.boxes[i][j].value) this.boxes[i][j].value.draw()
            }
        }
    }

    clearOneFigure(x, y) {
        if (this.boxes[x][y].value) {
            console.log(this.boxes[x][y])
            const removableFigure = Object.create( this.boxes[x][y].value)
            this.boxes[x][y].value.clear()
            this.boxes[x][y].value = null
            return removableFigure
        }
    }

}