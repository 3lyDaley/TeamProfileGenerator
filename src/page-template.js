const generateManager = (manager) => {
  if (!manager) {
    return '';
  }
  `<div class="card bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header">${manager.name}</div>
    <div class="card-body">
      <h5 class="card-title">${manager.role}</h5>
      <p class="card-text">
      Email: ${manager.email}<br>
      Office Number: ${manager.officeNumber}
      </p>
    </div>`
};

const generateIntern = (intern) => {
  if (!intern) {
    return '';
  }
  `<div class="card bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header">${intern.name}</div>
    <div class="card-body">
      <h5 class="card-title">${intern.role}</h5>
      <p class="card-text">
      Email: ${intern.email}<br>
      Attending ${intern.schoolName}
      </p>
    </div>`
};

const generateEngineer = (engineer) => {
  if (!engineer) {
    return '';
  }
  `<div class="card bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header">${engineer.name}</div>
    <div class="card-body">
      <h5 class="card-title">${engineer.role}</h5>
      <p class="card-text">
      Email: ${engineer.email}<br>
      GitHub Username: ${engineer.github}
      </p>
    </div>`
};


module.exports = templateData => {
  // destructure page data by section
  const { manager, engineer, intern } = templateData;

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>`
}