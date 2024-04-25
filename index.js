// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    type: "input",
    message: "What is the title of your project:"
  },
  { 
    name: "description",
    type: "input",
    message: "Please provide a description of your project (what, why, and how):"
  },
  {
    name: "tableOfContents",
    type: "input",
    message: "Please provide a table of contents for your project:"
  },
  {
    name: "installation",
    type: "input",
    message: "Please provide installation instructions:"
  },
  {
    name: "usage",
    type: "input",
    message: "Please provide examples for usage:"
  },
  {
    name: "credits",
    type: "input",
    message: "Please provide credits:"
  },
  {
    name: "license",
    type: "input",
    message: "Please provide a license:"
  },
  {
    name: "contribute",
    type: "input",
    message: "Please provide instructions on how to contribute:"
  },
  {
    name: "tests",
    type: "input",
    message: "Please provide tests:"
  },
  {
    name: "githubUsername",
    type: "input",
    message: "Please provide a Github Username:"
  },
  {
    name: "email",
    type: "input",
    message: "Please provide an email:"
  }
]

// TODO: Create a function to write README file
function writeToFile(fileName, questions) {
  inquirer
    .prompt(questions)
    .then((answers) => {
      
      let readmeContents = generateMarkdown(answers);

      fs.writeFile(fileName, readmeContents, (err) => {
        err ? console.error(err) : console.log('README.md created!');})
      })
}

// TODO: Create a function to initialize app
function init() {
  writeToFile('README.md', questions)
}

// Function call to initialize app
init();