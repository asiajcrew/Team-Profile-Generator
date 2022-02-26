const inquirer = require('inquirer')

const questions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'manager-name',
            message: "What is the team manager's name?",
            default: 'Asia'
        },
        {
            type: 'input',
            name: 'employee-ID',
            message: 'What is the employee ID?',
            default: '12345678',
            validate: inputId => {
                if (inputId.length === 8) {
                    return true;
                } else {
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
            choices: ['Add an engineer, Add an intern, I am done building my team']
        }
    ])
}

questions();