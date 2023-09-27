//Shapes generic class
class Shapes {
    constructor () {
        this.color = "";
    }
    shapeColors (color) {
        this.color = color;
    }
}

//Circles class with an extension of Shapes to inherit this.color
class Circle extends Shapes {
    render () {
        return `<circle cx="150" cy="100" r="80" fill= "${this.color}" />`;
    }
}

//Square class with an extension of Shapes to inherit this.color
class Square extends Shapes {
    render () {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
    }
}

//Triangle class with an extension of Shapes to inherit this.color
class Triangle extends Shapes {
    render () {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

module.exports = {Circle, Triangle, Square};