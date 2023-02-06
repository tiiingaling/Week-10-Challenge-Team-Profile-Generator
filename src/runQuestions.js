const inquirer = require("inquirer");
const buildTeam = require('./build')

const Manager = require('../lib/Manager');
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

managers = [];
engineers = [];
interns = [];

const mainQuestions = () => {
    // runs through the main list
    inquirer
    .prompt([{
            type: 'list',
            name: 'choice',
            message: 'What employee would you like to add?',
            choices: [
                        'Manager',
                        'Engineer',
                        'Intern',
                        'Finish building team'
                    ],
            }])
     .then((response) => {
        // runs through the relevant questions depending on response
        switch(response.choice) {
            case 'Manager':
                addManager()
            break;

            case 'Engineer':
                addEngineer()
            break;
            
            case 'Intern':
                addIntern()
            break;

            case 'Finish building team':
                buildTeam(managers,engineers,interns)
            break;
        }  
    })
}

function addManager() {
    inquirer
    .prompt ([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the manager?'
    },
    {
      type: 'input',
      name: 'id',
      message:"What is the manager's id number?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the manager's email address?",
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "What is the manager's office number?",
    },
  ])
  .then ((response) => {
    // creates a new manager with the responses from the questions above
    manager = new Manager(response.id, response.name, response.email, response.officeNumber);
    // pushes the new data to the empty array
    managers.push(manager);
    //loops back to the main questions
    mainQuestions();
  })
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
  .then ((response) => {
    // creates a new employee with the responses from the questions above
    engineer = new Engineer(response.id, response.name, response.email, response.github);
    // pushes the new data to the empty array
    engineers.push(engineer);
    //loops back to the main questions
    mainQuestions();
  })
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
  .then ((response) => {
    // creates a new employee with the responses from the questions above
    intern = new Intern(response.id, response.name, response.email, response.school);
    // pushes the new data to the empty array
    interns.push(intern);
    //loops back to the main questions
    mainQuestions();
  })
  }

  // mainQuestions()

  module.exports = mainQuestions;