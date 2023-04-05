const { describe } = require('node:test');
const {Circle, Square, Triangle} = require('./shapes');

describe('Circle', () => {
    test('Rendered correctly' , () => {
        const shape = new Circle();
        let background = 'blue';
        shape.setColor(background)
      expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.background}"/>`);  
    });
}); 

describe('Square', () => {
    test('Rendered correctly' , () => {
        const shape = new Square();
        let background = 'blue';
        shape.setColor(background)
      expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${this.background}"/>`);  
    });
}); 

describe('Triangle', () => {
    test('Rendered correctly' , () => {
        const shape = new Triangle();
        let background = 'blue';
        shape.setColor(background)
      expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.background}"/>`);  
    });
}); 