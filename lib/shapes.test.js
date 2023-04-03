const { describe } = require('node:test');
const {Circle, Square, Triangle} = require('./shapes');

describe('Circle', () => {
    test('Rendered correctly' , () => {
        const shape = new Circle();
        let color = 'blue';
        shape.setColor(color)
      expect(shape.render()).toEqual(`<circle cx=“50%” cy=“50%” r=“100” height=“100%” width=“100%” fill=“${this.color}“/>`);  
    });
}); 