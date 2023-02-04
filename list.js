const inquirer = require("inquirer")

const listQuestions = () => {
    inquirer
    .prompt({
            type: 'list',
            name: 'which employee',
            message: 'What employee would you like to add?',
            choices: [
                        'Manager',
                        'Engineer',
                        'Intern',
                        'Finish team'
                    ],
            },
        )
    }

listQuestions();