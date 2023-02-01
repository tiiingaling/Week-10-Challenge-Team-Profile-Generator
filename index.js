const inquirer = require('inquirer');
const fs = require('fs');

function addManager() {
  inquirer.prompt ([
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of the manager?'
  },
  {
    type: 'input',
    name: 'id',
    message: `What is the manager's id number?`,
  },
  {
    type: 'input',
    name: 'email',
    message: "What is the manager's email address?",
  },
  {
    type: 'input',
    name: 'office',
    message: "What is the manager's office number?",
  },
])
}

function addEngineer() {
  inquirer.prompt ([
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of the engineer?'
  },
  {
    type: 'input',
    name: 'id',
    message: `What is the engineer's id number?`,
  },
  {
    type: 'input',
    name: 'email',
    message: "What is the engineer's email address?",
  },
  {
    type: 'input',
    name: 'github',
    message: "What is the engineer's GitHub username?",
  },
])
}

function addIntern() {
  inquirer.prompt ([
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of the Intern?'
  },
  {
    type: 'input',
    name: 'id',
    message: `What is the Intern's id number?`,
  },
  {
    type: 'input',
    name: 'email',
    message: "What is the Intern's email address?",
  },
  {
    type: 'input',
    name: 'school',
    message: "Which school does the intern attend?",
  },
])
}
