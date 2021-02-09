export default class Spot {

    // coors = []

    constructor(x, y) {
        this.x = x
        this.y = y
        this.value = null 
        // this.color = color;
        return this
    }

    setFigure(figure) {
        this.value = figure
        // figure.clear()
        console.log(figure.draw()) 
    }

}