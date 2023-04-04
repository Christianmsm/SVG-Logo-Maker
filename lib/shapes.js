//The parent class for the Circle, Square, & Triangle classes
class Shape {
    constructor (background) {
        this.background = background;
    }
    setColor() {
        return this.background;
    }
}

//Classes for each of the children of parent class 'Shape'
class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.background}"/>`
    }
}

class Square extends Shape {
    render () {
        return `<rect x="50" height="200" width="200" fill="${this.background}"/>`
    }
}

class Triangle extends Shape {
    render () {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.background}"/>`
    }
}

//Exports the 3 different classes
module.exports = { Circle, Square, Triangle };