const {Circle, Triangle, Square} = require('./shapes');

describe('Triangle', () => {  
    describe('render', () => {
        it('should return a string with the color corresponding to what is being set', () => {
            const shape = new Triangle('ABC','yellow', 'blue', 'triangle');
            expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="155" font-size="60" text-anchor="middle" fill="yellow">ABC</text></svg>');
    });
    })
})

describe('Circle', () => {  
    describe('render', () => {
        it('should return a string with the color corresponding to what is being set', () => {
            const shape = new Circle('ABC','yellow', 'blue', 'triangle');
            expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="yellow">ABC</text></svg>');
    });
    })
})

describe('Square', () => {  
    describe('render', () => {
        it('should return a string with the color corresponding to what is being set', () => {
            const shape = new Square('ABC','yellow', 'blue', 'triangle');
            expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="150" x="10" y="10" fill="blue" /><text x="110" y="110" font-size="60" text-anchor="middle" fill="yellow">ABC</text></svg>');
    });
    })
})