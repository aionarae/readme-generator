// Packages
import stripIndent from 'strip-indent';
//import badges from 'badge-maker';

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else {
    const dashLicense = license.replace(/\s/g, "-");
    let markdownLink = stripIndent(`
  ## Badges:

  ![Static Badge](https://img.shields.io/badge/${dashLicense}-8A2BE2)`).trim()
    return (markdownLink)
    
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  let licenseLink;

  switch(license){
    case 'MIT License':
      licenseLink = 'https://choosealicense.com/licenses/mit/';
      break;
    case 'Apache License 2.0':
      licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
      break;
    case 'GNU General Public License v3.0':
      licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/';
      break;
    case 'ISC License':
      licenseLink = 'https://choosealicense.com/licenses/isc/';
      break;
    default:
      licenseLink = '';
  }

  if (!license) {
    return '';
  } else {
    return(`Copyright (c) Aiona. Licensed under the [${license}](${licenseLink}) license.`);
  }
  }
  

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else {
    let licenseSection = stripIndent(`
${renderLicenseLink(license)} 

${renderLicenseBadge(license)}`).trim()
    return licenseSection
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

${renderLicenseSection(license)}

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