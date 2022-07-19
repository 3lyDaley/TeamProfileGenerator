const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');


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
      validate: email => {
          // Regex mail check (return true if valid mail)
          return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
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
  ])
  .then(employeeData => {
    let {name, id, email, role, officeNumber, schoolName, github} = employeeData;
    employees.push(employeeData);
    console.log(employees);
  });
};


addEmployee();

