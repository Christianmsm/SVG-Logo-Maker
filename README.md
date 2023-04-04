# SVG-Logo-Maker
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

 ## Table of Contents
 - [Project Description](#Description)
 - [Usage](#Usage)
 - [Installation](#Installation)
 - [Contribution](#Contribution)
 - [GitHub](#GitHub)
 - [Email](#Email)
 - [License](#License)
  
## Description
This is an application that creates a logo after going through the user prompts.
What I did first was made an object array of the specific colors I wanted to use for the application. This was based on resources given from Ryan Spath. 

I then went ahead and created an array for all of the questions the user will ansewer for the application. With this array I also used validation methods to confirm the users input, this was especially useful for the custom hex code option that is given to the user if they want a specific hexedecimal value. The validation for this checks to see if the input is a valid hex code value, and if it is not it prompts the user to input a correct value.

Once that was completed I worked on the function to write the file and initialize the application. This was fairly similar to how the previous challenge was.

I then created all of my classes for the shapes, starting with the parent class 'Shape' and specificing the 3 different children of that parent class, 'Circle, Square, Triangle.'

Then I created the generateLogo function so once the prompts were answered and the application was initialized the function would generate the html and input the values specified by the user.

## Usage

## Technologies
Node.js, JavaScript
## Installation

## Contribution

## GitHub
Christianmsm
## Email
hello@itschristiansmith.com
## License
Licensed with: https://opensource.org/license/mit/

 