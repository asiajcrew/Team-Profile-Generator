const inquirer = require('inquirer')
const team = {
    manager: {},
    engineer: [],
    employees: []
}
const generateHTML = require('./src/page-template');

const questions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name?",
            default: 'Asia'
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is the employee ID?',
            default: '12345678',
            validate: inputId => {
                if (inputId.length === 8) {
                    return true;
                } else {
                    console.log('\n')
                    console.log('Please enter the 8 digit employee ID')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email address?',
            default: 'test@test.com'
        },
        {
            type: 'input',
            name: 'number',
            message: 'What is the office number?',
            default: '123-456-7890'
        },
        {
            type: 'list',
            name: 'options',
            choices: ['Add an engineer', 'Add an intern', 'I am done building my team']
        }
    ])
    .then(managerInfo => {
        team.manager = managerInfo;
        console.table(team)
        if (managerInfo.options === 'add an engineer') {
            engineerQuestions();
        } else if (managerInfo.options === 'add an intern') {
            internQuestions();
        } else {
            // add function that generate html
        }
    })
}

const engineerQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "Please enter the engineer's name"
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is the engineer ID?'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the engineer's email address?"
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "What is the engineer's github username?"
        },
        {
            type: 'list',
            name: 'options',
            choices: ['Add another engineer', 'Add an intern', 'I am done building my team']
        }
    ])
    .then(engineerInfo => {
        // change 'engineerInfo to the engineer object constructor once the code is written
        team.engineer = team.engineer.push(engineerInfo)
    })
}

const internQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "Please enter the engineer's name"
        },
        {
            type: 'input',
            name: 'internId',
            message: "What is the intern's ID?"
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the intern's email address?"
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?"
        }
    ])
}

questions();