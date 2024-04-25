// Packages
import stripIndent from 'strip-indent';
import badges from 'badge-maker';

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else {
    let markdownLink = `![Static Badge](https://img.shields.io/badge/${license}-8A2BE2)`

    return (markdownLink)
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  } else {
    return('link')
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else {

    return('section')
  }
}

// TODO: Create a function to generate markdown for README
export default function generateMarkdown(data) {

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
  } = data;

  const content = stripIndent(`
    # ${title}

    ## Screenshot:

    ![Image alt text](./assets/images/<screen-shot-title>)

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

   
    ${renderLicenseLink(license)}
    ${renderLicenseSection(license)}

    ${license}

    ## Badges

    ${renderLicenseBadge(license)}

    ## Contribute

    ${contribute}

    ## Tests

    ${tests}

    ## Questions

    Github Profile: https://github.com/${githubUsername}

    Email: ${email}

    `).trim();

  return content;
}