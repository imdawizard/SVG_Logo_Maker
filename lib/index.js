const fs = require('fs');
const inquirer = require('inquirer');

function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo:',
      validate: function (input) {
        if (input.length > 3) {
          return 'Please enter up to three characters.';
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape for the logo:',
      choices: ['circle', 'triangle', 'rectangle'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hexadecimal number):',
    },
  ]);
}

function generateLogo(answers) {
  const { text, textColor, shape, shapeColor } = answers;

  let shapeSvg = '';
  if (shape === 'circle') {
    shapeSvg = `<circle cx="150" cy="100" r="100" fill="${shapeColor}" />`;
  } else if (shape === 'triangle') {
    shapeSvg = `<polygon points="150,0 0,200 300,200" cx='150' cy='100' fill="${shapeColor}" />`;
  } else if (shape === 'rectangle') {
    shapeSvg = `<rect width="300" height="200" fill="${shapeColor}" />`;
  }

  const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${shapeSvg}
      <text x="150" y="100" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="48">${text}</text>
    </svg>
  `;


  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
}

async function init() {
  console.log('Welcome to the Logo Generator!\n');

  const answers = await promptUser();

  generateLogo(answers);
}

init();