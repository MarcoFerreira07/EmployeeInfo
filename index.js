const inquirer = require("inquirer")
const fs = require("fs")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager.js")
const Engineer = require("./lib/Engineer.js")
// const renderHTML = require("./src/employeeIndex.html")
const allEmployees = []
generateEmployee()

function generateEmployee() {
    inquirer
        .prompt([
            {
                //here this question will allow the user to open from a different sets of questions
                //based on job title
                type: 'list',
                name: 'employee role',
                message: 'Your role?',
                choices: ["Manager", "Engineer", "Intern"]
            },
        ])
        .then((answers) => {
            if (answers.role === "Manager") {
                console.log(answers)
                generateManager()


            } else if (answers.role === "Intern") {
                console.log(answers)
                generateIntern()

            } else if (answers.role === "Engineer") {
                console.log(answers)
                generateEngineer()

            } else {
                console.log("hello")
                makeHTML();
            }
        });
}
// Engineer questions 
function generateEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'ID number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Email?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'GitHub info?',
        },
    ]).then(response => {
        let engineer = new Engineer(response.name, response.id, response.email, response.github)

        allEmployees.push(engineer)
        generateEmployee()
    })
}
//intern
function generateIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'ID number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Email?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'School name?',
        },
    ]).then(response => {
        let intern = new Intern(response.name, response.id, response.email, response.school)

        allEmployees.push(intern)
        generateEmployee()
    })
}
// manager
function generateManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'ID number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Email?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Office number',
        },
    ]).then(response => {
        let manager = new Manager(response.name, response.id, response.email, response.officeNumber)

        allEmployees.push(manager)
        generateEmployee()
    })
}
function makeHTML() {

fs.writeFile('employeeIndex.html',renderHTML(allEmployees), err => {
    if (err) {
      console.error(err);
    }

})}
