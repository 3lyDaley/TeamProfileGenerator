const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const {generateEngineer, generateManager, generateIntern, checkHTML, generateTeam} = require('./src/page-template');
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
      name: 'addMember',
      message: 'Would you like to add another employee to the team?',
      default: false
    }
  ])
  .then(employeeData => {
    let {name, id, email, role, officeNumber, schoolName, github} = employeeData;

    if(role === 'Manager'){
      let manager = new Manager(name, id, email, role, officeNumber);

      employees.push(manager);
      
    }
    else if(role === 'Engineer') {
      let engineer = new Engineer(name, id, email, github);
      
      employees.push(engineer)
      
    }
    else {
      let intern = new Intern(name, id, email, role, schoolName);
      
      employees.push(intern);
    }
    
   employees.join(',');

    if (employeeData.addMember) {
      return addEmployee(employees);
    } else {
      return(employees);
    }
  })
};


addEmployee()
.then(employees => {
  generateTeam(employees)
  console.log(employees)
})
 

