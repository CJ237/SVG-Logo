class Shapes {
    constructor(textColor, shapeColor) {
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
};

class Circle extends Shapes{
    constructor(letter, textColor, shapeColor, shapes){
        super(textColor, shapeColor);
        this.letter = letter;
        this.shapes = shapes;
        
    
    }
    render(){
        const svg =`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.letter}</text></svg>`;
        return svg;
    }
};

class Triangle extends Shapes{
    constructor(letter,textColor, shapeColor, shapes){
        super(textColor, shapeColor);
        this.letter = letter;
        this.shapes = shapes;
        
    }
    render() {
        const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" /><text x="150" y="155" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.letter}</text></svg>`;
        return svg;
        
    }
};

class Square extends Shapes{
    constructor(letter, textColor, shapeColor, shapes){
        super(textColor, shapeColor);
        this.letter = letter;
        this.shapes = shapes;
    }
    render(){
        const svg =`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="150" x="10" y="10" fill="${this.shapeColor}" /><text x="110" y="110" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.letter}</text></svg>`;
        return svg;
    }
};

module.exports = {Circle, Triangle, Square};






