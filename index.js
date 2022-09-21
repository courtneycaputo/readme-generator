// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

console.log("Answer the following questions to generate a high quality, professional README")

// TODO: Create an array of questions for user input
const questions = []; // provided code

inquirer.createPromptModule([
    // Name of Project
    {
        type: 'input',
        message: 'What is the title of the project?';
        name: 'title',
    },

    // Description of Project
    {
        type: 'input',
        message: 'Write project description:';
        name: 'description',
    },

    // Prompt for table of contents
    {
        type: 'checkbox',
        message: 'Do you want a table of contents?';
        name: 'tableOfContents',
        choices: ['yes', 'no'],
    },

     // Installation
     {
        type: 'input',
        message: 'Write project description:';
        name: 'installation',
    },

     // Usage
     {
        type: 'input',
        message: 'Write project description:';
        name: 'usage',
    },

     // License
     {
        type: 'input',
        message: 'Write project description:';
        name: 'license',
    },

     // Contributing
     {
        type: 'input',
        message: 'Write project description:';
        name: 'contributing',
    },

      // Test
      {
        type: 'input',
        message: 'Write project description:';
        name: 'tests',
    },

      // Questions
      {
        type: 'input',
        message: 'Write project description:';
        name: 'quest',
    },

    
])

// from class exercise to create a JSON file
// .then((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );

//   });

// Create file as text file - see day 1 exercise 14-stu_appendFile
// fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
//   // TODO: Describe how this ternary operator works
//   err ? console.error(err) : console.log('Commit logged!')
// );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }

    console.log("README file successfully created!");
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
} ;

// Function call to initialize app
init(); 
