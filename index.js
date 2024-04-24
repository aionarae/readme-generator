// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const stripIndent = require('strip-indent');

// TODO: Create an array of questions for user input

const questions = [
  {
    name: "title",
    type: "input",
    message: "What is the title of your project?"
  },
  { 
    name: "description",
    type: "input",
    message: "Please provide a description of your project."
  },
  {
    name: "table_of_contents",
    type: "input",
    message: "Please provide a table of contents for your project."
  }
]
//  "Title", "Description", "Table of Contents", "Installation", "Usage", "License", "Contributing", "Tests", "Github Username", "Email Address";


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


inquirer
  .prompt(questions)
  .then((answers) => {
    let { title, description, table_of_contents } = answers;
    
    content = String.raw`# ${title}
    ## Description:
    ${description}
    ## Table of Contents (Optional):
    ${table_of_contents}
    `.trim();
    console.log(answers)
    fs.writeFile('README.md',content, (err) => {
      err ? console.error(err) : console.log('Message Logged!');})
    })


// writeToFile('README.md',answers)