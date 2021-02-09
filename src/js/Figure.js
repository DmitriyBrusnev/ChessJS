export default class Figure {

    constructor(name, color, x, y) {
        this.name = name
        this.color = color
        this.x = x
        this.y = y
        this.possibleMoves = this.calcPossibleMoves()
        this.image = `/img/${this.name}-${this.color}.svg`
    }

    calcPossibleMoves() {
        return [];
    }

    // setPosition(x, y) {
    //     this.x = x
    //     this.y = y
    //     return this
    // }

    draw() {
        const img = document.createElement('img')
        img.setAttribute('src', this.image)
        img.classList.add('figure-img')
        img.dataset.indexX = this.x
        img.dataset.indexY = this.y
        

        const square = document.querySelector(`.square[data-index="${this.x}-${this.y}"]`)
        square.innerHTML = ''
        square.append(img)
        return [this, square];
        // console.log(32)
    }

    drawPossible(x, y) {
        
    }

    clear() {
        const square = document.querySelector(`.square[data-index="${this.x}-${this.y}"]`)
        square.innerHTML = ''
    }

    drawIn(x,y) {
        // this.clear()
        this.setPosition(x,y)
        this.draw()
    }

    canMoveOn(x, y) {
        if (x === this.x && y === this.y) {
        //    console.log(this.possibleMoves)
            this.possibleMoves.forEach(item => {
                if (item.x === x && item.y === y) {}
            })
            return false;
        }
        return true
    }

    // move(cb) {

    // }

    
}