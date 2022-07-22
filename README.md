# Team Profile Generator

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) 
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

----------------------------------------------------------
 Command-line generator of an HTML Team Profile Page. 
 
 ## Contents
 
 - [Description](#description)
    - [User Story](#user-story)
    - [Acceptance Criteria](#acceptance-criteria)
 - [Dependencies](#dependencies)
 - [Installation Instructions](#installing)
 - [Execution](#executing-program)
 - [Testing Demo](#testing)
 - [Inquirer Function Demo](#inquirer-demo)
 - [Authors](#authors)
 - [License](#license)

## Description

For this project, I used the inquirer npm to create a command line series of prompts to gather information about an employee team consisting of a Manager, engineers, and interns. If those roles are applicable, the user selects the role and answers more questions relative to each position. When the user has completed thier entries, they respond 'N' when asked to confirm, and a file, `index.html`, is generated and deposited into `./dist`

### User Story

```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

### Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

### Dependencies

* VS_Code or other editing program that supports node.js package managers
* inquirer, ^8.2.4
* js, "^0.1.0",
* path, "^0.12.7"

### Installing

* Fork this repo and clone to your machine
* `npm i` to install all dependencies

### Executing program

* Open terminal in root
* enter `npm i` in command line for dependencies
* `npm run test` to run tests on `/lib` files
* `node index.js` to initiate prompts

### Testing


https://user-images.githubusercontent.com/100460009/180368055-c57711b8-8d38-4c30-856a-f265d5101c04.mp4


--------------------------------------------------------------

### Inquirer Demo


https://user-images.githubusercontent.com/100460009/180368101-42a507c3-a5f2-4631-89ba-0f2624f27b4b.mp4


_______________________________________________________________

## Authors

[Ely Daley](https://github.com/3lyDaley)

## Webpage Visuals
<img width="1151" alt="screenshot" src="https://user-images.githubusercontent.com/100460009/180367988-32b8bf5d-14b8-4cd7-b6d1-ff203a2847c0.png">


## License

This project is licensed under the [MIT] License - see the LICENSE.md file for details



