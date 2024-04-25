// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import stripIndent from 'strip-indent';

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
    message: "Please provide instructions how to contribute:"
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
//  "Title", "Description", "Table of Contents", "Installation", "Usage", "License", "Contributing", "Tests", "Github Username", "Email Address";

// TODO: Create a function to write README file
function writeToFile(fileName, questions) {
  inquirer
    .prompt(questions)
    .then((answers) => {
      let { title, 
        description, 
        tableOfContents,
        installation,
        usage,
        credits,
        license,
        contribute,
        tests,
        githubUsername,
        email
      } = answers;
      
      const content = stripIndent(`
      # ${title}

      ## Screenshot:

      ![Image alt text](<link>)

      ## Link to deployed application:

      https://${githubUsername}.github.io/${title}

      ## Description:

      ${description}

      ## Table of Contents (Optional):

      ${tableOfContents}

      - [Installation](#installation)
      - [Usage](#usage)
      - [Credits](#credits)
      - [License](#license)

      ## Installation

      ${installation}

      ## Usage

      ${usage}

      ## Credits

      ${credits}

      ## License 

      ${license}

      ## Contribute

      ${contribute}

      ## Tests

      ${tests}

      ## Questions

      Github Profile: https://github.com/${githubUsername}

      Email: ${email}

      `).trim();

      fs.writeFile(fileName,content, (err) => {
        err ? console.error(err) : console.log('Message Logged!');})
      })
}

// TODO: Create a function to initialize app
function init() {
  writeToFile('README.md', questions)
}

// Function call to initialize app
init();