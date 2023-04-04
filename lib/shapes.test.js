const { describe, default: test } = require('node:test');
const {Circle, Square, Triangle} = require('./shapes.js');

describe('Circle', () => {
    test('Rendered black correctly' , () => {
        const shape = new Circle();
        let background = 'black';
        shape.setColor(background);
      expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.background}"/>`);  
    });
    test('Rendered white correctly' , () => {
        const shape = new Circle();
        let background = 'white';
        shape.setColor(background);
      expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.background}"/>`);  
    });
    test('Rendered blue correctly' , () => {
        const shape = new Circle();
        let background = 'blue';
        shape.setColor(background);
      expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.background}"/>`);  
    });
    test('Rendered red correctly' , () => {
        const shape = new Circle();
        let background = 'red';
        shape.setColor(background);
      expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.background}"/>`);  
    });
    test('Rendered green correctly' , () => {
        const shape = new Circle();
        let background = 'green';
        shape.setColor(background);
      expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.background}"/>`);  
    });
    test('Rendered yellow correctly' , () => {
        const shape = new Circle();
        let background = 'yellow';
        shape.setColor(background);
      expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.background}"/>`);  
    });
    test('Rendered orange correctly' , () => {
        const shape = new Circle();
        let background = 'orange';
        shape.setColor(background);
      expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.background}"/>`);  
    });
    test('Rendered magenta correctly' , () => {
        const shape = new Circle();
        let background = 'magenta';
        shape.setColor(background);
      expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.background}"/>`);  
    });
    test('Rendered purple correctly' , () => {
        const shape = new Circle();
        let background = 'purple';
        shape.setColor(background);
      expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.background}"/>`);  
    });
}); 

describe('Square', () => {
    test('Rendered black correctly', () => {
        const shape = new Square();
        let background = 'black';
        shape.setColor(background);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${this.background}"/>`);
    });
    test('Rendered white correctly', () => {
        const shape = new Square();
        let background = 'white';
        shape.setColor(background);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${this.background}"/>`);
    });
    test('Rendered blue correctly', () => {
        const shape = new Square();
        let background = 'blue';
        shape.setColor(background);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${this.background}"/>`);
    });
    test('Rendered red correctly', () => {
        const shape = new Square();
        let background = 'red';
        shape.setColor(background);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${this.background}"/>`);
    });
    test('Rendered green correctly', () => {
        const shape = new Square();
        let background = 'green';
        shape.setColor(background);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${this.background}"/>`);
    });
    test('Rendered yellow correctly', () => {
        const shape = new Square();
        let background = 'yellow';
        shape.setColor(background);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${this.background}"/>`);
    });
    test('Rendered orange correctly', () => {
        const shape = new Square();
        let background = 'orange';
        shape.setColor(background);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${this.background}"/>`);
    });
    test('Rendered magenta correctly', () => {
        const shape = new Square();
        let background = 'magenta';
        shape.setColor(background);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${this.background}"/>`);
    });
    test('Rendered purple correctly', () => {
        const shape = new Square();
        let background = 'purple';
        shape.setColor(background);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${this.background}"/>`);
    });
});

describe('Triangle', () => {
    test('Rendered black correctly', () => {
        const shape = new Triangle();
        let background = 'black';
        shape.setColor(background);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.background}"/>`);
    });
    test('Rendered white correctly', () => {
        const shape = new Triangle();
        let background = 'white';
        shape.setColor(background);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.background}"/>`);
    });
    test('Rendered blue correctly', () => {
        const shape = new Triangle();
        let background = 'blue';
        shape.setColor(background);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.background}"/>`);
    });
    test('Rendered red correctly', () => {
        const shape = new Triangle();
        let background = 'red';
        shape.setColor(background);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.background}"/>`);
    });
    test('Rendered green correctly', () => {
        const shape = new Triangle();
        let background = 'green';
        shape.setColor(background);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.background}"/>`);
    });
    test('Rendered yellow correctly', () => {
        const shape = new Triangle();
        let background = 'yellow';
        shape.setColor(background);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.background}"/>`);
    });
    test('Rendered orange correctly', () => {
        const shape = new Triangle();
        let background = 'orange';
        shape.setColor(background);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.background}"/>`);
    });
    test('Rendered magenta correctly', () => {
        const shape = new Triangle();
        let background = 'magenta';
        shape.setColor(background);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.background}"/>`);
    });
    test('Rendered purple correctly', () => {
        const shape = new Triangle();
        let background = 'purple';
        shape.setColor(background);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.background}"/>`);
    });
});