const inquirer = require("inquirer")
const buildTeam = require('./build')

manager = [];
engineer = [];
intern = [];

const mainQuestions = () => {
    listQuestions()
    .then((response) => {
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
                buildTeam(Manager,Engineer,Intern)
            break;
        }  
    })
}

const listQuestions = () => {
    inquirer
    .prompt({
            type: 'list',
            name: 'choice',
            message: 'What employee would you like to add?',
            choices: [
                        'Manager',
                        'Engineer',
                        'Intern',
                        'Finish building team'
                    ],
            },)
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
      message:" What is the manager's id number?",
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
    manager = new Manager(response.id, response.name, response.email, response.officeNumber);

    managers.push(manager);

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

  mainQuestions()