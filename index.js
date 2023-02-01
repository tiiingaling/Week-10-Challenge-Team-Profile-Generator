const inquirer = require('inquirer');
const fs = require('fs');

function addEmployee() {
  inquirer.prompt ([
  {
    type: 'input',
    name: 'nameEmployee',
    message: 'What is the name of the employee?'
  },
  {
    type: 'input',
    name: 'idEmployee',
    message: `What is the employee's id number?`,
  },
  {
    type: 'input',
    name: 'idEmployee',
    message: "What is the employee's id number?",
  },
  {
    type: 'input',
    name: 'emailEmployee',
    message: "What is the employee's email address?",
  },
])
}

function addManager() {
  inquirer.prompt ([
  {
    type: 'input',
    name: 'nameManager',
    message: 'What is the name of the manager?'
  },
  {
    type: 'input',
    name: 'idManager',
    message: `What is the manager's id number?`,
  },
  {
    type: 'input',
    name: 'idManager',
    message: "What is the manager's id number?",
  },
  {
    type: 'input',
    name: 'emailManager',
    message: "What is the manager's email address?",
  },
  {
    type: 'input',
    name: 'officeManager',
    message: "What is the manager's office number?",
  },
])
}

function addEngineer() {
  inquirer.prompt ([
  {
    type: 'input',
    name: 'nameEngineer',
    message: 'What is the name of the engineer?'
  },
  {
    type: 'input',
    name: 'idEngineer',
    message: `What is the engineer's id number?`,
  },
  {
    type: 'input',
    name: 'idEngineer',
    message: "What is the engineer's id number?",
  },
  {
    type: 'input',
    name: 'emailEngineer',
    message: "What is the engineer's email address?",
  },
  {
    type: 'input',
    name: 'emailEngineer',
    message: "What is the engineer's GitHub username?",
  },
])
}

function addIntern() {
  inquirer.prompt ([
  {
    type: 'input',
    name: 'nameIntern',
    message: 'What is the name of the Intern?'
  },
  {
    type: 'input',
    name: 'idIntern',
    message: `What is the Intern's id number?`,
  },
  {
    type: 'input',
    name: 'idIntern',
    message: "What is the Intern's id number?",
  },
  {
    type: 'input',
    name: 'emailIntern',
    message: "What is the Intern's email address?",
  },
  {
    type: 'input',
    name: 'emailInten',
    message: "Which school is the intern from?",
  },
])
}
