const generateManager = (manager) => {
  if (!manager) {
    return '';
  }
  const managerHtml = `<div class="card bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header">${manager.name}</div>
    <div class="card-body">
      <h5 class="card-title">${manager.role}</h5>
      <p class="card-text">
      Email: ${manager.email}<br>
      Office Number: ${manager.officeNumber}
      </p>
    </div>`
    teamHtml.push(managerHtml);
};

const generateIntern = (intern) => {
  if (!intern) {
    return '';
  }
  const internHtml = `<div class="card bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header">${intern.name}</div>
    <div class="card-body">
      <h5 class="card-title">${intern.role}</h5>
      <p class="card-text">
      Email: ${intern.email}<br>
      Attending ${intern.schoolName}
      </p>
    </div>`;
    teamHtml.push(internHtml);
};

const generateEngineer = (engineer) => {
  if (!engineer) {
    return '';
  }
  const engineerHtml = `<div class="card bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header">${engineer.name}</div>
    <div class="card-body">
      <h5 class="card-title">${engineer.role}</h5>
      <p class="card-text">
      Email: ${engineer.email}<br>
      GitHub Username: ${engineer.github}
      </p>
    </div>`
    teamHtml.push(engineerHtml)
};

const teamHtml = [];
const teamInfo = teamHtml.join('')

const checkHTML = (teamInfo) => {
  console.log(teamInfo)
}

module.exports = {generateEngineer, generateIntern, generateManager, checkHTML}