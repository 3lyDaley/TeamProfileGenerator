function generateTeam(employeeData) {
  
  const teamHtml = [];
  for(let i = 0;i < this.length; i++){
  if(this.Manager){
    const managerHtml = `<div class="card bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header">${this.Manager.name}</div>
    <div class="card-body">
      <h5 class="card-title">Manager</h5>
      <p class="card-text">
      Email: ${employeeData.Manager.email}<br>
      Office Number: ${employeeData.Manager.officeNumber}
      </p>
    </div>`
    teamHtml.push(managerHtml);
    console.log(employeeData.Manager)
  }
  // else if(employeeData.Engineer) {
  //   const engineerHtml = `<div class="card bg-light mb-3" style="max-width: 18rem;">
  //   <div class="card-header">${engineer.name}</div>
  //   <div class="card-body">
  //     <h5 class="card-title">Engineer</h5>
  //     <p class="card-text">
  //     Email: ${engineer.email}<br>
  //     GitHub Username: ${engineer.github}
  //     </p>
  //   </div>`
  //   teamHtml.push(engineerHtml)
  //   console.log(employeeData.Engineer)
  // }
  // else if(employeeData.Intern){
  //   const internHtml = `<div class="card bg-light mb-3" style="max-width: 18rem;">
  //   <div class="card-header">${intern.name}</div>
  //   <div class="card-body">
  //     <h5 class="card-title">Intern</h5>
  //     <p class="card-text">
  //     Email: ${intern.email}<br>
  //     Attending ${intern.schoolName}
  //     </p>
  //   </div>`;
  //   teamHtml.push(internHtml);
  //   console.log(employeeData.Intern)
  // }
  
}
const teamInfo = teamHtml.join(' ')
console.log(teamHtml)
}





module.exports = {generateTeam}