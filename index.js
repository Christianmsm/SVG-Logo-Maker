//Included packages needed
const fs = require('fs')
const inquirer = require('inquirer')
const { Circle, Square, Triangle } = require('./lib/shapes.js')
const generateLogo = require('./lib/generate.js')

//An object array for colors and values. this is based on resources provided by Ryan Spath
const ColorKeyWords = [
    { name: 'black', value: '#000000' },
    { name: 'white', value: '#FFFFFF' },
    { name: 'blue', value: '#000DFF' },
    { name: 'red', value: '#FF0000' },
    { name: 'green', value: '#0BD600' },
    { name: 'yellow', value: '#E1E100' },
    { name: 'orange', value: '#E18700' },
    { name: 'magenta', value: '#E10092' },
    { name: 'purple', value: '#9513DC' },
    { name: 'custom', value: 'custom' },
]
//An array of questions for user input
const questions = [
    {
        type: 'list',
        name: 'logoshape',
        message: 'What kind of shape would you like your logo to be?',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'list',
        name: 'background',
        message: 'What color would you like your logo background to be?',
        choices: ColorKeyWords,
    },
    {
        type: 'input',
        name: 'backgroundHexCode',
        message: 'Please enter your custom hex code background color.',
        when: (answers) => {
            return answers.background === 'custom'
        },
        validate: function (input) {
            const hex = /^#[0-9a-f]{6}$/ig
            if (input.match(hex) === null) {
                return 'Please enter a valid hex code'
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to 3 characters you want to include in your logo.',
        validate: (value) => {
            if (value.length > 3) {
                return 'Please a max of 3 characters.'
            } else if (value) {
                return true
            } else {
                return 'Please enter a max of 3 characters for your logo.'
            }
        }
    },
    {
        type: 'list',
        name: 'textColor',
        message: 'What color would you like your text to be?',
        choices: ColorKeyWords,
    },
    {
        type: 'input',
        name: 'textHexCode',
        message: 'Please enter your custom hex code background color.',
        when: (answers) => {
            return answers.background === 'custom'
        },
        validate: function (input) {
            const hex = /^#[0-9a-f]{6}$/ig
            if (input.match(hex) === null) {
                return 'Please enter a valid hex code'
            }
            return true;
        }
    },
]

// Function to create the file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('Successfully generated your SVG logo!')
    });
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        let initShape

        if (data.background === 'custom') {
            data.background = data.backgroundHexCode
        }
        if (data.shape === 'circle') {
            initShape = new Circle(data.background)
        }
        else if (data.shape === 'square') {
            initShape = new Square(data.background)
        }
        else {
            initShape = new Triangle(data.background)
        }
        const logo = initShape.render()
        const svg = generateLogo(logo, data.background, data.text, data.textColor);
        writeToFile('logo.svg', svg);
    });
}

init();
