const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const {generatePage} = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site.js');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const employees = [];

const addEmployee = () => {
  
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the employee\'s name?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter employee name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the employee\'s ID number?',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('Please enter the ID to proceed.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the employee\'s email?',
      default: () => {},
      validate: email => {
        // Regex mail check (return true if valid mail)
        valid = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
          if(!valid) {
            console.log('Please enter a valid email to proceed.')
            return false;
          }
        return true;
      }
    },
    {
      type: 'list',
      name: 'role',
      message: 'Choose the employee role from the list: ',
      choices: ['Manager', 'Engineer', 'Intern']
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is the manager\'s office number?',
      when: (answers) => answers.role === 'Manager'
    },
    {
      type: 'input',
      name: 'schoolName',
      message: 'What school is the intern attending?',
      when: (answers) => answers.role === 'Intern'
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is the Engineers\'s GitHub username?',
      when: (answers) => answers.role === 'Engineer'
    },
    {
      type: 'confirm',
      name: 'confirmAddEmployee',
      message: 'Would you like to add another employee to the team?',
      default: false
    }
    ])
    .then(employeeSpecs => {
      let {name, id, email, role, officeNumber, github, schoolName} = employeeSpecs;
      let manager, engineer, intern;
      if(role === 'Manager'){
        manager = new Manager(name, id, email,  officeNumber);

        employees.push(manager)
      } else if (role === 'Engineer') {
        engineer = new Engineer(name, id, email, github);

        employees.push(engineer)
      } else {
        intern = new Intern(name, id, email, schoolName);

        employees.push(intern)
      }
      
      if(employeeSpecs.confirmAddEmployee) {
        return addEmployee(employees);
      } else {
      return employees;
      }
    })
  
  }
    
addEmployee()
.then(employees => {
  return generatePage(employees)
})
.then(pageHTML => {
  return writeFile(pageHTML);
})
.then(writeFileResponse => {
  console.log(writeFileResponse);
  return copyFile();
})
.catch(err => {
  console.log(err);
});

 

