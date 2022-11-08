const inquirer = require("inquirer")
const fs = require("fs")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager.js")
const Engineer = require("./lib/Engineer.js")
// const renderHTML = require("./src/employeeIndex.html")
const allEmployees = []
generateEmployee()

async function generateEmployee() {
    inquirer
        .prompt([
            {
                //job titles
                type: 'list',
                name: 'role',
                message: 'Your role?',
                choices: ["Manager", "Engineer", "Intern","Quit"]
            },
        ])
        .then(async(answers) =>  {
            if (answers.role === "Manager") {
                console.log(answers)
               await generateManager()


            } else if (answers.role === "Intern") {
                console.log(answers)
               await generateIntern()

            } else if (answers.role === "Engineer") {
                console.log(answers)
              await  generateEngineer()


            } else {
                makeHTML()
            }
        });
}
// Engineer questions 

function generateEngineer() {
    return   inquirer.prompt([
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
    return   inquirer.prompt([
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
  return  inquirer.prompt([
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
