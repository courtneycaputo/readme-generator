// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = ({title, description, installation, usage, license, contributing, tests, github, email}) =>
    `
# ${title}
    
[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
    
## Description: <a name="description"></a>
${description}

## Installation Instructions: <a name="installation"></a>
${installation}

## Usage Information: <a name="usage"></a>
${usage}

## License: <a name="license"></a>
This project is licensed under the ${license} license.

## Contribution Guidelines: <a name="contributing"></a>
${contributing}

## Test Instructions: <a name="tests"></a>
${tests}

## Questions: <a name="questions"></a>
If you have questions regarding this project, you can contact me directly at:
* Github: <a href="https://github.com/${github}">${github}</a>
* Email: <a href="mailto:${email}">${email}</a>

    
`;

console.log("Answer the following questions to generate a high quality, professional README")

// Questions the user will answer to populate data into README
inquirer.prompt([
    // Name of Project
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'title',
    },

    // Description of Project
    {
        type: 'input',
        message: 'Write project description:',
        name: 'description',
    },

    // Installation
    {
        type: 'input',
        message: 'Write instructions for installation:',
        name: 'installation',
    },

    // Usage
    {
        type: 'input',
        message: 'Write notes for usage:',
        name: 'usage',
    },

    // License
    {
        type: 'checkbox',
        message: 'Select which license your project will have:',
        name: 'license',
        choices: ["MIT", "Apache_2.0","BSD_3--Clause","EPL"]
    },

    // Contributing
    {
        type: 'input',
        message: 'How can users contribute to this project?',
        name: 'contributing',
    },

    // Test
    {
        type: 'input',
        message: 'How does a user test this project?',
        name: 'tests',
    },

    // Github
    {
        type: 'input',
        message: 'Enter your Github username:',
        name: 'github',
    },

    // email
    {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email',
    },

    
])







.then((answers) => {
    const readMeContent = generateMarkdown(answers);
    fs.writeFile('sampleREADME.md', readMeContent, (err) =>
    err ? console.log(err) : console.log('README file successfully created!')
    );
});
